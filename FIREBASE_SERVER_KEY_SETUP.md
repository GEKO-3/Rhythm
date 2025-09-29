# 🔑 Firebase Server Key Setup Guide

To enable push notifications from the admin panel, you need to configure the Firebase Server Key.

## How to Get Your Firebase Server Key:

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project: `rhythm-ea7a1`

2. **Navigate to Project Settings**
   - Click the gear icon ⚙️ in the left sidebar
   - Select "Project settings"

3. **Go to Cloud Messaging Tab**
   - Click on the "Cloud Messaging" tab
   - Scroll down to "Project credentials"

4. **Copy the Server Key**
   - Find "Server key" (it starts with `AAAA...`)
   - Copy this entire key

5. **Update the Admin Panel**
   - Open `pages/admin/send-notification.html`
   - Find the line with `const serverKey = '...'`
   - Replace the placeholder key with your actual server key

## Security Note:

⚠️ **Important**: The server key should ideally be kept secret. For GitHub Pages hosting, this is a limitation. In a production environment, you would:

1. Use a backend server to handle notifications
2. Store the server key as an environment variable
3. Use OAuth2 for better security

For this GitHub Pages setup, the server key is included in the client-side code, which works but is less secure.

## Current Server Key Location:

The server key is currently set in:
```javascript
// In pages/admin/send-notification.html
const serverKey = 'YOUR_ACTUAL_SERVER_KEY_HERE';
```

Replace `YOUR_ACTUAL_SERVER_KEY_HERE` with your actual Firebase server key.

## Testing:

1. Log in as an admin user
2. Go to Admin Panel → Send Notifications
3. Load recipients to see approved users
4. Send a test notification
5. Check browser console for any errors

## Troubleshooting:

- **"Authentication error"**: Check if server key is correct
- **"No recipients found"**: Ensure users have 'active' or 'approved' status
- **"CORS error"**: This shouldn't happen with FCM, but check browser console
- **Notifications not appearing**: Check if users have granted notification permission

## Notification Types Supported:

- 📢 General announcements
- 📅 Event reminders  
- 🎂 Birthday wishes
- 🚨 Urgent alerts
- 🔄 Version updates
- 👑 Admin alerts

All notifications respect the security restrictions - only approved users receive them.