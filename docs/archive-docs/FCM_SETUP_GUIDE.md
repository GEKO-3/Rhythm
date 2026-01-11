# 🔔 Firebase Cloud Messaging (FCM) Setup Guide

## Step 1: Enable Cloud Messaging in Firebase Console

### 1.1 Access Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **rhythm-ea7a1**

### 1.2 Enable Cloud Messaging
1. In the left sidebar, click **"Messaging"**
2. If prompted, click **"Get Started"**
3. Firebase Cloud Messaging is now enabled for your project

## Step 2: Generate VAPID Keys

### 2.1 Go to Project Settings
1. Click the **gear icon** ⚙️ in the left sidebar (next to "Project Overview")
2. Select **"Project settings"**

### 2.2 Navigate to Cloud Messaging Tab
1. Click the **"Cloud Messaging"** tab at the top
2. Look for sections related to **"Web"** or **"Web Push"**

### 2.3 Generate Web Push Certificate (Multiple possible locations)

**Option A: Look for "Web Push certificates" section:**
1. Scroll down to find **"Web Push certificates"**
2. Click **"Generate key pair"** or **"Generate"**

**Option B: Look for "Web configuration" section:**
1. Find **"Web configuration"** or **"Web app"** section
2. Look for **"Key pair"** or **"Web Push certificate"**
3. Click **"Generate key pair"**

**Option C: If you see "Web app certificates":**
1. Under **"Web app certificates"**, click **"Generate certificate"**

**Option D: Alternative method via Firebase SDK setup:**
1. Go back to **Project Overview**
2. Click **"Add app"** → **Web app** (</> icon)
3. Register your app (name: "Rhythm Boduberu Web")
4. In the setup process, you should see Web Push certificate options

### 2.4 Save the VAPID Key
1. Copy the generated **VAPID key** (starts with `B...` and is very long)
2. **IMPORTANT**: Save this key securely - you'll need it in your code

**Your VAPID key:**
```
BMC1n7BlXCjUkooMAPhbAktrF32JNDPjv3ZayehpnVDlVmwz2PAFA8PTuaKZChDaJ9h50fJGbwMaJ_iqX-eOE68
```
✅ **Key obtained successfully!**

### 2.5 If You Still Can't Find It
**Alternative locations to check:**
- **Messaging** → **Settings** (gear icon in messaging section)
- **Project Settings** → **General** tab → Scroll down to "Your apps" section
- **Project Settings** → **Service accounts** tab

**Screenshot locations**: The interface shows sections for different platforms (iOS, Android, Web). Look in the **Web** section.

## Step 3: Get Your Firebase Server Key (For Backend)

### 3.1 Get Server Key
1. Still in **"Cloud Messaging"** tab
2. Under **"Cloud Messaging API (Legacy)"**
3. Copy the **"Server key"** 
4. **IMPORTANT**: Keep this secret - it's for server-side operations only

## Step 4: Update Your Web App Configuration

### 4.1 Add FCM to Your Firebase Config
Your current Firebase config needs the `messagingSenderId`:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBM1r1pVGc3QVmKzQOWPJkD9N87FTEnhus",
    authDomain: "rhythm-ea7a1.firebaseapp.com",
    databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rhythm-ea7a1",
    storageBucket: "rhythm-ea7a1.firebasestorage.app",
    messagingSenderId: "776053739080", // ✅ Already have this
    appId: "1:776053739080:web:bfaf1a208b117faf94927d"
};
```

✅ **Good news**: Your config already has `messagingSenderId`!

## Step 5: Create firebase-messaging-sw.js

### 5.1 Why This File?
Firebase requires a specific service worker file named `firebase-messaging-sw.js` at your domain root for background notifications.

### 5.2 File Location
Create this file at: `d:\Dev\Rhythm\firebase-messaging-sw.js`

### 5.3 File Contents
```javascript
// Firebase Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM1r1pVGc3QVmKzQOWPJkD9N87FTEnhus",
    authDomain: "rhythm-ea7a1.firebaseapp.com",
    databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rhythm-ea7a1",
    storageBucket: "rhythm-ea7a1.firebasestorage.app",
    messagingSenderId: "776053739080",
    appId: "1:776053739080:web:bfaf1a208b117faf94927d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Background message received:', payload);
    
    const notificationTitle = payload.notification?.title || 'Rhythm Boduberu';
    const notificationOptions = {
        body: payload.notification?.body || 'New notification',
        icon: '/assets/favicons/icons-192.png',
        badge: '/assets/favicons/icons-96.png',
        tag: payload.data?.tag || 'general',
        data: payload.data
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
```

## Step 6: Test Your Setup

### 6.1 Open Firebase Console Messaging
1. Go to Firebase Console → Messaging
2. You should see **"Create your first campaign"** ✅ (This means FCM is enabled!)
3. Click **"Create your first campaign"**

### 6.2 Create Test Campaign
1. Select **"Firebase Notification messages"**
2. Fill in:
   - **Notification title**: "Test Notification"
   - **Notification text**: "FCM is working for Rhythm Boduberu!"
3. Click **"Next"**

### 6.3 Select Target
1. Choose **"User segment"**
2. Select your app from the dropdown
3. Click **"Next"**

### 6.4 Schedule (Optional)
1. Choose **"Now"** for immediate delivery
2. Click **"Next"**

### 6.5 Review and Send
1. Review your notification details
2. Click **"Publish"**

**Note**: You might not receive the test notification yet because we haven't implemented the client-side code. This is just to verify FCM is working on the Firebase side.

### 6.3 Check Your Browser
- Open your PWA/website
- You should see the test notification

## Step 7: Verify Setup Checklist

### ✅ Required Files/Settings:
- [ ] FCM enabled in Firebase Console
- [ ] VAPID key generated and saved
- [ ] Server key copied and saved
- [ ] `firebase-messaging-sw.js` created at domain root
- [ ] Firebase config includes `messagingSenderId`
- [ ] Test notification sent successfully

## Step 8: Next Steps (After Setup)

### 8.1 Get User Notification Tokens
```javascript
import { getMessaging, getToken } from 'firebase/messaging';

const messaging = getMessaging();
const token = await getToken(messaging, { 
    vapidKey: 'YOUR_VAPID_KEY_HERE' 
});
```

### 8.2 Store Tokens in Database
Save user tokens to Firebase Realtime Database for sending targeted notifications.

### 8.3 Send Notifications
Use Firebase Admin SDK or REST API to send notifications to specific users or groups.

---

## 🚨 Important Notes:

1. **VAPID Key**: Keep it safe, you'll need it in your client code
2. **Server Key**: Keep it secret, only use server-side
3. **File Name**: Must be exactly `firebase-messaging-sw.js`
4. **HTTPS Required**: FCM only works on HTTPS or localhost
5. **Permissions**: Users must grant notification permission

## 🎯 Ready for Implementation?

Once you complete these steps, I can help you:
1. Create the notification service
2. Implement permission requests
3. Set up notification targeting for admins
4. Create the notification system for your specific use cases

Would you like me to create the `firebase-messaging-sw.js` file for you first?