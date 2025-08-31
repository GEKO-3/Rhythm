// Service Worker for Rhythm Boduberu Application Notifications
const CACHE_NAME = 'rhythm-notifications-v1';

// Install event
self.addEventListener('install', function(event) {
    console.log('Notification service worker installed');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', function(event) {
    console.log('Notification service worker activated');
    event.waitUntil(self.clients.claim());
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked:', event.notification.tag);
    
    event.notification.close();
    
    // Handle different notification actions
    if (event.action === 'view' || !event.action) {
        // Open or focus the application page
        event.waitUntil(
            self.clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then(function(clientList) {
                // Check if the app is already open
                for (let client of clientList) {
                    if (client.url.includes('applications-list.html') && 'focus' in client) {
                        return client.focus();
                    }
                }
                
                // If no window is open, open a new one
                if (self.clients.openWindow) {
                    return self.clients.openWindow('/applications-list.html');
                }
            })
        );
    }
});

// Handle background message from main thread
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'NEW_APPLICATION') {
        const { count, applicationName } = event.data;
        
        const title = count === 1 
            ? 'New Member Application!' 
            : `${count} New Member Applications!`;
        
        const body = count === 1
            ? `New application from ${applicationName || 'Unknown'}`
            : `${count} new applications received`;
        
        // Show notification
        self.registration.showNotification(title, {
            body: body,
            icon: '/favicons/favicon.png',
            badge: '/favicons/favicon.png',
            tag: 'new-application',
            requireInteraction: true,
            silent: false,
            actions: [
                {
                    action: 'view',
                    title: 'View Applications'
                }
            ],
            data: {
                url: '/applications-list.html',
                timestamp: Date.now()
            }
        });
    }
});

// Handle push events (for future server-sent notifications)
self.addEventListener('push', function(event) {
    console.log('Push event received');
    
    if (event.data) {
        try {
            const data = event.data.json();
            
            const options = {
                body: data.body || 'New member application received',
                icon: '/favicons/favicon.png',
                badge: '/favicons/favicon.png',
                tag: data.tag || 'new-application',
                requireInteraction: true,
                data: data.data || {}
            };
            
            event.waitUntil(
                self.registration.showNotification(data.title || 'Rhythm Boduberu', options)
            );
        } catch (e) {
            console.error('Error parsing push data:', e);
        }
    }
});
