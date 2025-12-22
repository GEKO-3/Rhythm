# Testing Push Notifications - Quick Start

## 🎯 Goal
Send test push notifications to specific users to verify the system is working.

## 📋 What You Need

1. ✅ Firebase Admin SDK (installed)
2. ⏳ Service Account Key (need to download)
3. ✅ User with FCM token in database

## 🚀 Quick Start (5 minutes)

### Step 1: Download Service Account Key

1. Go to: https://console.firebase.google.com/project/rhythm-ea7a1/settings/serviceaccounts/adminsdk
2. Click "Generate New Private Key"
3. Save the downloaded JSON file as `serviceAccountKey.json` in your project root
   ```
   /Users/ahmedjazlaanshareef/Dev/Rhythm/serviceAccountKey.json
   ```

⚠️ **IMPORTANT:** This file is already in `.gitignore` - never commit it to git!

### Step 2: Run the Test Script

```bash
npm run test-notification
```

Or directly:
```bash
node send-test-notification.js
```

### Step 3: Follow the Interactive Prompts

The script will:
1. Load all members from database
2. Show which members can receive notifications (✓) and which can't (✗)
3. Let you select a member
4. Ask for notification title and body
5. Send the notification immediately!

## 📱 Example Session

```
🔔 Rhythm Push Notification Tester

📋 Loading members...

Available members:

1. Ahmed Jazlaan ✓ (Can receive notifications)
2. John Doe ✗ (No token)
3. Jane Smith ✓ (Can receive notifications)

Select member number (or q to quit): 1

Selected: Ahmed Jazlaan

Notification Title: Test from Admin
Notification Body: Testing push notifications - you should see this!

📤 Sending notification...

✅ Notification sent successfully!
   To: Ahmed Jazlaan
   Message ID: projects/rhythm-ea7a1/messages/0:1234567890

Send another notification? (y/n): n

Goodbye! 👋
```

## ✅ Checklist

Before testing, make sure:

- [ ] User has the app installed (PWA)
- [ ] User has logged in at least once
- [ ] User clicked "Allow" when asked for notification permissions
- [ ] User's device has internet connection
- [ ] User's FCM token exists in Firebase Database at `members/{memberId}/fcmToken`

## 🔍 How to Check if User Has Token

1. Go to: https://console.firebase.google.com/project/rhythm-ea7a1/database
2. Navigate to: `members` → `{memberId}` → `fcmToken`
3. If `fcmToken` exists → User can receive notifications ✅
4. If no `fcmToken` → User needs to enable notifications ❌

## 🐛 Troubleshooting

### "Cannot find module 'firebase-admin'"
```bash
npm install
```

### "Cannot find serviceAccountKey.json"
Download it from step 1 above. Make sure it's named exactly `serviceAccountKey.json` and is in the project root.

### "This member cannot receive notifications"
The user needs to:
1. Open the app (login.html)
2. Log in
3. Click "Allow" when asked for notifications
4. Token will be saved automatically

### "Invalid token" error
Token has expired. The script will automatically remove it. User needs to re-enable notifications.

### Notification not received
- Check device notification settings
- Make sure app has notification permissions
- Try closing and reopening the app
- Check if device is connected to internet

## 🎓 How It Works

1. **Script connects** to Firebase using service account credentials
2. **Loads members** from Firebase Realtime Database
3. **You select** a member who has an FCM token
4. **Script sends** notification via Firebase Cloud Messaging API
5. **Firebase delivers** to user's device via service worker
6. **User sees** notification on their device!

## 🔐 Security Notes

- `serviceAccountKey.json` has **full admin access** to your Firebase project
- **Never commit** this file to git (already in `.gitignore`)
- **Never share** this file with anyone
- Keep it secure on your local machine only

## 📊 Files Created

```
/send-test-notification.js          ← The test script
/serviceAccountKey.json             ← Download this (not in repo)
/package.json                       ← Updated with firebase-admin
/.gitignore                         ← Protects sensitive files
/PUSH_NOTIFICATIONS_SIMPLE_GUIDE.md ← Detailed guide
/PUSH_NOTIFICATIONS_TEST_GUIDE.md   ← Cloud Functions guide (for later)
```

## 🎉 Next Steps

After successful testing:

1. ✅ Verify notifications work
2. Test with multiple users
3. Test different notification types (birthday, announcements)
4. Consider upgrading to Blaze plan for Cloud Functions (optional)
5. Set up scheduled birthday notifications (requires Blaze plan)

## 💡 Pro Tips

- Test with yourself first
- Keep the terminal output - it shows message IDs for tracking
- Invalid tokens are automatically removed
- You can send unlimited test notifications (FCM is free!)

## ❓ Need Help?

Check these files:
- `PUSH_NOTIFICATIONS_SIMPLE_GUIDE.md` - Detailed setup guide
- `FCM_SETUP_GUIDE.md` - FCM configuration info
- `NOTIFICATIONS_IMPLEMENTATION.md` - Technical implementation details

## 🚀 Ready to Test?

Run this now:
```bash
node send-test-notification.js
```

Good luck! 🎵
