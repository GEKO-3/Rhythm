/**
 * Simple Node.js script to send test notifications
 * 
 * Interactive mode: node send-test-notification.js
 * Command-line mode: node send-test-notification.js --title "Title" --body "Body" --recipients "all"
 * 
 * Recipients options:
 *  --recipients all         Send to all users with tokens
 *  --recipients admins      Send to admins only
 *  --recipients members     Send to non-admin members
 *  --recipients "name"      Send to specific user by name
 * 
 * Requirements:
 * 1. Firebase service account key JSON file
 * 2. npm install firebase-admin
 */

const admin = require('firebase-admin');
const readline = require('readline');

// Parse command-line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
    const index = args.findIndex(arg => arg === `--${name}`);
    return index >= 0 && args[index + 1] ? args[index + 1] : null;
};

const cmdTitle = getArg('title');
const cmdBody = getArg('body');
const cmdRecipients = getArg('recipients');
const cmdUrl = getArg('url');

// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();
const messaging = admin.messaging();

// Create readline interface for user input (interactive mode)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

async function listMembers() {
    console.log('\n📋 Loading members...\n');
    
    // Load members
    const membersSnapshot = await db.ref('members').once('value');
    const members = membersSnapshot.val();
    
    if (!members) {
        console.log('❌ No members found in database');
        return null;
    }
    
    // Load tokens from userTokens node
    const tokensSnapshot = await db.ref('userTokens').once('value');
    const tokens = tokensSnapshot.exists() ? tokensSnapshot.val() : {};
    
    console.log(`📊 Found ${Object.keys(tokens).length} FCM tokens in database`);
    console.log(`🔑 Token keys:`, Object.keys(tokens).join(', ').substring(0, 100) + '...');
    
    // Map tokens to members by accessCode or userId
    const membersList = Object.values(members);
    let matchedCount = 0;
    for (const member of membersList) {
        const accessCode = member.accessCode || member.userId;
        
        // Check if this member has a token in userTokens
        if (accessCode && tokens[accessCode]) {
            const tokenData = tokens[accessCode];
            // Token can be a string or an object with a token property
            member.fcmToken = typeof tokenData === 'string' ? tokenData : tokenData.token;
            matchedCount++;
        }
    }
    
    console.log(`🔗 Matched ${matchedCount} tokens to members\n`);
    
    // Sort by name
    membersList.sort((a, b) => a.fullName.localeCompare(b.fullName));
    
    console.log('Available members:\n');
    membersList.forEach((member, index) => {
        const hasToken = member.fcmToken ? '✓' : '✗';
        const status = member.fcmToken ? '(Can receive notifications)' : '(No token)';
        console.log(`${index + 1}. ${member.fullName} ${hasToken} ${status}`);
    });
    
    return membersList;
}
async function sendNotification(member, title, body, url = null) {
    if (!member.fcmToken) {
        throw new Error('This member does not have a notification token');
    }

    const clickUrl = url || 'https://rhythmboduberu.com/login.html';

    const message = {
        data: {
            title: title,
            body: body,
            type: 'admin_notification',
            timestamp: new Date().toISOString(),
            clickUrl: clickUrl
        },
        token: member.fcmToken
    };

    try {
        const response = await messaging.send(message);
        console.log(`✅ ${member.fullName} - Sent (${response.substring(0, 20)}...)`);
        return { success: true, member: member.fullName, messageId: response };
    } catch (error) {
        if (error.code === 'messaging/invalid-registration-token' ||
            error.code === 'messaging/registration-token-not-registered') {
            console.log(`⚠️  ${member.fullName} - Invalid token (removed)`);
            // Remove invalid token
            const accessCode = member.accessCode || member.userId;
            if (accessCode) {
                await db.ref(`userTokens/${accessCode}`).remove();
            }
        } else {
            console.log(`❌ ${member.fullName} - Error: ${error.message}`);
        }
        return { success: false, member: member.fullName, error: error.message };
    }
}

async function sendBulkNotifications(members, title, body, recipientFilter = 'all', url = null) {
    console.log(`\n📤 Sending notifications to ${recipientFilter} recipients...\n`);
    
    // Filter members based on recipient type
    let filteredMembers = members.filter(m => m.fcmToken);
    
    // Check if recipientFilter is a comma-separated list of access codes
    if (recipientFilter.includes(',')) {
        const accessCodes = recipientFilter.split(',').map(code => code.trim());
        console.log(`🎯 Filtering by access codes: ${accessCodes.join(', ')}`);
        filteredMembers = filteredMembers.filter(m => accessCodes.includes(m.accessCode || m.userId));
    } else if (recipientFilter === 'admins') {
        filteredMembers = filteredMembers.filter(m => m.isAdmin || m.role === 'admin');
    } else if (recipientFilter === 'members') {
        filteredMembers = filteredMembers.filter(m => !m.isAdmin && m.role !== 'admin');
    } else if (recipientFilter !== 'all') {
        // Specific user by name or single access code
        const searchTerm = recipientFilter.toLowerCase();
        filteredMembers = filteredMembers.filter(m => 
            m.fullName.toLowerCase().includes(searchTerm) ||
            m.accessCode === recipientFilter ||
            m.userId === recipientFilter
        );
    }
    
    if (filteredMembers.length === 0) {
        console.log('❌ No matching recipients found');
        return { successful: 0, failed: 0 };
    }
    
    console.log(`Sending to ${filteredMembers.length} recipients...\n`);
    
    const results = await Promise.all(
        filteredMembers.map(member => sendNotification(member, title, body, url))
    );
    
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`\n📊 Results: ${successful} successful, ${failed} failed`);
    
    return { successful, failed, results };
}

async function main() {
    console.log('🔔 Rhythm Push Notification Sender\n');
    
    try {
        const members = await listMembers();
        if (!members || members.length === 0) {
            console.log('\n❌ No members available');
            rl.close();
            return;
        }
        
        // Check if running in command-line mode
        if (cmdTitle && cmdBody) {
            console.log('\n📋 Command-line mode detected');
            console.log(`   Title: ${cmdTitle}`);
            console.log(`   Body: ${cmdBody}`);
            console.log(`   Recipients: ${cmdRecipients || 'all'}`);
            console.log(`   URL: ${cmdUrl || 'default (login page)'}`);
            
            const results = await sendBulkNotifications(members, cmdTitle, cmdBody, cmdRecipients || 'all', cmdUrl);
            
            console.log('\n✅ Notification sending complete!');
            rl.close();
            process.exit(0);
            return;
        }
        
        // Interactive mode
        console.log('\n📱 Interactive Mode\n');
        
        // Get member selection
        const selection = await question('Select member number (or "all" for everyone, q to quit): ');
        
        if (selection.toLowerCase() === 'q') {
            console.log('Goodbye! 👋');
            rl.close();
            return;
        }
        
        let selectedMembers = [];
        
        if (selection.toLowerCase() === 'all') {
            selectedMembers = members.filter(m => m.fcmToken);
            console.log(`\nSending to all ${selectedMembers.length} members with tokens`);
        } else {
            const memberIndex = parseInt(selection) - 1;
            if (isNaN(memberIndex) || memberIndex < 0 || memberIndex >= members.length) {
                console.log('❌ Invalid selection');
                rl.close();
                return;
            }
            
            const selectedMember = members[memberIndex];
            if (!selectedMember.fcmToken) {
                console.log('❌ This member cannot receive notifications (no FCM token)');
                rl.close();
                return;
            }
            
            selectedMembers = [selectedMember];
            console.log(`\nSelected: ${selectedMember.fullName}`);
        }
        
        // Get notification details
        const title = await question('\nNotification Title: ');
        const body = await question('Notification Body: ');
        
        if (!title || !body) {
            console.log('❌ Title and body are required');
            rl.close();
            return;
        }
        
        // Send notifications
        if (selectedMembers.length === 1) {
            console.log('\n📤 Sending notification...');
            await sendNotification(selectedMembers[0], title, body);
        } else {
            await sendBulkNotifications(members, title, body, 'all');
        }
        
        // Ask if user wants to send another
        const again = await question('\nSend another notification? (y/n): ');
        if (again.toLowerCase() === 'y') {
            rl.close();
            main(); // Restart
        } else {
            console.log('\nGoodbye! 👋');
            rl.close();
        }
        
    } catch (error) {
        console.error('\n❌ Error:', error.message);
        rl.close();
    }
}

// Run the script
main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
