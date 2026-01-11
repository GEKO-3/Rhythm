# Push Notifications Testing - Simple Setup

Since Cloud Functions require a paid Firebase plan, here are two alternative methods:

## Method 1: Node.js Script (Recommended for Testing)

### Setup

1. **Download Service Account Key**
   - Go to [Firebase Console](https://console.firebase.google.com/project/rhythm-ea7a1/settings/serviceaccounts/adminsdk)
   - Click "Generate New Private Key"
   - Save as `serviceAccountKey.json` in your project root
   - **IMPORTANT:** Add this file to `.gitignore` (never commit it!)

2. **Install Dependencies**
   ```bash
   npm install firebase-admin
   ```

3. **Run the Script**
   ```bash
   node send-test-notification.js
   ```

4. **Follow Prompts**
   - Select a member from the list
   - Enter notification title
   - Enter notification body
   - Notification will be sent immediately!

### Example Usage
```
🔔 Rhythm Push Notification Tester

📋 Loading members...

Available members:

1. John Doe ✓ (Can receive notifications)
2. Jane Smith ✗ (No token)
3. Bob Wilson ✓ (Can receive notifications)

Select member number (or q to quit): 1

Selected: John Doe

Notification Title: Test from Admin
Notification Body: This is a test notification!

📤 Sending notification...

✅ Notification sent successfully!
   To: John Doe
   Message ID: projects/rhythm-ea7a1/messages/1234567890

Send another notification? (y/n):
```

## Method 2: Web Interface (Requires Backend)

If you want the web interface to work (`test-notifications.html`), you have two options:

### Option A: Upgrade to Blaze Plan (Pay-as-you-go)
- Free tier: 2M function invocations/month
- Only pay for what you use beyond free tier
- Enable at: https://console.firebase.google.com/project/rhythm-ea7a1/usage/details

Then run:
```bash
firebase deploy --only functions
```

### Option B: Use a Different Backend
Create a simple Express.js server:

1. **Create server file** (`server.js`):
```javascript
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-notification', async (req, res) => {
    const { token, title, body, memberId, memberName } = req.body;
    
    try {
        const message = {
            notification: { title, body },
            data: { type: 'test', timestamp: new Date().toISOString() },
            token: token
        };
        
        const response = await admin.messaging().send(message);
        
        res.json({
            success: true,
            messageId: response,
            message: `Notification sent to ${memberName}`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Notification server running on http://localhost:3000');
});
```

2. **Install dependencies**:
```bash
npm install express cors firebase-admin
```

3. **Run server**:
```bash
node server.js
```

4. **Update test-notifications.html** to use `http://localhost:3000/send-notification`

## Recommended Approach

**For quick testing:** Use Method 1 (Node.js script)
- No cost
- Works immediately
- Perfect for testing individual notifications

**For production:** Upgrade to Blaze plan
- Still free for most usage (2M invocations/month)
- Proper security with Firebase authentication
- Can be called directly from web interface
- More scalable

## Testing Checklist

- [ ] User has enabled notifications in app
- [ ] User's FCM token exists in database (`members/{memberId}/fcmToken`)
- [ ] Service account key downloaded (for Node.js script)
- [ ] Dependencies installed
- [ ] Notification received on device

## Security Notes

- **Never commit** `serviceAccountKey.json` to git
- Add to `.gitignore`:
  ```
  serviceAccountKey.json
  ```
- The service account has full admin access to your Firebase project
- Keep it secure!

## Troubleshooting

### "Cannot find module 'firebase-admin'"
```bash
npm install firebase-admin
```

### "No such file: serviceAccountKey.json"
Download it from Firebase Console > Project Settings > Service Accounts

### "Invalid token" error
- Token has expired
- User needs to re-enable notifications
- Script will automatically remove invalid tokens

### Notification not received
- Check if user has notifications enabled on device
- Check if token exists in database
- Check device notification permissions
- Check if app is in foreground/background

## What's Next?

After testing:
1. Decide if you want to upgrade to Blaze plan
2. Test birthday notifications
3. Set up scheduled notifications (requires Cloud Functions)
4. Monitor notification delivery rates
