/**
 * UNIFIED RHYTHM AUTHENTICATION SYSTEM
 * This is the single source of truth for all authentication
 * Used by login.html, songlist.html, admin pages, and any other pages
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, get, set, onValue, off } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

class RhythmUnifiedAuth {
    constructor() {
        this.database = null;
        this.currentUser = null;
        this.isInitialized = false;
        this.activeListeners = new Map(); // Track active Firebase listeners
        this.pendingRequestListener = null;
        this.userStatusListener = null;
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
                
                // Try automatic login with stored device credentials
                const storedCredentials = this.getStoredCredentials();
                if (storedCredentials) {
                    console.log('🔄 [UnifiedAuth] Attempting automatic login with stored credentials...');
                    console.log('📱 [UnifiedAuth] Stored credentials:', {
                        fullName: storedCredentials.fullName,
                        accessCode: storedCredentials.accessCode,
                        deviceId: storedCredentials.deviceId
                    });
                    
                    // Verify the stored device ID matches current device ID
                    const currentDeviceId = this.generateDeviceId();
                    if (storedCredentials.deviceId !== currentDeviceId) {
                        console.log('❌ [UnifiedAuth] Device ID mismatch in stored credentials');
                        console.log('   Stored device ID:', storedCredentials.deviceId);
                        console.log('   Current device ID:', currentDeviceId);
                        this.clearDeviceCredentials();
                        return { isAuthenticated: false, user: null, reason: 'device_credentials_mismatch' };
                    }
                    
                    const loginResult = await this.submitLoginRequest(
                        storedCredentials.accessCode, 
                        storedCredentials.fullName
                    );
                    if (loginResult.success && loginResult.action === 'auto_login') {
                        console.log('✅ [UnifiedAuth] Automatic login successful');
                        return { isAuthenticated: true, user: loginResult.user, reason: 'auto_login' };
                    } else {
                        console.log('❌ [UnifiedAuth] Automatic login failed:', loginResult);
                        // Clear invalid credentials
                        this.clearDeviceCredentials();
                    }
                }
                
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

                // Check device match - STRICT enforcement for all users
                const currentDeviceId = this.generateDeviceId();
                console.log('🔍 [Device Debug] Current device ID:', currentDeviceId);
                console.log('🔍 [Device Debug] DB user device ID:', dbUser.deviceId);
                
                const isDeviceMismatch = dbUser.deviceId && currentDeviceId !== dbUser.deviceId;
                
                if (isDeviceMismatch) {
                    console.log('❌ [UnifiedAuth] Device mismatch detected');
                    console.log('   Database device ID:', dbUser.deviceId);
                    console.log('   Current device ID:', currentDeviceId);
                    console.log('   User:', dbUser.fullName || dbUser.name);
                    localStorage.removeItem('rhythmAuth_approval');
                    return { isAuthenticated: false, user: null, reason: 'device_mismatch' };
                }

                // Update stored data with latest from database
                const updatedUser = this.normalizeUserData(dbUser);
                localStorage.setItem('rhythmAuth_approval', JSON.stringify(updatedUser));
                this.currentUser = updatedUser;
                
                // Store device credentials for future use
                this.storeDeviceCredentials(
                    dbUser.fullName || dbUser.name || 'User', 
                    userData.accessCode
                );
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
     * Get device information for debugging
     */
    getDeviceInfo() {
        const deviceId = this.generateDeviceId();
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        
        return {
            deviceId,
            userAgent,
            platform,
            isMobile: /iPhone|iPad|iPod|Android/i.test(userAgent),
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Clear device data (for testing/debugging only)
     */
    clearDeviceData() {
        localStorage.removeItem('rhythm_device_id');
        console.log('🗑️ [UnifiedAuth] Device data cleared');
    }

    /**
     * Debug function to show current authentication state
     */
    showAuthDebugInfo() {
        const deviceInfo = this.getDeviceInfo();
        const currentUser = this.getCurrentUser();
        const storedAuth = localStorage.getItem('rhythmAuth_approval');
        
        console.group('🔍 Authentication Debug Info');
        console.log('Current Device ID:', deviceInfo.currentDeviceId);
        console.log('User Agent:', deviceInfo.userAgent);
        console.log('Platform:', deviceInfo.platform);
        console.log('Has Stored Auth:', deviceInfo.hasStoredAuth);
        console.log('Stored User:', deviceInfo.storedUser);
        console.log('Stored Device ID:', deviceInfo.storedDeviceId);
        console.log('Current User Object:', currentUser);
        console.log('Raw localStorage Data:', storedAuth);
        console.groupEnd();
        
        return { deviceInfo, currentUser, rawStorage: storedAuth };
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
        
        // Clean up all listeners
        this.stopRequestMonitoring();
        this.stopUserStatusMonitoring();
        
        console.log('👋 [UnifiedAuth] User logged out');
    }

    /**
     * Generate and store device ID persistently
     */
    generateDeviceId() {
        let deviceId = localStorage.getItem('rhythm_device_id');
        if (!deviceId) {
            // Create a truly unique device ID using timestamp + random + browser fingerprint
            const timestamp = Date.now().toString(36);
            const random1 = Math.random().toString(36).substr(2, 6);
            const random2 = Math.random().toString(36).substr(2, 6);
            const userAgent = navigator.userAgent.substring(0, 30).replace(/[^a-zA-Z0-9]/g, '').substring(0, 8);
            const platform = navigator.platform.replace(/[^a-zA-Z0-9]/g, '').substring(0, 4);
            
            deviceId = `${timestamp}_${random1}_${random2}_${userAgent}_${platform}`;
            localStorage.setItem('rhythm_device_id', deviceId);
            console.log('🆔 [Device] Generated NEW persistent device ID:', deviceId);
        } else {
            console.log('🆔 [Device] Using stored device ID:', deviceId);
        }
        return deviceId;
    }

    /**
     * Store user credentials on this device
     */
    storeDeviceCredentials(fullName, accessCode) {
        // Get current device ID (don't generate a new one)
        const deviceId = this.generateDeviceId();
        
        const deviceData = {
            fullName: fullName,
            accessCode: accessCode,
            deviceId: deviceId,
            storedAt: Date.now()
        };
        localStorage.setItem('rhythm_device_credentials', JSON.stringify(deviceData));
        console.log('💾 [Device] Stored credentials for:', fullName, 'with device ID:', deviceId);
        console.log('💾 [Device] Full credentials stored:', deviceData);
    }

    /**
     * Get stored device credentials
     */
    getStoredCredentials() {
        const stored = localStorage.getItem('rhythm_device_credentials');
        if (stored) {
            try {
                const credentials = JSON.parse(stored);
                console.log('📱 [Device] Found stored credentials:', credentials.fullName, credentials.accessCode);
                return credentials;
            } catch (error) {
                console.error('❌ [Device] Invalid stored credentials, clearing...');
                localStorage.removeItem('rhythm_device_credentials');
            }
        }
        return null;
    }

    /**
     * Clear device credentials
     */
    clearDeviceCredentials() {
        localStorage.removeItem('rhythm_device_credentials');
        localStorage.removeItem('rhythm_device_id');
        localStorage.removeItem('rhythmAuth_approval');
        console.log('🧹 [Device] Cleared all device data');
    }

    /**
     * Debug: Show current device info
     */
    showDeviceInfo() {
        const deviceId = this.generateDeviceId();
        const credentials = this.getStoredCredentials();
        const currentUser = this.getCurrentUser();
        
        console.group('📱 [Device Debug] Complete device information:');
        console.log('Current Device ID:', deviceId);
        console.log('Stored Credentials:', credentials);
        console.log('Current User:', currentUser);
        console.log('User Agent:', navigator.userAgent.substring(0, 100));
        console.log('Platform:', navigator.platform);
        console.log('localStorage Keys:', Object.keys(localStorage).filter(key => key.startsWith('rhythm')));
        console.groupEnd();
        
        return { 
            deviceId, 
            credentials, 
            currentUser,
            storageKeys: Object.keys(localStorage).filter(key => key.startsWith('rhythm'))
        };
    }
    
    /**
     * Test function: Validate current device credentials against database
     */
    async testDeviceCredentials() {
        const credentials = this.getStoredCredentials();
        if (!credentials) {
            console.log('❌ [Test] No stored credentials found');
            return { valid: false, reason: 'no_credentials' };
        }
        
        console.log('🧪 [Test] Testing device credentials...');
        console.log('   Full Name:', credentials.fullName);
        console.log('   Access Code:', credentials.accessCode);
        console.log('   Device ID:', credentials.deviceId);
        
        try {
            const dbUser = await this.getUser(credentials.accessCode);
            if (!dbUser) {
                console.log('❌ [Test] User not found in database');
                return { valid: false, reason: 'user_not_found' };
            }
            
            const nameMatch = (dbUser.fullName || dbUser.name || '').toLowerCase().trim() === 
                             credentials.fullName.toLowerCase().trim();
            const deviceMatch = dbUser.deviceId === credentials.deviceId;
            
            console.log('🧪 [Test] Validation results:');
            console.log('   Name Match:', nameMatch);
            console.log('   Device Match:', deviceMatch);
            console.log('   DB Name:', dbUser.fullName || dbUser.name);
            console.log('   DB Device:', dbUser.deviceId);
            console.log('   Status:', dbUser.status);
            
            return {
                valid: nameMatch && deviceMatch && dbUser.status !== 'revoked',
                nameMatch,
                deviceMatch,
                userStatus: dbUser.status,
                dbUser
            };
            
        } catch (error) {
            console.error('❌ [Test] Error testing credentials:', error);
            return { valid: false, reason: 'test_error', error };
        }
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

            // STRICT device check: user must restore from their registered device
            const currentDeviceId = this.generateDeviceId();
            
            if (dbUser.deviceId && dbUser.deviceId !== currentDeviceId) {
                console.log('❌ [UnifiedAuth] Cannot restore session - device mismatch');
                console.log('   Registered device:', dbUser.deviceId);
                console.log('   Current device:', currentDeviceId);
                return false;
            }
            
            // If no device ID is set, restoration is not allowed
            if (!dbUser.deviceId) {
                console.log('❌ [UnifiedAuth] Cannot restore session - no device binding');
                return false;
            }

            // Create normalized user data and store it
            const restoredUser = this.normalizeUserData({
                ...dbUser,
                deviceId: currentDeviceId,
                lastActive: Date.now()
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
        console.log('🔍 [UnifiedAuth] Login attempt details:');
        console.log('   Access Code:', accessCode);
        console.log('   Full Name:', fullName);
        console.log('   Current Device ID:', deviceId);

        // Check if user already exists and is approved
        const existingUser = await this.getUser(accessCode);
        if (existingUser) {
            console.log('🔍 [UnifiedAuth] Found existing user in database:');
            console.log('   User Access Code:', existingUser.accessCode || accessCode);
            console.log('   User Full Name:', existingUser.fullName || existingUser.name);
            console.log('   User Device ID:', existingUser.deviceId);
            console.log('   User Status:', existingUser.status);
            
            // If user is approved and active, check device binding
            if (existingUser.status === 'active' || existingUser.status !== 'revoked') {
                console.log('🔍 [UnifiedAuth] User is approved, checking 3-tuple validation...');
                console.log('   Expected Device:', existingUser.deviceId);
                console.log('   Current Device:', deviceId);
                console.log('   Expected Name:', existingUser.fullName || existingUser.name);
                console.log('   Provided Name:', fullName);
                console.log('   Expected Code:', existingUser.accessCode || accessCode);
                console.log('   Provided Code:', accessCode);
                
                // Validate name match (case-insensitive)
                const expectedName = (existingUser.fullName || existingUser.name || '').toLowerCase().trim();
                const providedName = fullName.toLowerCase().trim();
                if (expectedName !== providedName) {
                    console.log('❌ [UnifiedAuth] Name mismatch during login attempt');
                    console.log('   Expected name:', expectedName);
                    console.log('   Provided name:', providedName);
                    return { 
                        success: false, 
                        action: 'name_mismatch', 
                        message: 'The name provided does not match the registered name for this access code.' 
                    };
                }
                
                // STRICT device check: user must be on their registered device
                if (existingUser.deviceId && existingUser.deviceId !== deviceId) {
                    console.log('❌ [UnifiedAuth] Device mismatch during login attempt');
                    console.log('   This account is bound to a different device!');
                    console.log('   If you have multiple accounts, try a different access code.');
                    return { 
                        success: false, 
                        action: 'device_mismatch', 
                        message: 'This account is registered to a different device. If you have multiple accounts with the same name, try using the access code for the account registered to this device.' 
                    };
                }
                
                // If no device ID is set, bind to current device (first login)
                if (!existingUser.deviceId) {
                    console.log('🔄 [UnifiedAuth] First login - binding user to current device');
                    try {
                        await this.updateUser(accessCode, { 
                            deviceId: deviceId, 
                            lastActive: Date.now(),
                            firstDeviceBinding: Date.now()
                        });
                        existingUser.deviceId = deviceId;
                        console.log('✅ [UnifiedAuth] User bound to device:', deviceId);
                    } catch (error) {
                        console.error('❌ [UnifiedAuth] Failed to bind user to device:', error);
                        return { 
                            success: false, 
                            action: 'binding_failed', 
                            message: 'Failed to bind account to device. Please try again.' 
                        };
                    }
                }
                
                // Device matches or was just set - proceed with login
                console.log('✅ [UnifiedAuth] Device verified, logging in...');
                const loginData = this.loginUser({
                    ...existingUser,
                    lastActive: Date.now()
                });
                
                // Update last active time in database
                try {
                    await this.updateUser(accessCode, { lastActive: Date.now() });
                } catch (error) {
                    console.warn('⚠️ [UnifiedAuth] Could not update last active time');
                }
                
                // Store device credentials for future automatic login
                this.storeDeviceCredentials(fullName, accessCode);
                
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
     * Start monitoring for real-time approval of pending request
     */
    startRequestMonitoring(accessCode, deviceId, onApproved, onRejected, onRevoked) {
        if (!this.database) {
            console.error('❌ [RealTime] Database not initialized');
            return;
        }

        console.log('🔄 [RealTime] Starting request monitoring for:', accessCode);

        // Stop any existing listeners
        this.stopRequestMonitoring();

        const requestKey = `${accessCode}_${deviceId}`;

        // Monitor the users collection for approval
        const userRef = ref(this.database, `users/${accessCode}`);
        this.userStatusListener = onValue(userRef, (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                console.log('🔄 [RealTime] User data updated:', userData.fullName, userData.status);
                
                // Check if this is the right device and user is approved
                if (userData.deviceId === deviceId && userData.status === 'active') {
                    console.log('✅ [RealTime] Request approved! Auto-logging in...');
                    this.stopRequestMonitoring();
                    
                    // Immediately log the user in
                    const loginData = this.loginUser(userData);
                    
                    // Store device credentials
                    this.storeDeviceCredentials(userData.fullName || userData.name, accessCode);
                    
                    // Remove pending request
                    localStorage.removeItem('rhythmAuth_pendingRequest');
                    
                    if (onApproved) {
                        onApproved(loginData);
                    }
                    return;
                }
                
                // Check if user was revoked
                if (userData.status === 'revoked') {
                    console.log('❌ [RealTime] User access revoked');
                    this.stopRequestMonitoring();
                    localStorage.removeItem('rhythmAuth_pendingRequest');
                    if (onRevoked) onRevoked();
                    return;
                }
            }
        });

        // Monitor the rejected collection
        const rejectedRef = ref(this.database, `rejectedLogins/${requestKey}`);
        this.rejectedStatusListener = onValue(rejectedRef, (snapshot) => {
            if (snapshot.exists()) {
                console.log('❌ [RealTime] Request rejected');
                this.stopRequestMonitoring();
                localStorage.removeItem('rhythmAuth_pendingRequest');
                if (onRejected) onRejected();
            }
        });

        // Store listener references
        this.activeListeners.set('userStatus', this.userStatusListener);
        this.activeListeners.set('rejectedStatus', this.rejectedStatusListener);

        console.log('👂 [RealTime] Listeners started for real-time monitoring');
    }

    /**
     * Stop all request monitoring listeners
     */
    stopRequestMonitoring() {
        if (this.userStatusListener) {
            off(ref(this.database, `users`), 'value', this.userStatusListener);
            this.userStatusListener = null;
        }
        
        if (this.rejectedStatusListener) {
            off(ref(this.database, `rejectedLogins`), 'value', this.rejectedStatusListener);
            this.rejectedStatusListener = null;
        }

        // Clear all active listeners
        this.activeListeners.clear();
        console.log('🔇 [RealTime] Request monitoring stopped');
    }

    /**
     * Start monitoring current user status for revocation
     */
    startUserStatusMonitoring(accessCode, onRevoked) {
        if (!this.database || !accessCode) return;

        console.log('👂 [RealTime] Starting user status monitoring for:', accessCode);

        const userRef = ref(this.database, `users/${accessCode}`);
        this.pendingRequestListener = onValue(userRef, (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                if (userData.status === 'revoked') {
                    console.log('❌ [RealTime] User access was revoked');
                    this.logout();
                    if (onRevoked) onRevoked();
                }
            } else {
                // User was deleted
                console.log('❌ [RealTime] User account was deleted');
                this.logout();
                if (onRevoked) onRevoked();
            }
        });
    }

    /**
     * Stop user status monitoring
     */
    stopUserStatusMonitoring() {
        if (this.pendingRequestListener) {
            off(ref(this.database, `users`), 'value', this.pendingRequestListener);
            this.pendingRequestListener = null;
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

        // Check if this is PWA mode
        const isPWA = window.matchMedia('(display-mode: standalone)').matches || 
                     window.navigator.standalone === true ||
                     document.referrer.includes('android-app://');

        if (this.isAdmin()) {
            // Check user preference for admin destination
            const adminPreference = localStorage.getItem('rhythm_admin_preference');
            
            if (isPWA && adminPreference) {
                // PWA mode with saved preference - direct redirect
                if (adminPreference === 'admin') {
                    window.location.href = 'pages/admin/admin.html';
                } else {
                    window.location.href = 'pages/songlist.html';
                }
                return;
            }
            
            // Show choice (either first time or web mode)
            this.showDestinationChoice(isPWA);
        } else {
            window.location.href = 'pages/songlist.html';
        }
    }

    /**
     * Show admin destination choice
     */
    showDestinationChoice(isPWA = false) {
        // Remove any existing choice containers
        document.querySelectorAll('.auth-choice-container').forEach(el => el.remove());
        
        // Hide login form if exists
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) loginContainer.style.display = 'none';
        
        // Create choice container
        const choiceContainer = document.createElement('div');
        choiceContainer.className = 'login-container auth-choice-container';
        
        const rememberOption = isPWA ? `
            <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                <label style="display: flex; align-items: center; gap: 10px; color: #ccc; cursor: pointer;">
                    <input type="checkbox" id="rememberChoice" style="margin: 0;">
                    <span>Remember my choice for PWA</span>
                </label>
                <small style="color: #888; display: block; margin-top: 5px;">
                    Skip this choice screen in the future
                </small>
            </div>
        ` : '';
        
        choiceContainer.innerHTML = `
            <h2>Welcome, Admin!</h2>
            <p style="text-align: center; margin-bottom: 30px; color: #ccc;">
                Choose your destination:
            </p>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <button onclick="rhythmAuth.goToSonglist(${isPWA})" class="submit-btn" style="background: var(--primary-color);">
                    Song List
                </button>
                <button onclick="rhythmAuth.goToAdmin(${isPWA})" class="submit-btn" style="background: #ff6b6b;">
                    Admin Panel
                </button>
            </div>
            ${rememberOption}
        `;
        
        document.body.appendChild(choiceContainer);
    }

    goToSonglist(rememberForPWA = false) {
        if (rememberForPWA) {
            const rememberCheckbox = document.getElementById('rememberChoice');
            if (rememberCheckbox && rememberCheckbox.checked) {
                localStorage.setItem('rhythm_admin_preference', 'songlist');
                localStorage.setItem('rhythm_silent_redirect', 'true');
            }
        }
        window.location.href = 'pages/songlist.html';
    }

    goToAdmin(rememberForPWA = false) {
        if (rememberForPWA) {
            const rememberCheckbox = document.getElementById('rememberChoice');
            if (rememberCheckbox && rememberCheckbox.checked) {
                localStorage.setItem('rhythm_admin_preference', 'admin');
                localStorage.setItem('rhythm_silent_redirect', 'true');
            }
        }
        window.location.href = 'pages/admin/admin.html';
    }

    /**
     * Reset PWA preferences (useful for testing or user preference changes)
     */
    resetPWAPreferences() {
        localStorage.removeItem('rhythm_admin_preference');
        localStorage.removeItem('rhythm_silent_redirect');
        console.log('🔄 PWA preferences reset');
    }

    /**
     * Check if user has PWA silent redirect enabled
     */
    hasSilentRedirect() {
        return localStorage.getItem('rhythm_silent_redirect') === 'true';
    }

    /**
     * Get admin preference for PWA
     */
    getAdminPreference() {
        return localStorage.getItem('rhythm_admin_preference');
    }

    /**
     * Clear device binding (for testing only)
     */
    clearDeviceBinding() {
        localStorage.removeItem('rhythm_device_id');
        localStorage.removeItem('rhythmAuth_approval');
        console.log('🧹 [Device] Cleared device binding and auth data');
        return this.generateDeviceId();
    }

    /**
     * ADMIN ONLY: Bind user to specific device
     */
    async bindUserToDevice(accessCode, targetDeviceId = null) {
        if (!this.database) {
            throw new Error('Database not initialized');
        }

        // If no target device specified, use current device
        const deviceId = targetDeviceId || this.generateDeviceId();
        
        try {
            await this.updateUser(accessCode, { 
                deviceId: deviceId,
                lastActive: Date.now(),
                deviceBoundAt: Date.now(),
                deviceBoundBy: this.currentUser?.accessCode || 'system'
            });
            
            console.log(`✅ [Admin] User ${accessCode} bound to device ${deviceId}`);
            return { success: true, deviceId: deviceId };
        } catch (error) {
            console.error('❌ [Admin] Failed to bind user to device:', error);
            return { success: false, error: error.message };
        }
    }

    // Admin function to unbind a user from their device
    // Admin function to unbind a user from their device
    async unbindUserDevice(accessCode) {
        if (!this.database) {
            throw new Error('Database not initialized');
        }

        try {
            await this.updateUser(accessCode, { 
                deviceId: null,
                lastActive: Date.now(),
                deviceUnboundAt: Date.now(),
                deviceUnboundBy: this.currentUser?.accessCode || 'system'
            });
            
            console.log(`✅ [Admin] User ${accessCode} unbound from device`);
            return { success: true };
        } catch (error) {
            console.error('❌ [Admin] Failed to unbind user from device:', error);
            return { success: false, error: error.message };
        }
    }
}

// Create global instance
window.rhythmAuth = new RhythmUnifiedAuth();

// For backward compatibility
window.RhythmAuth = RhythmUnifiedAuth;
window.adminAuth = window.rhythmAuth;

// Export for modules
export default RhythmUnifiedAuth;
