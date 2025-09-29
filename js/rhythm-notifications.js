/**
 * Rhythm Boduberu Notification Service
 * Handles Firebase Cloud Messaging for push notifications
 * @version 1.0.0
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

class RhythmNotificationService {
    constructor() {
        this.messaging = null;
        this.database = null;
        this.currentToken = null;
        this.isInitialized = false;
        this.currentUser = null;
        
        // Your VAPID key from Firebase Console
        this.vapidKey = 'BMC1n7BlXCjUkooMAPhbAktrF32JNDPjv3ZayehpnVDlVmwz2PAFA8PTuaKZChDaJ9h50fJGbwMaJ_iqX-eOE68';
        
        this.init();
    }

    async init() {
        try {
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
            const app = initializeApp(firebaseConfig);
            this.messaging = getMessaging(app);
            this.database = getDatabase(app);
            
            // Set up foreground message handler
            this.setupForegroundMessageHandler();
            
            this.isInitialized = true;
            console.log('🔔 Notification Service initialized');
            
        } catch (error) {
            console.error('❌ Notification Service initialization failed:', error);
        }
    }

    /**
     * Request notification permission and get FCM token
     * SECURITY: Only works for approved users
     */
    async requestPermission() {
        try {
            // SECURITY CHECK: Verify user is approved before any notification setup
            const currentUser = window.rhythmAuth?.getCurrentUser();
            if (!currentUser) {
                console.log('❌ No authenticated user - notifications blocked');
                return { success: false, reason: 'not_authenticated' };
            }

            if (!this.isUserApprovedForNotifications(currentUser)) {
                console.log('❌ User not approved for notifications:', currentUser.status || 'unknown status');
                return { success: false, reason: 'not_approved', userStatus: currentUser.status };
            }

            // Check if notifications are supported
            if (!('Notification' in window)) {
                throw new Error('This browser does not support notifications');
            }

            // Check current permission
            if (Notification.permission === 'granted') {
                console.log('🔔 Notification permission already granted for approved user:', currentUser.fullName);
                return await this.getAndSaveToken();
            }

            if (Notification.permission === 'denied') {
                console.log('❌ Notification permission denied');
                return { success: false, reason: 'permission_denied' };
            }

            // Request permission
            console.log('📱 Requesting notification permission for approved user:', currentUser.fullName);
            const permission = await Notification.requestPermission();
            
            if (permission === 'granted') {
                console.log('✅ Notification permission granted for approved user:', currentUser.fullName);
                return await this.getAndSaveToken();
            } else {
                console.log('❌ Notification permission denied by user');
                return { success: false, reason: 'permission_denied' };
            }

        } catch (error) {
            console.error('❌ Error requesting notification permission:', error);
            return { success: false, reason: 'error', error: error.message };
        }
    }

    /**
     * Check if user is approved for notifications
     * SECURITY: Only approved, active users get notifications
     */
    isUserApprovedForNotifications(user) {
        if (!user) return false;

        // Check user status - must be active/approved
        const validStatuses = ['active', 'approved'];
        if (!validStatuses.includes(user.status)) {
            console.log('❌ User status not approved for notifications:', user.status);
            return false;
        }

        // Check if user is not revoked
        if (user.status === 'revoked' || user.approved === false) {
            console.log('❌ User access revoked - no notifications');
            return false;
        }

        // Additional check: user must be properly authenticated
        if (!user.accessCode || !user.fullName) {
            console.log('❌ Invalid user data - no notifications');
            return false;
        }

        console.log('✅ User approved for notifications:', user.fullName, 'Status:', user.status);
        return true;
    }

    /**
     * Get FCM token and save to database
     * SECURITY: Includes user verification in token storage
     */
    async getAndSaveToken() {
        try {
            if (!this.messaging) {
                throw new Error('Messaging not initialized');
            }

            // Get FCM token
            const token = await getToken(this.messaging, { vapidKey: this.vapidKey });
            
            if (token) {
                console.log('🎫 FCM Token obtained:', token.substring(0, 20) + '...');
                this.currentToken = token;
                
                // Save token to database with user verification
                await this.saveTokenToDatabase(token);
                
                return { success: true, token };
            } else {
                console.log('❌ No registration token available');
                return { success: false, reason: 'no_token' };
            }

        } catch (error) {
            console.error('❌ Error getting FCM token:', error);
            return { success: false, reason: 'error', error: error.message };
        }
    }

    /**
     * Save FCM token to database for current user
     * SECURITY: Only saves tokens for approved users
     */
    async saveTokenToDatabase(token) {
        try {
            // Get current user from rhythm auth
            const currentUser = window.rhythmAuth?.getCurrentUser();
            if (!currentUser || !currentUser.accessCode) {
                console.log('⚠️ No current user found, saving token locally only');
                localStorage.setItem('rhythm_fcm_token', token);
                return;
            }

            // SECURITY CHECK: Verify user is approved for notifications
            if (!this.isUserApprovedForNotifications(currentUser)) {
                console.log('🔒 User not approved for notifications - token not saved to database');
                localStorage.setItem('rhythm_fcm_token', token); // Save locally but not to DB
                throw new Error('User not approved for notifications');
            }

            // Save to database under user's access code
            const tokenRef = ref(this.database, `userTokens/${currentUser.accessCode}`);
            await set(tokenRef, {
                token: token,
                userId: currentUser.accessCode,
                userName: currentUser.fullName,
                isAdmin: currentUser.isAdmin || false,
                deviceId: currentUser.deviceId,
                updatedAt: Date.now(),
                platform: 'web',
                approved: true, // Mark as approved since we verified
                status: currentUser.status
            });

            // Also save locally as backup
            localStorage.setItem('rhythm_fcm_token', token);
            
            console.log('💾 FCM token saved to database for approved user:', currentUser.fullName);

        } catch (error) {
            console.error('❌ Error saving token to database:', error);
            // Save locally as fallback
            localStorage.setItem('rhythm_fcm_token', token);
            throw error; // Re-throw to handle in calling function
        }
    }

    /**
     * Setup handler for foreground messages
     */
    setupForegroundMessageHandler() {
        if (!this.messaging) return;

        onMessage(this.messaging, (payload) => {
            console.log('📱 Foreground message received:', payload);
            
            // Show notification even when app is in foreground
            this.showForegroundNotification(payload);
        });
    }

    /**
     * Show notification when app is in foreground
     */
    showForegroundNotification(payload) {
        const title = payload.notification?.title || 'Rhythm Boduberu';
        const body = payload.notification?.body || 'New notification';
        const icon = '/assets/favicons/icons-192.png';
        
        // Show browser notification
        if (Notification.permission === 'granted') {
            const notification = new Notification(title, {
                body: body,
                icon: icon,
                tag: payload.data?.type || 'general',
                data: payload.data
            });

            // Handle notification click
            notification.onclick = () => {
                this.handleNotificationClick(payload.data);
                notification.close();
            };

            // Auto close after 5 seconds
            setTimeout(() => notification.close(), 5000);
        }

        // Also show in-app notification banner
        this.showInAppBanner(title, body, payload.data);
    }

    /**
     * Show in-app notification banner
     */
    showInAppBanner(title, body, data) {
        // Create notification banner element
        const banner = document.createElement('div');
        banner.className = 'notification-banner';
        banner.innerHTML = `
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-body">${body}</div>
            </div>
            <button class="notification-close">×</button>
        `;

        // Add styles
        banner.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(43, 43, 43, 0.95);
            color: #f5d000;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #f5d000;
            max-width: 300px;
            z-index: 10000;
            font-family: 'Montserrat', Arial, sans-serif;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            animation: slideIn 0.3s ease-out;
        `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Add click handlers
        banner.addEventListener('click', () => {
            this.handleNotificationClick(data);
            banner.remove();
        });

        banner.querySelector('.notification-close').addEventListener('click', (e) => {
            e.stopPropagation();
            banner.remove();
        });

        // Add to page
        document.body.appendChild(banner);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (banner.parentNode) {
                banner.remove();
            }
        }, 5000);
    }

    /**
     * Handle notification click - navigate to appropriate page
     */
    handleNotificationClick(data) {
        if (!data) return;

        let urlToOpen = '/';

        switch (data.type) {
            case 'birthday':
                urlToOpen = '/pages/members.html';
                break;
            case 'event':
                urlToOpen = '/pages/attendance.html';
                break;
            case 'login_status':
                urlToOpen = data.approved === 'true' ? '/pages/songlist.html' : '/login.html';
                break;
            case 'admin_alert':
                if (data.alertType === 'application') {
                    urlToOpen = '/pages/admin/applications-list.html';
                } else if (data.alertType === 'sponsor') {
                    urlToOpen = '/pages/admin/sponsors-list.html';
                } else {
                    urlToOpen = '/pages/admin/admin.html';
                }
                break;
            case 'version_update':
                window.location.reload();
                return;
        }

        // Navigate to the URL
        if (urlToOpen !== window.location.pathname) {
            window.location.href = urlToOpen;
        }
    }

    /**
     * Get current FCM token
     */
    getCurrentToken() {
        return this.currentToken || localStorage.getItem('rhythm_fcm_token');
    }

    /**
     * Check if notifications are enabled
     */
    isNotificationEnabled() {
        return Notification.permission === 'granted' && !!this.getCurrentToken();
    }

    /**
     * Disable notifications (remove token from database)
     */
    async disableNotifications() {
        try {
            const currentUser = window.rhythmAuth?.getCurrentUser();
            if (currentUser && currentUser.accessCode) {
                const tokenRef = ref(this.database, `userTokens/${currentUser.accessCode}`);
                await set(tokenRef, null);
            }

            localStorage.removeItem('rhythm_fcm_token');
            this.currentToken = null;
            
            console.log('🔕 Notifications disabled');
            return { success: true };

        } catch (error) {
            console.error('❌ Error disabling notifications:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Validate notification permissions for current user
     * SECURITY: Comprehensive security check
     */
    async validateNotificationPermissions() {
        try {
            // Check if notifications are supported
            if (!('Notification' in window)) {
                return { valid: false, reason: 'not_supported' };
            }

            // Check browser permission
            if (Notification.permission !== 'granted') {
                return { valid: false, reason: 'permission_denied' };
            }

            // Check user authentication
            const currentUser = window.rhythmAuth?.getCurrentUser();
            if (!currentUser) {
                return { valid: false, reason: 'not_authenticated' };
            }

            // Check user approval status
            if (!this.isUserApprovedForNotifications(currentUser)) {
                return { valid: false, reason: 'user_not_approved' };
            }

            // Check if FCM is initialized
            if (!this.messaging) {
                return { valid: false, reason: 'fcm_not_initialized' };
            }

            // All checks passed
            return { 
                valid: true, 
                user: currentUser.fullName,
                status: currentUser.status 
            };

        } catch (error) {
            console.error('❌ Error validating notification permissions:', error);
            return { valid: false, reason: 'error', error: error.message };
        }
    }

    /**
     * Test notification system (for debugging)
     * SECURITY: Only works for approved users
     */
    async testNotification() {
        try {
            console.log('🧪 Testing notification system...');

            // Validate permissions first
            const validation = await this.validateNotificationPermissions();
            if (!validation.valid) {
                console.log('❌ Notification test failed - invalid permissions:', validation.reason);
                return { success: false, reason: validation.reason };
            }

            console.log('✅ Permissions valid for user:', validation.user);

            // Show test notification
            const notification = new Notification('🎵 Rhythm Boduberu Test', {
                body: `Hello ${validation.user}! Your notifications are working correctly.`,
                icon: '/assets/favicons/icons-192.png',
                tag: 'test-notification'
            });

            // Auto-close after 3 seconds
            setTimeout(() => notification.close(), 3000);

            console.log('✅ Test notification sent successfully');
            return { success: true, user: validation.user };

        } catch (error) {
            console.error('❌ Error testing notification:', error);
            return { success: false, reason: 'error', error: error.message };
        }
    }
}

// Create global instance
window.rhythmNotifications = new RhythmNotificationService();

// Export for modules
export default RhythmNotificationService;