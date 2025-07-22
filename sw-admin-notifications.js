// Enhanced Service Worker for Rhythm Boduberu Admin Notifications
const CACHE_NAME = 'rhythm-admin-notifications-v2';
const NOTIFICATION_CHECK_INTERVAL = 60000; // Check every minute
const BATCH_NOTIFICATION_DELAY = 5000; // Batch notifications within 5 seconds

// URLs to monitor
const SPONSOR_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxUlMKI9FdqfTHjD3yTDiuwlhHwzrfoVEKXsA0ZfTpQLGn_SGvM2uJuz6URA3_GXRFBvofjka-4fJF/pub?gid=897072607&single=true&output=csv';
const APPLICATION_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQg3Ja8vF_56fK5Tci8NdpPqziJ9-lGPaR1KmnZN2zoBCyr0YUcZFHjGlbsiG7qmrJdsUDRWK1Qut9F/pub?gid=2040901910&single=true&output=csv';

// Storage for tracking data
let lastSponsorCount = 0;
let lastApplicationCount = 0;
let notificationQueue = [];
let lastChecked = 0;

// Install event
self.addEventListener('install', function(event) {
    console.log('Enhanced admin notification service worker installed');
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', function(event) {
    console.log('Enhanced admin notification service worker activated');
    event.waitUntil(
        self.clients.claim().then(() => {
            // Start background monitoring immediately
            startBackgroundMonitoring();
        })
    );
});

// Start background monitoring
function startBackgroundMonitoring() {
    console.log('Starting background monitoring for new submissions');
    
    // Initial check
    checkForNewSubmissions();
    
    // Set up periodic checks
    setInterval(checkForNewSubmissions, NOTIFICATION_CHECK_INTERVAL);
}

// Check for new submissions
async function checkForNewSubmissions() {
    const now = Date.now();
    
    // Don't check too frequently to avoid rate limiting
    if (now - lastChecked < NOTIFICATION_CHECK_INTERVAL) {
        return;
    }
    
    lastChecked = now;
    
    try {
        // Check sponsors and applications in parallel
        const [sponsorResult, applicationResult] = await Promise.allSettled([
            checkSponsors(),
            checkApplications()
        ]);
        
        if (sponsorResult.status === 'rejected') {
            console.error('Error checking sponsors:', sponsorResult.reason);
        }
        
        if (applicationResult.status === 'rejected') {
            console.error('Error checking applications:', applicationResult.reason);
        }
        
        // Process notification queue
        processNotificationQueue();
        
    } catch (error) {
        console.error('Error in background check:', error);
    }
}

// Check for new sponsors
async function checkSponsors() {
    try {
        const response = await fetch(SPONSOR_CSV_URL, {
            method: 'GET',
            headers: {
                'Accept': 'text/csv,text/plain,*/*'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        const lines = csvText.trim().split('\n');
        const currentCount = Math.max(0, lines.length - 1); // Subtract header row
        
        // Check if we have new sponsors
        if (lastSponsorCount > 0 && currentCount > lastSponsorCount) {
            const newCount = currentCount - lastSponsorCount;
            queueNotification('sponsor', newCount);
        }
        
        lastSponsorCount = currentCount;
        
    } catch (error) {
        console.error('Error checking sponsors:', error);
        // Try alternative fetch method
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(SPONSOR_CSV_URL)}`);
            const data = await response.json();
            
            if (data.contents) {
                const lines = data.contents.trim().split('\n');
                const currentCount = Math.max(0, lines.length - 1);
                
                if (lastSponsorCount > 0 && currentCount > lastSponsorCount) {
                    const newCount = currentCount - lastSponsorCount;
                    queueNotification('sponsor', newCount);
                }
                
                lastSponsorCount = currentCount;
            }
        } catch (altError) {
            console.error('Alternative sponsor check also failed:', altError);
        }
    }
}

// Check for new applications
async function checkApplications() {
    try {
        const response = await fetch(APPLICATION_CSV_URL, {
            method: 'GET',
            headers: {
                'Accept': 'text/csv,text/plain,*/*'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        const lines = csvText.trim().split('\n');
        const currentCount = Math.max(0, lines.length - 1); // Subtract header row
        
        // Check if we have new applications
        if (lastApplicationCount > 0 && currentCount > lastApplicationCount) {
            const newCount = currentCount - lastApplicationCount;
            queueNotification('application', newCount);
        }
        
        lastApplicationCount = currentCount;
        
    } catch (error) {
        console.error('Error checking applications:', error);
        // Try alternative fetch method
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(APPLICATION_CSV_URL)}`);
            const data = await response.json();
            
            if (data.contents) {
                const lines = data.contents.trim().split('\n');
                const currentCount = Math.max(0, lines.length - 1);
                
                if (lastApplicationCount > 0 && currentCount > lastApplicationCount) {
                    const newCount = currentCount - lastApplicationCount;
                    queueNotification('application', newCount);
                }
                
                lastApplicationCount = currentCount;
            }
        } catch (altError) {
            console.error('Alternative application check also failed:', altError);
        }
    }
}

// Queue notification for batching
function queueNotification(type, count) {
    notificationQueue.push({
        type: type,
        count: count,
        timestamp: Date.now()
    });
    
    console.log(`Queued ${type} notification for ${count} new items`);
}

// Process notification queue with batching
function processNotificationQueue() {
    if (notificationQueue.length === 0) return;
    
    // Group notifications by type
    const sponsors = notificationQueue.filter(n => n.type === 'sponsor');
    const applications = notificationQueue.filter(n => n.type === 'application');
    
    // Clear the queue
    notificationQueue = [];
    
    // Send batched notifications
    if (sponsors.length > 0) {
        const totalSponsors = sponsors.reduce((sum, n) => sum + n.count, 0);
        showSponsorNotification(totalSponsors);
    }
    
    if (applications.length > 0) {
        const totalApplications = applications.reduce((sum, n) => sum + n.count, 0);
        showApplicationNotification(totalApplications);
    }
}

// Show sponsor notification
function showSponsorNotification(count) {
    const title = count === 1 
        ? 'New Sponsor Callback Request!' 
        : `${count} New Sponsor Callback Requests!`;
    
    const body = count === 1
        ? 'A new sponsor callback request has been submitted'
        : `${count} new sponsor callback requests have been submitted`;

    self.registration.showNotification(title, {
        body: body,
        icon: '/favicons/favicon.png',
        badge: '/favicons/favicon.png',
        tag: 'new-sponsor-callback',
        requireInteraction: true,
        silent: false,
        actions: [
            {
                action: 'view-sponsors',
                title: 'View Callbacks'
            },
            {
                action: 'dismiss',
                title: 'Dismiss'
            }
        ],
        data: {
            url: '/sponsors-list.html',
            type: 'sponsor',
            count: count,
            timestamp: Date.now()
        }
    });
    
    console.log(`Showed sponsor notification for ${count} new callbacks`);
}

// Show application notification
function showApplicationNotification(count) {
    const title = count === 1 
        ? 'New Member Application!' 
        : `${count} New Member Applications!`;
    
    const body = count === 1
        ? 'A new member application has been submitted'
        : `${count} new member applications have been submitted`;

    self.registration.showNotification(title, {
        body: body,
        icon: '/favicons/favicon.png',
        badge: '/favicons/favicon.png',
        tag: 'new-application',
        requireInteraction: true,
        silent: false,
        actions: [
            {
                action: 'view-applications',
                title: 'View Applications'
            },
            {
                action: 'dismiss',
                title: 'Dismiss'
            }
        ],
        data: {
            url: '/applications-list.html',
            type: 'application',
            count: count,
            timestamp: Date.now()
        }
    });
    
    console.log(`Showed application notification for ${count} new applications`);
}

// Handle notification click
self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked:', event.notification.tag, event.action);
    
    event.notification.close();
    
    if (event.action === 'dismiss') {
        return;
    }
    
    // Determine URL based on action or notification data
    let targetUrl = '/admin.html';
    
    if (event.action === 'view-sponsors' || event.notification.data?.type === 'sponsor') {
        targetUrl = '/sponsors-list.html';
    } else if (event.action === 'view-applications' || event.notification.data?.type === 'application') {
        targetUrl = '/applications-list.html';
    } else if (event.notification.data?.url) {
        targetUrl = event.notification.data.url;
    }
    
    // Open or focus the appropriate page
    event.waitUntil(
        self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function(clientList) {
            // Check if the target page is already open
            for (let client of clientList) {
                if (client.url.includes(targetUrl.replace('/', '')) && 'focus' in client) {
                    return client.focus();
                }
            }
            
            // Check if any admin page is open
            for (let client of clientList) {
                if ((client.url.includes('admin.html') || 
                     client.url.includes('applications-list.html') || 
                     client.url.includes('sponsors-list.html')) && 'focus' in client) {
                    // Navigate existing admin page to target
                    client.postMessage({
                        type: 'navigate',
                        url: targetUrl
                    });
                    return client.focus();
                }
            }
            
            // If no window is open, open a new one
            if (self.clients.openWindow) {
                return self.clients.openWindow(targetUrl);
            }
        })
    );
});

// Handle messages from main thread
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'FORCE_CHECK') {
        console.log('Forced check requested from main thread');
        checkForNewSubmissions();
    } else if (event.data && event.data.type === 'UPDATE_COUNTS') {
        // Update baseline counts from main thread
        if (event.data.sponsorCount !== undefined) {
            lastSponsorCount = event.data.sponsorCount;
        }
        if (event.data.applicationCount !== undefined) {
            lastApplicationCount = event.data.applicationCount;
        }
        console.log(`Updated baseline counts: sponsors=${lastSponsorCount}, applications=${lastApplicationCount}`);
    }
});

// Handle push events (for future server-sent notifications)
self.addEventListener('push', function(event) {
    console.log('Push event received');
    
    if (event.data) {
        try {
            const data = event.data.json();
            
            const options = {
                body: data.body || 'New notification from Rhythm Boduberu',
                icon: '/favicons/favicon.png',
                badge: '/favicons/favicon.png',
                tag: data.tag || 'rhythm-notification',
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

// Handle sync events for offline queuing
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-check') {
        console.log('Background sync triggered');
        event.waitUntil(checkForNewSubmissions());
    }
});

console.log('Enhanced admin notification service worker loaded and ready');
