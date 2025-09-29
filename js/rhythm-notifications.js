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
            
            // Start periodic token verification
            this.startTokenMonitoring();
            
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

            // Ensure we have notification permission
            if (Notification.permission !== 'granted') {
                throw new Error('Notification permission not granted');
            }

            console.log('🔄 Generating FCM token...');
            
            // Get FCM token (this will always try to get a fresh token)
            const token = await getToken(this.messaging, { vapidKey: this.vapidKey });
            
            if (token) {
                console.log('🎫 FCM Token obtained:', token.substring(0, 20) + '...');
                this.currentToken = token;
                
                // Save token to database with user verification
                await this.saveTokenToDatabase(token);
                
                console.log('✅ FCM token generated and saved successfully');
                return { success: true, token };
            } else {
                console.log('❌ No registration token available - service worker may not be registered');
                
                // Try to register service worker if not registered
                if ('serviceWorker' in navigator) {
                    try {
                        const registration = await navigator.serviceWorker.register('/sw.js');
                        console.log('🔧 Service worker registered, retrying token generation...');
                        
                        // Wait a moment for SW to be ready
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        
                        // Retry token generation
                        const retryToken = await getToken(this.messaging, { vapidKey: this.vapidKey });
                        if (retryToken) {
                            console.log('🎫 FCM Token obtained after SW registration:', retryToken.substring(0, 20) + '...');
                            this.currentToken = retryToken;
                            await this.saveTokenToDatabase(retryToken);
                            return { success: true, token: retryToken };
                        }
                    } catch (swError) {
                        console.log('⚠️ Service worker registration failed:', swError.message);
                    }
                }
                
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

    /**
     * Start periodic token monitoring and auto-generation
     */
    startTokenMonitoring() {
        // Check token every 5 minutes
        setInterval(async () => {
            try {
                // Only check if user is authenticated and permission is granted
                const currentUser = window.rhythmAuth?.getCurrentUser();
                if (!currentUser || Notification.permission !== 'granted') {
                    return;
                }

                // Only for approved users
                if (!this.isUserApprovedForNotifications(currentUser)) {
                    return;
                }

                // Check if we have a current token
                if (!this.currentToken) {
                    console.log('🔄 Periodic check: No FCM token found, generating...');
                    const result = await this.getAndSaveToken();
                    if (result.success) {
                        console.log('✅ Periodic FCM token generation successful');
                    }
                }

            } catch (error) {
                console.log('⚠️ Periodic token check failed:', error.message);
            }
        }, 5 * 60 * 1000); // 5 minutes

        // Also do an immediate check after 10 seconds
        setTimeout(async () => {
            try {
                const currentUser = window.rhythmAuth?.getCurrentUser();
                if (currentUser && Notification.permission === 'granted' && 
                    this.isUserApprovedForNotifications(currentUser) && !this.currentToken) {
                    
                    console.log('🔄 Initial token check: Generating FCM token...');
                    const result = await this.getAndSaveToken();
                    if (result.success) {
                        console.log('✅ Initial FCM token generation successful');
                    }
                }
            } catch (error) {
                console.log('⚠️ Initial token check failed:', error.message);
            }
        }, 10000);
    }

    /**
     * Debug function to manually regenerate FCM token
     * SECURITY: Only for approved users
     */
    async regenerateToken() {
        try {
            console.log('🔄 Manually regenerating FCM token...');
            
            // Get current user from rhythm auth
            const currentUser = window.rhythmAuth?.getCurrentUser();
            if (!currentUser || !currentUser.accessCode) {
                throw new Error('No authenticated user found');
            }

            // Verify user is approved
            if (!this.isUserApprovedForNotifications(currentUser)) {
                throw new Error('User not approved for notifications');
            }

            // Check notification permission
            console.log('🔍 Current notification permission:', Notification.permission);
            
            if (Notification.permission !== 'granted') {
                console.log('⚠️ Notification permission not granted. Requesting...');
                const permission = await Notification.requestPermission();
                if (permission !== 'granted') {
                    throw new Error('Notification permission denied');
                }
            }

            // Force regenerate token
            console.log('🎫 Generating new FCM token...');
            const token = await getToken(this.messaging, { vapidKey: this.vapidKey });
            
            if (!token) {
                throw new Error('Failed to generate FCM token');
            }

            console.log('✅ New FCM token generated:', token.substring(0, 20) + '...');
            this.currentToken = token;

            // Save to database
            await this.saveTokenToDatabase(token);
            
            console.log('💾 Token saved successfully');
            
            // Show success message
            alert(`✅ FCM Token regenerated successfully!\n\nToken: ${token.substring(0, 30)}...\n\nYou should now be able to receive notifications.`);
            
            return { success: true, token };

        } catch (error) {
            console.error('❌ Error regenerating FCM token:', error);
            alert(`❌ Failed to regenerate FCM token: ${error.message}`);
            return { success: false, error: error.message };
        }
    }

    /**
     * Debug function to check current token status
     */
    async checkTokenStatus() {
        try {
            console.log('🔍 Checking FCM token status...');
            
            // Get current user
            const currentUser = window.rhythmAuth?.getCurrentUser();
            console.log('👤 Current user:', currentUser?.fullName || 'None');
            
            // Check notification permission
            console.log('🔔 Notification permission:', Notification.permission);
            
            // Check if user is approved
            if (currentUser) {
                const isApproved = this.isUserApprovedForNotifications(currentUser);
                console.log('✅ User approved for notifications:', isApproved);
            }
            
            // Check stored token
            const storedToken = localStorage.getItem('rhythm_fcm_token');
            console.log('💾 Stored token:', storedToken ? `${storedToken.substring(0, 20)}...` : 'None');
            
            // Check current token
            console.log('🎫 Current token:', this.currentToken ? `${this.currentToken.substring(0, 20)}...` : 'None');
            
            // Try to get fresh token if permission is granted
            if (Notification.permission === 'granted' && this.messaging) {
                try {
                    const freshToken = await getToken(this.messaging, { vapidKey: this.vapidKey });
                    console.log('🔄 Fresh token:', freshToken ? `${freshToken.substring(0, 20)}...` : 'Failed to get');
                } catch (tokenError) {
                    console.log('❌ Error getting fresh token:', tokenError.message);
                }
            }
            
            return {
                user: currentUser,
                permission: Notification.permission,
                storedToken: !!storedToken,
                currentToken: !!this.currentToken,
                isApproved: currentUser ? this.isUserApprovedForNotifications(currentUser) : false
            };

        } catch (error) {
            console.error('❌ Error checking token status:', error);
            return { error: error.message };
        }
    }
}

// Create global instance
window.rhythmNotifications = new RhythmNotificationService();

// Global debug functions for console access
window.debugNotifications = {
    checkStatus: () => window.rhythmNotifications?.checkTokenStatus(),
    regenerateToken: () => window.rhythmNotifications?.regenerateToken(),
    testNotification: () => window.rhythmNotifications?.testNotification(),
    getToken: () => window.rhythmNotifications?.currentToken,
    getStoredToken: () => localStorage.getItem('rhythm_fcm_token'),
    clearToken: () => {
        localStorage.removeItem('rhythm_fcm_token');
        window.rhythmNotifications.currentToken = null;
        console.log('🗑️ FCM token cleared');
    }
};

// Export for modules
export default RhythmNotificationService;