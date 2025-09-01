/**
 * UNIFIED RHYTHM AUTHENTICATION SYSTEM
 * This is the single source of truth for all authentication
 * Used by login.html, songlist.html, admin pages, and any other pages
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, get, set } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

class RhythmUnifiedAuth {
    constructor() {
        this.database = null;
        this.currentUser = null;
        this.isInitialized = false;
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
            this.database = getDatabase(app);
            this.isInitialized = true;

            console.log('🚀 RhythmUnifiedAuth initialized');
            
            // Auto-check authentication on init
            await this.checkAuthentication();
            
        } catch (error) {
            console.error('❌ RhythmUnifiedAuth initialization failed:', error);
        }
    }

    /**
     * MAIN AUTHENTICATION CHECK
     * This is the single function all pages should call
     */
    async checkAuthentication() {
        console.log('🔍 [UnifiedAuth] Checking authentication...');
        
        try {
            // Get stored auth data
            const storedAuth = localStorage.getItem('rhythmAuth_approval');
            if (!storedAuth) {
                console.log('❌ [UnifiedAuth] No stored auth data');
                return { isAuthenticated: false, user: null, reason: 'no_stored_auth' };
            }

            const userData = JSON.parse(storedAuth);
            console.log('📦 [UnifiedAuth] Found stored auth for:', userData.fullName || userData.accessCode);

            // If we have access code, verify with database
            if (userData.accessCode && this.database) {
                const dbUser = await this.getUser(userData.accessCode);
                if (!dbUser) {
                    console.log('❌ [UnifiedAuth] User not found in database');
                    localStorage.removeItem('rhythmAuth_approval');
                    return { isAuthenticated: false, user: null, reason: 'user_not_found' };
                }

                // Check if user is revoked
                if (dbUser.status === 'revoked') {
                    console.log('❌ [UnifiedAuth] User access revoked');
                    localStorage.removeItem('rhythmAuth_approval');
                    return { isAuthenticated: false, user: null, reason: 'access_revoked' };
                }

                // Check device match - but be flexible for admin users and active users
                const isDeviceMismatch = dbUser.deviceId && userData.deviceId && dbUser.deviceId !== userData.deviceId;
                const isAdminUser = dbUser.role === 'admin' || (dbUser.permissions && dbUser.permissions.includes('admin'));
                
                if (isDeviceMismatch && !isAdminUser) {
                    console.log('❌ [UnifiedAuth] Device mismatch for non-admin user');
                    localStorage.removeItem('rhythmAuth_approval');
                    return { isAuthenticated: false, user: null, reason: 'device_mismatch' };
                }
                
                // If device mismatch for admin, update the device ID
                if (isDeviceMismatch && isAdminUser) {
                    console.log('🔄 [UnifiedAuth] Admin user device change detected, updating device ID');
                    try {
                        await this.updateUser(userData.accessCode, { 
                            deviceId: userData.deviceId || this.generateDeviceId(),
                            lastActive: Date.now()
                        });
                    } catch (error) {
                        console.warn('⚠️ [UnifiedAuth] Could not update device ID, but allowing admin login');
                    }
                }

                // Update stored data with latest from database
                const updatedUser = this.normalizeUserData(dbUser);
                localStorage.setItem('rhythmAuth_approval', JSON.stringify(updatedUser));
                this.currentUser = updatedUser;
            } else {
                // No database connection or access code, use stored data
                this.currentUser = this.normalizeUserData(userData);
            }

            console.log('✅ [UnifiedAuth] Authentication successful');
            return { isAuthenticated: true, user: this.currentUser, reason: 'authenticated' };

        } catch (error) {
            console.error('❌ [UnifiedAuth] Authentication check failed:', error);
            return { isAuthenticated: false, user: null, reason: 'check_failed' };
        }
    }

    /**
     * Get user from database (uses unified 'users' collection)
     */
    async getUser(accessCode) {
        if (!this.database) {
            throw new Error('Database not initialized');
        }

        try {
            const userRef = ref(this.database, `users/${accessCode}`);
            const snapshot = await get(userRef);
            return snapshot.exists() ? snapshot.val() : null;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    /**
     * Normalize user data to consistent format
     */
    normalizeUserData(rawData) {
        return {
            // Core identification
            accessCode: rawData.accessCode,
            deviceId: rawData.deviceId,
            fullName: rawData.fullName || rawData.name || rawData.user_name,
            
            // Status and permissions
            status: rawData.status || 'active',
            approved: true, // For backward compatibility
            permissions: rawData.permissions || ['songlist', 'lyrics'],
            role: rawData.role || 'user',
            
            // Admin check
            isAdmin: rawData.role === 'admin' || 
                    rawData.isAdmin === true || 
                    (rawData.permissions && rawData.permissions.includes('admin')),
            
            // Timestamps
            approvedAt: rawData.approvedAt || Date.now(),
            approvedBy: rawData.approvedBy || 'system',
            lastActive: Date.now(),
            
            // Additional data
            deviceInfo: rawData.deviceInfo,
            promotedAt: rawData.promotedAt,
            promotedBy: rawData.promotedBy
        };
    }

    /**
     * Check if user has specific permission
     */
    hasPermission(permission) {
        if (!this.currentUser) return false;
        if (this.currentUser.status === 'revoked') return false;
        
        // Admin users have all permissions
        if (this.isAdmin()) return true;
        
        // Check specific permission
        return this.currentUser.permissions && 
               this.currentUser.permissions.includes(permission);
    }

    /**
     * Check if user is admin
     */
    isAdmin() {
        if (!this.currentUser) return false;
        if (this.currentUser.status === 'revoked') return false;
        
        return this.currentUser.isAdmin === true ||
               this.currentUser.role === 'admin' ||
               (this.currentUser.permissions && this.currentUser.permissions.includes('admin'));
    }

    /**
     * Check if user is authenticated (basic check)
     */
    isAuthenticated() {
        return this.currentUser !== null && this.currentUser.status !== 'revoked';
    }

    /**
     * Get current user data
     */
    getCurrentUser() {
        return this.currentUser;
    }

    /**
     * Login user (store auth data)
     */
    loginUser(userData) {
        const normalizedUser = this.normalizeUserData(userData);
        localStorage.setItem('rhythmAuth_approval', JSON.stringify(normalizedUser));
        this.currentUser = normalizedUser;
        console.log('✅ [UnifiedAuth] User logged in:', normalizedUser.fullName);
        return normalizedUser;
    }

    /**
     * Logout user
     */
    logout() {
        localStorage.removeItem('rhythmAuth_approval');
        localStorage.removeItem('rhythmAuth_pendingRequest');
        this.currentUser = null;
        console.log('👋 [UnifiedAuth] User logged out');
    }

    /**
     * Generate device ID
     */
    generateDeviceId() {
        let deviceId = localStorage.getItem('rhythm_device_id');
        if (!deviceId) {
            deviceId = 'dev_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('rhythm_device_id', deviceId);
        }
        return deviceId;
    }

    /**
     * Restore user session by access code (useful for admin users)
     */
    async restoreUserSession(accessCode) {
        try {
            const dbUser = await this.getUser(accessCode);
            if (!dbUser) {
                console.log('❌ [UnifiedAuth] User not found for restoration');
                return false;
            }

            if (dbUser.status === 'revoked') {
                console.log('❌ [UnifiedAuth] User access is revoked');
                return false;
            }

            // Update device ID to current device
            const currentDeviceId = this.generateDeviceId();
            try {
                await this.updateUser(accessCode, { 
                    deviceId: currentDeviceId,
                    lastActive: Date.now()
                });
            } catch (error) {
                console.warn('⚠️ [UnifiedAuth] Could not update device ID in database');
            }

            // Create normalized user data and store it
            const restoredUser = this.normalizeUserData({
                ...dbUser,
                deviceId: currentDeviceId
            });

            localStorage.setItem('rhythmAuth_approval', JSON.stringify(restoredUser));
            this.currentUser = restoredUser;
            
            console.log('✅ [UnifiedAuth] User session restored for:', restoredUser.fullName);
            return true;

        } catch (error) {
            console.error('❌ [UnifiedAuth] Error restoring user session:', error);
            return false;
        }
    }

    /**
     * Submit login request
     */
    async submitLoginRequest(accessCode, fullName) {
        if (!this.database) {
            throw new Error('Database not initialized');
        }

        const deviceId = this.generateDeviceId();
        console.log('🔍 [UnifiedAuth] Checking login for access code:', accessCode, 'device:', deviceId);

        // Check if user already exists and is approved
        const existingUser = await this.getUser(accessCode);
        if (existingUser) {
            console.log('🔍 [UnifiedAuth] Found existing user:', existingUser);
            
            // If user is approved and active, log them in regardless of device ID
            if (existingUser.status === 'active' || existingUser.status !== 'revoked') {
                console.log('✅ [UnifiedAuth] User is approved, logging in...');
                
                // Update the stored device ID to match the current device
                const updatedUser = {
                    ...existingUser,
                    deviceId: deviceId, // Update to current device
                    lastActive: Date.now()
                };
                
                // Update database with current device ID
                try {
                    const userRef = { users: { [accessCode]: updatedUser } };
                    await this.updateUser(accessCode, { deviceId: deviceId, lastActive: Date.now() });
                    console.log('🔄 [UnifiedAuth] Updated device ID in database');
                } catch (error) {
                    console.warn('⚠️ [UnifiedAuth] Could not update device ID, but proceeding with login');
                }
                
                const loginData = this.loginUser(updatedUser);
                return { success: true, action: 'auto_login', user: loginData };
            }
            
            if (existingUser.status === 'revoked') {
                return { success: false, action: 'access_revoked', message: 'Access has been revoked' };
            }
        }

        // Check for existing request
        const requestKey = `${accessCode}_${deviceId}`;
        const requestRef = { loginRequests: { [requestKey]: null } };
        
        try {
            const existingRequest = await this.checkExistingRequest(requestKey);
            if (existingRequest) {
                return { success: false, action: 'request_pending', message: 'Request already pending' };
            }
        } catch (error) {
            console.log('🔍 [UnifiedAuth] No existing request found');
        }

        // Submit new request
        const requestData = {
            accessCode,
            fullName,
            deviceId,
            requestedAt: Date.now(),
            status: 'pending',
            permissions: ['songlist', 'lyrics'],
            deviceInfo: navigator.userAgent.substring(0, 100)
        };

        try {
            await this.submitNewRequest(requestKey, requestData);
            
            // Store pending request locally
            localStorage.setItem('rhythmAuth_pendingRequest', JSON.stringify({
                accessCode,
                fullName,
                deviceId,
                requestedAt: Date.now(),
                status: 'pending'
            }));
            
            return { success: true, action: 'request_submitted', message: 'Request submitted successfully' };
        } catch (error) {
            console.error('❌ [UnifiedAuth] Error submitting request:', error);
            throw error;
        }
    }

    /**
     * Update user in database
     */
    async updateUser(accessCode, updates) {
        if (!this.database) {
            throw new Error('Database not initialized');
        }

        try {
            const { ref, update } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
            const userRef = ref(this.database, `users/${accessCode}`);
            await update(userRef, updates);
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    /**
     * Check for existing request
     */
    async checkExistingRequest(requestKey) {
        try {
            const { ref, get } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
            const requestRef = ref(this.database, `loginRequests/${requestKey}`);
            const snapshot = await get(requestRef);
            return snapshot.exists() ? snapshot.val() : null;
        } catch (error) {
            console.error('Error checking existing request:', error);
            return null;
        }
    }

    /**
     * Submit new request
     */
    async submitNewRequest(requestKey, requestData) {
        try {
            const { ref, set } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
            const requestRef = ref(this.database, `loginRequests/${requestKey}`);
            await set(requestRef, requestData);
        } catch (error) {
            console.error('Error submitting new request:', error);
            throw error;
        }
    }

    /**
     * Check request status
     */
    async checkRequestStatus(accessCode, deviceId) {
        if (!this.database) return 'error';

        try {
            // Check if approved
            const user = await this.getUser(accessCode);
            if (user && user.deviceId === deviceId) {
                return user.status === 'revoked' ? 'revoked' : 'approved';
            }

            // Check if rejected
            const rejectedRef = ref(this.database, `rejectedLogins/${accessCode}_${deviceId}`);
            const rejectedSnap = await get(rejectedRef);
            if (rejectedSnap.exists()) {
                return 'rejected';
            }

            // Check if pending
            const requestRef = ref(this.database, `loginRequests/${accessCode}_${deviceId}`);
            const requestSnap = await get(requestRef);
            if (requestSnap.exists()) {
                return 'pending';
            }

            return 'none';
        } catch (error) {
            console.error('Error checking request status:', error);
            return 'error';
        }
    }

    /**
     * Redirect to appropriate page based on permissions
     */
    redirectAfterLogin(returnUrl = null) {
        if (returnUrl) {
            window.location.href = returnUrl;
            return;
        }

        if (this.isAdmin()) {
            this.showDestinationChoice();
        } else {
            window.location.href = 'pages/songlist.html';
        }
    }

    /**
     * Show admin destination choice
     */
    showDestinationChoice() {
        // Remove any existing choice containers
        document.querySelectorAll('.auth-choice-container').forEach(el => el.remove());
        
        // Hide login form if exists
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) loginContainer.style.display = 'none';
        
        // Create choice container
        const choiceContainer = document.createElement('div');
        choiceContainer.className = 'login-container auth-choice-container';
        choiceContainer.innerHTML = `
            <h2>Welcome, Admin!</h2>
            <p style="text-align: center; margin-bottom: 30px; color: #ccc;">
                Choose your destination:
            </p>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <button onclick="rhythmAuth.goToSonglist()" class="submit-btn" style="background: var(--primary-color);">
                    Song List
                </button>
                <button onclick="rhythmAuth.goToAdmin()" class="submit-btn" style="background: #ff6b6b;">
                    Admin Panel
                </button>
            </div>
        `;
        
        document.body.appendChild(choiceContainer);
    }

    goToSonglist() {
        window.location.href = 'pages/songlist.html';
    }

    goToAdmin() {
        window.location.href = 'pages/admin/admin.html';
    }
}

// Create global instance
window.rhythmAuth = new RhythmUnifiedAuth();

// For backward compatibility
window.RhythmAuth = RhythmUnifiedAuth;
window.adminAuth = window.rhythmAuth;

// Export for modules
export default RhythmUnifiedAuth;
