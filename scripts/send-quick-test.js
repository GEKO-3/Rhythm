/**
 * Quick test notification sender for Ahmed Jazlaan
 * Run with: node send-quick-test.js "Your notification title" "Your message"
 */

const admin = require('firebase-admin');

// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();
const messaging = admin.messaging();

async function sendQuickTest() {
    try {
        // Get command line arguments
        const title = process.argv[2] || 'Test Notification';
        const body = process.argv[3] || 'This is a test notification from Rhythm admin!';
        
        console.log('🔔 Quick Test Notification Sender\n');
        console.log(`📝 Title: ${title}`);
        console.log(`💬 Body: ${body}\n`);
        
        // Find Ahmed Jazlaan in members
        const membersSnapshot = await db.ref('members').once('value');
        const members = membersSnapshot.val();
        
        const jazlaan = Object.values(members).find(m => 
            m.fullName && m.fullName.toLowerCase().includes('jazlaan')
        );
        
        if (!jazlaan) {
            console.log('❌ Ahmed Jazlaan not found in members');
            process.exit(1);
        }
        
        console.log(`👤 Found: ${jazlaan.fullName}`);
        console.log(`🔑 Access Code: ${jazlaan.accessCode}\n`);
        
        // Get token from userTokens
        const tokensSnapshot = await db.ref('userTokens').once('value');
        const tokens = tokensSnapshot.val();
        
        let token = null;
        
        // Try to find token by accessCode
        if (jazlaan.accessCode && tokens[jazlaan.accessCode]) {
            token = tokens[jazlaan.accessCode].token;
            console.log(`✓ Found token via accessCode: ${jazlaan.accessCode}`);
        } else {
            // Try to find by name in userTokens
            const tokenEntry = Object.values(tokens).find(t => 
                t.userName && t.userName.toLowerCase().includes('jazlaan')
            );
            if (tokenEntry) {
                token = tokenEntry.token;
                console.log(`✓ Found token via userName match`);
            }
        }
        
        if (!token) {
            console.log('❌ No FCM token found for Ahmed Jazlaan');
            console.log('\nAvailable tokens:');
            Object.entries(tokens).forEach(([key, val]) => {
                console.log(`  - ${key}: ${val.userName || 'Unknown'}`);
            });
            process.exit(1);
        }
        
        console.log(`🎫 Token: ${token.substring(0, 20)}...\n`);
        
        // Send notification
        const message = {
            notification: {
                title: title,
                body: body,
            },
            data: {
                type: 'test',
                timestamp: new Date().toISOString(),
            },
            token: token
        };
        
        console.log('📤 Sending notification...');
        const response = await messaging.send(message);
        
        console.log(`\n✅ Notification sent successfully!`);
        console.log(`   To: ${jazlaan.fullName}`);
        console.log(`   Message ID: ${response}\n`);
        
        process.exit(0);
        
    } catch (error) {
        console.error('\n❌ Error:', error.message);
        
        if (error.code === 'messaging/invalid-registration-token' ||
            error.code === 'messaging/registration-token-not-registered') {
            console.log('\n⚠️  Token is invalid. User needs to re-enable notifications in the app.');
        }
        
        process.exit(1);
    }
}

// Run the test
sendQuickTest();
