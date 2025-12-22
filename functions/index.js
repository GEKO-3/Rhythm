const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

/**
 * Cloud Function to send a push notification to a specific user
 * Called from the admin test-notifications page
 */
exports.sendTestNotification = functions.https.onCall(async (data, context) => {
    // Verify the caller is authenticated and is an admin
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'User must be authenticated to send notifications.'
        );
    }

    // Get the caller's UID
    const callerUid = context.auth.uid;
    
    // Check if caller is admin
    const callerSnapshot = await admin.database()
        .ref(`members/${callerUid}`)
        .once('value');
    
    const caller = callerSnapshot.val();
    if (!caller || !caller.isAdmin) {
        throw new functions.https.HttpsError(
            'permission-denied',
            'Only admins can send notifications.'
        );
    }

    // Validate input
    const { token, title, body, type, memberId, memberName } = data;

    if (!token || !title || !body) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Missing required fields: token, title, body'
        );
    }

    try {
        // Prepare the notification message
        const message = {
            notification: {
                title: title,
                body: body,
            },
            data: {
                type: type || 'test',
                sentBy: caller.fullName,
                timestamp: new Date().toISOString(),
                clickAction: 'FLUTTER_NOTIFICATION_CLICK'
            },
            token: token
        };

        // Send the notification
        const response = await admin.messaging().send(message);

        // Log the notification
        console.log('Notification sent successfully:', {
            to: memberName,
            memberId: memberId,
            from: caller.fullName,
            messageId: response
        });

        return {
            success: true,
            messageId: response,
            message: `Notification sent successfully to ${memberName}`
        };

    } catch (error) {
        console.error('Error sending notification:', error);
        
        // Handle specific FCM errors
        if (error.code === 'messaging/invalid-registration-token' ||
            error.code === 'messaging/registration-token-not-registered') {
            
            // Token is invalid - remove it from the database
            await admin.database()
                .ref(`members/${memberId}/fcmToken`)
                .remove();
            
            throw new functions.https.HttpsError(
                'invalid-argument',
                'The notification token is no longer valid. It has been removed.'
            );
        }

        throw new functions.https.HttpsError(
            'internal',
            `Failed to send notification: ${error.message}`
        );
    }
});

/**
 * Cloud Function to send birthday notifications
 * Can be triggered manually or scheduled
 */
exports.sendBirthdayNotifications = functions.https.onCall(async (data, context) => {
    // Verify the caller is authenticated and is an admin
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'User must be authenticated.'
        );
    }

    const callerUid = context.auth.uid;
    const callerSnapshot = await admin.database()
        .ref(`members/${callerUid}`)
        .once('value');
    
    const caller = callerSnapshot.val();
    if (!caller || !caller.isAdmin) {
        throw new functions.https.HttpsError(
            'permission-denied',
            'Only admins can trigger birthday notifications.'
        );
    }

    try {
        const now = new Date();
        const today = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        // Get all members
        const membersSnapshot = await admin.database()
            .ref('members')
            .once('value');
        
        const members = membersSnapshot.val();
        if (!members) {
            return { success: true, count: 0, message: 'No members found' };
        }

        // Find birthday members with FCM tokens
        const birthdayMembers = Object.values(members).filter(member => {
            if (!member.dob || !member.fcmToken) return false;
            const dob = new Date(member.dob);
            const memberBirthday = `${String(dob.getMonth() + 1).padStart(2, '0')}-${String(dob.getDate()).padStart(2, '0')}`;
            return memberBirthday === today;
        });

        if (birthdayMembers.length === 0) {
            return { success: true, count: 0, message: 'No birthdays today' };
        }

        // Prepare batch notifications
        const messages = birthdayMembers.map(member => ({
            notification: {
                title: '🎉 Happy Birthday!',
                body: `Wishing you a wonderful birthday, ${member.fullName}! 🎂`,
            },
            data: {
                type: 'birthday',
                memberId: member.memberId,
                timestamp: new Date().toISOString()
            },
            token: member.fcmToken
        }));

        // Send all notifications
        const response = await admin.messaging().sendAll(messages);

        console.log(`Birthday notifications sent: ${response.successCount} successful, ${response.failureCount} failed`);

        return {
            success: true,
            count: response.successCount,
            failed: response.failureCount,
            members: birthdayMembers.map(m => m.fullName)
        };

    } catch (error) {
        console.error('Error sending birthday notifications:', error);
        throw new functions.https.HttpsError(
            'internal',
            `Failed to send birthday notifications: ${error.message}`
        );
    }
});

/**
 * Scheduled function to send birthday notifications daily at 9 AM
 * Uncomment to enable automatic daily notifications
 */
// exports.scheduledBirthdayNotifications = functions.pubsub
//     .schedule('0 9 * * *')
//     .timeZone('Asia/Colombo') // Change to your timezone
//     .onRun(async (context) => {
//         // Same logic as sendBirthdayNotifications above
//         console.log('Running scheduled birthday check...');
//         // Implementation here
//     });

/**
 * Cloud Function to send bulk notifications to multiple users
 * Called from the simple-notify admin page
 */
exports.sendBulkNotifications = functions.https.onCall(async (data, context) => {
    // Verify the caller is authenticated and is an admin
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'User must be authenticated to send notifications.'
        );
    }

    // Get the caller's UID and verify admin status
    const callerUid = context.auth.uid;
    const callerSnapshot = await admin.database()
        .ref(`members/${callerUid}`)
        .once('value');
    
    const caller = callerSnapshot.val();
    if (!caller || !caller.isAdmin) {
        throw new functions.https.HttpsError(
            'permission-denied',
            'Only admins can send bulk notifications.'
        );
    }

    // Validate input
    const { title, body, recipients } = data;

    if (!title || !body || !recipients || !Array.isArray(recipients) || recipients.length === 0) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Missing or invalid required fields: title, body, recipients (array)'
        );
    }

    try {
        // Get tokens for all recipients
        const tokensSnapshot = await admin.database()
            .ref('userTokens')
            .once('value');
        
        const userTokens = tokensSnapshot.val() || {};
        
        // Prepare messages for all recipients with valid tokens
        const messages = [];
        const validRecipients = [];
        const invalidRecipients = [];

        for (const accessCode of recipients) {
            const token = userTokens[accessCode];
            const tokenString = typeof token === 'string' ? token : (token?.token || '');
            
            if (tokenString && !tokenString.startsWith('mock_token_')) {
                messages.push({
                    notification: {
                        title: title,
                        body: body,
                    },
                    data: {
                        type: 'admin_notification',
                        sentBy: caller.fullName,
                        timestamp: new Date().toISOString(),
                        clickAction: 'FLUTTER_NOTIFICATION_CLICK'
                    },
                    token: tokenString
                });
                validRecipients.push(accessCode);
            } else {
                invalidRecipients.push(accessCode);
            }
        }

        if (messages.length === 0) {
            throw new functions.https.HttpsError(
                'failed-precondition',
                'No valid notification tokens found for the selected recipients.'
            );
        }

        // Send all notifications in batch
        const response = await admin.messaging().sendAll(messages);

        // Log the notification
        console.log('Bulk notification sent:', {
            title: title,
            from: caller.fullName,
            totalRecipients: recipients.length,
            successCount: response.successCount,
            failureCount: response.failureCount
        });

        // Handle failures
        const failedTokens = [];
        response.responses.forEach((resp, idx) => {
            if (!resp.success) {
                failedTokens.push({
                    accessCode: validRecipients[idx],
                    error: resp.error?.code || 'unknown'
                });
            }
        });

        return {
            success: true,
            totalRecipients: recipients.length,
            successCount: response.successCount,
            failureCount: response.failureCount,
            invalidRecipients: invalidRecipients.length,
            failedTokens: failedTokens,
            message: `Sent to ${response.successCount} of ${recipients.length} recipients`
        };

    } catch (error) {
        console.error('Error sending bulk notifications:', error);
        throw new functions.https.HttpsError(
            'internal',
            `Failed to send notifications: ${error.message}`
        );
    }
});
