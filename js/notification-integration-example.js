// Example: How to integrate notifications into songlist.html or other pages
// Add this to your existing JavaScript in songlist.html

// 1. Import the notification service
import './js/rhythm-notifications.js';

// 2. Initialize notifications after user authentication check
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Page loaded, checking authentication...');
    
    // Wait for your existing auth check
    // Replace this with your actual auth check logic
    if (window.rhythmAuth && window.rhythmAuth.isAuthenticated()) {
        console.log('✅ User authenticated, setting up notifications...');
        
        // Initialize notifications for authenticated users
        if (window.rhythmNotifications && window.rhythmNotifications.isInitialized) {
            try {
                const result = await window.rhythmNotifications.requestPermission();
                if (result.success) {
                    console.log('✅ Notifications ready for user');
                    
                    // Optional: Show a subtle notification that notifications are enabled
                    // (only if this is the first time they're being enabled)
                    if (result.isFirstTime) {
                        setTimeout(() => {
                            window.rhythmNotifications.showInAppNotification(
                                '🔔 Notifications Enabled',
                                'You\'ll now receive updates about events and birthdays!',
                                'notifications',
                                null,
                                5000 // Show for 5 seconds
                            );
                        }, 2000); // Wait 2 seconds after page load
                    }
                } else {
                    console.log('ℹ️ Notifications not enabled:', result.message);
                }
            } catch (error) {
                console.error('Notification setup failed:', error);
            }
        }
    }
    
    // Your existing page initialization code here...
});

// 3. Example: Send a notification when admin creates a new event
// Add this to your admin event creation function
function onNewEventCreated(eventData) {
    // Your existing event creation logic...
    
    // Send notification to all users about new event
    if (window.rhythmNotifications && window.rhythmNotifications.isInitialized) {
        // This would be implemented when we add the notification triggers
        console.log('📅 New event created - notification system ready for broadcast');
        
        // For now, just show an in-app notification to the admin
        window.rhythmNotifications.showInAppNotification(
            '📅 Event Created',
            `${eventData.type} scheduled for ${eventData.date}`,
            'events',
            'pages/attendance.html'
        );
    }
}

// 4. Example: Birthday notification check
// This would run daily (we'll implement the actual trigger later)
function checkBirthdays() {
    // Your birthday checking logic...
    
    const birthdayMembers = []; // Get from your member database
    
    birthdayMembers.forEach(member => {
        if (window.rhythmNotifications && window.rhythmNotifications.isInitialized) {
            window.rhythmNotifications.showInAppNotification(
                '🎂 Happy Birthday!',
                `Happy Birthday ${member.name}! 🎉`,
                'birthdays',
                'pages/members.html'
            );
        }
    });
}

// 5. Test function for development
window.testPageNotifications = () => {
    if (window.rhythmNotifications) {
        // Test different notification types
        const tests = [
            {
                title: '📅 Event Reminder',
                message: 'Band practice tomorrow at 7 PM',
                type: 'events',
                url: 'pages/attendance.html'
            },
            {
                title: '🎂 Birthday Alert',
                message: 'Ahmed\'s birthday is today! 🎉',
                type: 'birthdays',
                url: 'pages/members.html'
            },
            {
                title: '📝 Admin Alert',
                message: 'New membership application received',
                type: 'admin',
                url: 'pages/admin/admin.html'
            }
        ];
        
        tests.forEach((test, index) => {
            setTimeout(() => {
                window.rhythmNotifications.showInAppNotification(
                    test.title,
                    test.message,
                    test.type,
                    test.url,
                    4000
                );
            }, index * 2000); // Stagger the tests
        });
        
        console.log('🧪 Running notification tests...');
    }
};