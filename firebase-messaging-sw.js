// Firebase Cloud Messaging Service Worker for Rhythm Boduberu
// This file MUST be named "firebase-messaging-sw.js" and be at the domain root

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase configuration - same as your main app
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

// Handle background messages (when app is not in focus)
messaging.onBackgroundMessage((payload) => {
    console.log('📱 Background message received:', payload);
    
    // Extract notification data from either notification or data field
    const notificationTitle = payload.data?.title || payload.notification?.title || 'Rhythm Boduberu';
    const notificationBody = payload.data?.body || payload.notification?.body || 'New notification';
    const notificationType = payload.data?.type || 'general';
    
    // Customize notification options based on type
    let notificationOptions = {
        body: notificationBody,
        icon: '/assets/favicons/icons-192.png',
        badge: '/assets/favicons/icons-96.png',
        tag: notificationType,
        data: payload.data,
        requireInteraction: false,
        silent: false
    };
    
    // Customize based on notification type
    switch (notificationType) {
        case 'birthday':
            notificationOptions.icon = '/assets/favicons/icons-192.png';
            notificationOptions.tag = 'birthday';
            notificationOptions.requireInteraction = true;
            break;
            
        case 'event':
            notificationOptions.icon = '/assets/favicons/icons-192.png';
            notificationOptions.tag = 'event';
            notificationOptions.requireInteraction = true;
            break;
            
        case 'login_status':
            notificationOptions.icon = '/assets/favicons/icons-192.png';
            notificationOptions.tag = 'login';
            notificationOptions.requireInteraction = true;
            break;
            
        case 'admin_alert':
            notificationOptions.icon = '/assets/favicons/icons-192.png';
            notificationOptions.tag = 'admin';
            notificationOptions.requireInteraction = true;
            break;
            
        case 'version_update':
            notificationOptions.icon = '/assets/favicons/icons-192.png';
            notificationOptions.tag = 'update';
            notificationOptions.actions = [
                {
                    action: 'update',
                    title: 'Update Now'
                },
                {
                    action: 'later',
                    title: 'Later'
                }
            ];
            break;
    }
    
    // Show the notification
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('📱 Notification clicked:', event);
    
    event.notification.close();
    
    const notificationData = event.notification.data;
    const action = event.action;
    
    // Handle different notification types and actions
    let urlToOpen = '/';
    
    // Check if there's a custom URL from admin notification
    if (notificationData?.clickUrl) {
        urlToOpen = notificationData.clickUrl;
    } else {
        // Default handling for different notification types
        switch (notificationData?.type) {
            case 'birthday':
                urlToOpen = '/pages/members.html';
                break;
                
            case 'event':
                urlToOpen = '/pages/attendance.html';
                break;
                
            case 'login_status':
                if (notificationData?.approved === 'true') {
                    urlToOpen = '/pages/songlist.html';
                } else {
                    urlToOpen = '/login.html';
                }
                break;
                
            case 'admin_alert':
                if (notificationData?.alertType === 'application') {
                    urlToOpen = '/pages/admin/applications-list.html';
                } else if (notificationData?.alertType === 'sponsor') {
                    urlToOpen = '/pages/admin/sponsors-list.html';
                } else {
                    urlToOpen = '/pages/admin/admin.html';
                }
                break;
                
            case 'version_update':
                if (action === 'update') {
                    // Force page reload to get new version
                    urlToOpen = '/?force_update=true';
                } else {
                    return; // Don't open anything for "later"
                }
                break;
                
            case 'admin_notification':
                urlToOpen = '/login.html'; // Default for admin notifications
                break;
                
            default:
                urlToOpen = '/';
        }
    }
    
    // Focus or open the appropriate page
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // Check if there's already a window/tab open
            for (const client of clientList) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    client.focus();
                    client.navigate(urlToOpen);
                    return;
                }
            }
            
            // Open new window/tab if none exists
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

console.log('🔔 Firebase Messaging Service Worker initialized');