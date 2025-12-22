# Push Notifications Testing Guide

## Setup Cloud Functions

1. **Install Dependencies**
   ```bash
   cd functions
   npm install
   ```

2. **Deploy Cloud Functions**
   ```bash
   firebase deploy --only functions
   ```

   This will deploy:
   - `sendTestNotification` - For sending test notifications to specific users
   - `sendBirthdayNotifications` - For sending birthday notifications (manual trigger)

## Using the Test Interface

1. **Access the Test Page**
   - Navigate to: `https://rhythmboduberu.com/pages/admin/test-notifications.html`
   - Or locally: Open `pages/admin/test-notifications.html`

2. **Send a Test Notification**
   - Select a user from the dropdown (only users with notification tokens are enabled)
   - Enter a notification title
   - Enter a notification message
   - Click "Send Notification"

3. **User Requirements**
   - The recipient must have notifications enabled in the app
   - The recipient must have logged in and allowed notifications
   - The user's FCM token must be stored in the database

## How It Works

### Frontend (`test-notifications.html`)
- Loads all members from Firebase Database
- Shows which members have FCM tokens (green ✓) vs no tokens (red ✗)
- Calls the Cloud Function to send notifications
- Handles errors and displays success messages

### Backend (`functions/index.js`)
- `sendTestNotification`: Validates admin permissions, sends notification via FCM
- Handles invalid tokens by removing them from database
- Logs all notification activity
- Returns success/failure status

## Testing Flow

1. **First Time Setup**
   ```bash
   # From project root
   cd functions
   npm install
   cd ..
   firebase deploy --only functions
   ```

2. **Send Test Notification**
   - Go to test-notifications page
   - Select yourself or another member
   - Enter test message
   - Click send
   - Check your device for notification

3. **Verify Notification Received**
   - Notification should appear on device
   - Check browser console for logs
   - Check Firebase Functions logs: `firebase functions:log`

## Troubleshooting

### "No notification token" error
- User needs to enable notifications in the app
- User must log in after enabling notifications
- Check if `fcmToken` exists in database under `members/{memberId}/fcmToken`

### "Permission denied" error
- Only admins can send notifications
- Check if your account has `isAdmin: true` in database

### "Invalid token" error
- Token has expired or is invalid
- Function automatically removes invalid tokens
- User needs to re-enable notifications

### Function not deployed
```bash
firebase deploy --only functions
firebase functions:log  # Check for errors
```

## Birthday Notifications

To manually trigger birthday notifications:
```javascript
// Call from browser console on test page
const sendBirthday = httpsCallable(functions, 'sendBirthdayNotifications');
const result = await sendBirthday();
console.log(result.data);
```

To enable automatic daily birthday notifications:
1. Uncomment the `scheduledBirthdayNotifications` function in `functions/index.js`
2. Deploy: `firebase deploy --only functions`
3. It will run daily at 9 AM (adjust timezone as needed)

## API Reference

### sendTestNotification(data)
**Parameters:**
- `token` (string): FCM token of recipient
- `title` (string): Notification title
- `body` (string): Notification body
- `type` (string): Type identifier (default: 'test')
- `memberId` (string): Recipient member ID
- `memberName` (string): Recipient name

**Returns:**
```javascript
{
  success: true,
  messageId: "projects/rhythm-ea7a1/messages/1234567890",
  message: "Notification sent successfully to John Doe"
}
```

### sendBirthdayNotifications()
**Returns:**
```javascript
{
  success: true,
  count: 2,  // Number of notifications sent
  failed: 0, // Number of failures
  members: ["John Doe", "Jane Smith"]
}
```

## Security Notes

- Only authenticated admins can send notifications
- Cloud Functions verify admin status before sending
- Invalid tokens are automatically removed from database
- All notification activity is logged

## Cost Considerations

- Cloud Functions: Free tier includes 2M invocations/month
- FCM: Free unlimited messages
- Database reads: Each notification check counts as 1 read per member

## Next Steps

1. Test sending notifications to yourself
2. Test with multiple users
3. Enable scheduled birthday notifications (optional)
4. Monitor logs for any issues
5. Add notification history tracking (optional)
