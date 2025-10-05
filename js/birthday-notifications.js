/**
 * Birthday Notification Service
 * Checks for member birthdays and sends local notifications
 * @version 1.0.0
 */

class BirthdayNotificationService {
    constructor() {
        this.membersData = null;
        this.notificationService = null;
        this.isInitialized = false;
        
        this.init();
    }

    async init() {
        try {
            // Wait for dependencies to be ready
            await this.waitForDependencies();
            
            // Set up daily check
            this.setupDailyCheck();
            
            // Check birthdays on initialization
            await this.checkTodaysBirthdays();
            
            this.isInitialized = true;
            console.log('🎂 Birthday Notification Service initialized');
            
        } catch (error) {
            console.error('❌ Failed to initialize Birthday Notification Service:', error);
        }
    }

    async waitForDependencies() {
        // Wait for MembersData to be available
        let attempts = 0;
        while (!window.membersData && attempts < 20) {
            await new Promise(resolve => setTimeout(resolve, 500));
            attempts++;
        }
        
        if (!window.membersData) {
            throw new Error('MembersData not available');
        }
        
        this.membersData = window.membersData;
        
        // Wait for notification service to be available
        attempts = 0;
        while (!window.rhythmNotifications && attempts < 20) {
            await new Promise(resolve => setTimeout(resolve, 500));
            attempts++;
        }
        
        if (!window.rhythmNotifications) {
            throw new Error('RhythmNotifications not available');
        }
        
        this.notificationService = window.rhythmNotifications;
    }

    setupDailyCheck() {
        // Check every 30 minutes to catch birthdays (in case app was closed at midnight)
        setInterval(() => {
            this.checkTodaysBirthdays();
        }, 30 * 60 * 1000); // 30 minutes

        console.log('⏰ Daily birthday check scheduled');
    }

    async checkTodaysBirthdays() {
        try {
            console.log('🔍 Checking for today\'s birthdays...');
            
            // Only check if user is authenticated and notifications are enabled
            const currentUser = window.rhythmAuth?.getCurrentUser();
            if (!currentUser) {
                console.log('👤 No authenticated user - skipping birthday check');
                return;
            }

            if (!this.notificationService.isNotificationEnabled()) {
                console.log('🔔 Notifications not enabled - skipping birthday check');
                return;
            }

            // Get today's date in MM-DD format
            const today = new Date();
            const todayMonthDay = String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                                 String(today.getDate()).padStart(2, '0');

            console.log('📅 Checking birthdays for:', todayMonthDay);

            // Get all members
            const members = await this.getAllMembers();
            
            // Find members with birthdays today
            const birthdayMembers = members.filter(member => {
                if (!member.dateOfBirth) return false;
                
                // Extract MM-DD from YYYY-MM-DD format
                const memberMonthDay = member.dateOfBirth.substring(5); // Gets MM-DD
                return memberMonthDay === todayMonthDay;
            });

            console.log(`🎂 Found ${birthdayMembers.length} birthday(s) today:`, 
                       birthdayMembers.map(m => m.fullName));

            // Send notifications for each birthday member
            for (const member of birthdayMembers) {
                await this.sendBirthdayNotification(member);
            }

            // Store last check time to avoid duplicate notifications
            localStorage.setItem('rhythm_last_birthday_check', Date.now().toString());

        } catch (error) {
            console.error('❌ Error checking birthdays:', error);
        }
    }

    async getAllMembers() {
        try {
            // Try to get from members database
            if (this.membersData && this.membersData.getAllMembers) {
                return await this.membersData.getAllMembers();
            }
            
            // Fallback: load from local JSON file
            const response = await fetch('/data/members-database.json');
            const data = await response.json();
            
            // Convert object to array
            return Object.values(data.members || {});
            
        } catch (error) {
            console.error('❌ Error loading members for birthday check:', error);
            return [];
        }
    }

    async sendBirthdayNotification(member) {
        try {
            // Check if we already sent a notification for this member today
            const lastNotificationKey = `rhythm_birthday_notif_${member.id}_${this.getTodayString()}`;
            
            if (localStorage.getItem(lastNotificationKey)) {
                console.log('🔔 Birthday notification already sent for', member.fullName);
                return;
            }

            console.log('🎉 Sending birthday notification for:', member.fullName);

            // Calculate age
            const birthYear = parseInt(member.dateOfBirth.substring(0, 4));
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;

            const title = '🎂 Happy Birthday!';
            const body = `Today is ${member.fullName}'s ${age}th birthday! 🎉 Celebrate with Rhythm Boduberu!`;

            // Show browser notification
            if ('Notification' in window && Notification.permission === 'granted') {
                const notification = new Notification(title, {
                    body: body,
                    icon: '/assets/favicons/icons-192.png',
                    badge: '/assets/favicons/icons-96.png',
                    tag: `birthday-${member.id}`,
                    requireInteraction: true,
                    data: {
                        type: 'birthday',
                        memberId: member.id,
                        memberName: member.fullName
                    }
                });

                // Handle notification click
                notification.onclick = () => {
                    window.focus();
                    // Navigate to members page
                    if (window.location.pathname !== '/pages/members.html') {
                        window.location.href = '/pages/members.html';
                    }
                    notification.close();
                };

                // Auto-close after 10 seconds for birthday notifications
                setTimeout(() => notification.close(), 10000);
            }

            // Also show in-app notification if available
            if (this.notificationService.showInAppBanner) {
                this.notificationService.showInAppBanner(title, body, {
                    type: 'birthday',
                    memberId: member.id,
                    memberName: member.fullName
                });
            }

            // Mark as sent for today
            localStorage.setItem(lastNotificationKey, Date.now().toString());
            
            console.log('✅ Birthday notification sent for:', member.fullName);

        } catch (error) {
            console.error('❌ Error sending birthday notification for', member.fullName, ':', error);
        }
    }

    getTodayString() {
        const today = new Date();
        return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    }

    // Manual trigger for testing
    async testBirthdayNotification() {
        try {
            console.log('🧪 Testing birthday notification...');
            
            // Get a sample member or create a test one
            const testMember = {
                id: 'test_birthday',
                fullName: 'Test Member',
                dateOfBirth: this.getTodayString() // Today's date for testing
            };

            await this.sendBirthdayNotification(testMember);
            
            return { success: true, message: 'Test birthday notification sent' };
            
        } catch (error) {
            console.error('❌ Birthday notification test failed:', error);
            return { success: false, error: error.message };
        }
    }

    // Get upcoming birthdays (next 7 days)
    async getUpcomingBirthdays(days = 7) {
        try {
            const members = await this.getAllMembers();
            const upcoming = [];
            
            for (let i = 0; i < days; i++) {
                const checkDate = new Date();
                checkDate.setDate(checkDate.getDate() + i);
                
                const checkMonthDay = String(checkDate.getMonth() + 1).padStart(2, '0') + '-' + 
                                     String(checkDate.getDate()).padStart(2, '0');
                
                const daysBirthdays = members.filter(member => {
                    if (!member.dateOfBirth) return false;
                    const memberMonthDay = member.dateOfBirth.substring(5);
                    return memberMonthDay === checkMonthDay;
                });
                
                if (daysBirthdays.length > 0) {
                    upcoming.push({
                        date: checkDate.toDateString(),
                        daysFromNow: i,
                        members: daysBirthdays
                    });
                }
            }
            
            return upcoming;
            
        } catch (error) {
            console.error('❌ Error getting upcoming birthdays:', error);
            return [];
        }
    }

    // Force check all birthdays (for testing)
    async forceCheckBirthdays() {
        // Clear the last check timestamp to allow re-checking
        localStorage.removeItem('rhythm_last_birthday_check');
        
        // Clear today's notification flags
        const todayString = this.getTodayString();
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('rhythm_birthday_notif_') && key.includes(todayString)) {
                localStorage.removeItem(key);
            }
        });
        
        // Check birthdays
        await this.checkTodaysBirthdays();
    }
}

// Create global instance
window.birthdayNotifications = new BirthdayNotificationService();

// Global debug functions for console access
window.debugBirthdays = {
    checkToday: () => window.birthdayNotifications?.checkTodaysBirthdays(),
    testNotification: () => window.birthdayNotifications?.testBirthdayNotification(),
    getUpcoming: (days) => window.birthdayNotifications?.getUpcomingBirthdays(days),
    forceCheck: () => window.birthdayNotifications?.forceCheckBirthdays()
};

console.log('🎂 Birthday Notification Service loaded');