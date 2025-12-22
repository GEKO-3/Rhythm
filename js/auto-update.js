/**
 * Auto-Update Service for Rhythm Boduberu
 * Checks for new versions and prompts user to update
 */

class RhythmAutoUpdate {
    constructor() {
        this.currentVersion = null;
        this.checkInterval = 5 * 60 * 1000; // Check every 5 minutes
        this.versionUrl = '/version.json';
        this.isCheckingUpdate = false;
        
        this.init();
    }

    async init() {
        console.log('🔄 Auto-update service initialized');
        
        // 🚨 CRITICAL: Clear update flags on successful load to prevent infinite loops
        // Only clear if we successfully loaded (no update query param)
        const urlParams = new URLSearchParams(window.location.search);
        if (!urlParams.has('v') || Date.now() - parseInt(urlParams.get('t') || '0') > 5000) {
            // Page loaded successfully, clear update flags
            sessionStorage.removeItem('rhythm_update_in_progress');
            console.log('✅ Page loaded successfully, update flags cleared');
        }
        
        // Check if running as PWA
        const isPWA = window.matchMedia('(display-mode: standalone)').matches || 
                      window.navigator.standalone === true;
        
        if (isPWA) {
            console.log('📱 Running as PWA - aggressive update checking enabled');
        }
        
        // Load current version
        await this.loadCurrentVersion();
        
        // Check for updates immediately to force PWA cache refresh
        setTimeout(() => this.checkForUpdates(), 3000); // 3 seconds after load
        
        // Set up periodic checks (more frequent for PWA)
        const checkInterval = isPWA ? 2 * 60 * 1000 : this.checkInterval; // 2 min for PWA, 5 min for web
        setInterval(() => this.checkForUpdates(), checkInterval);
        
        // 🚨 DISABLED: These checks are too aggressive and cause white screen issues
        // Check when page becomes visible (user returns to tab/app)
        // document.addEventListener('visibilitychange', () => {
        //     if (!document.hidden) {
        //         console.log('👁️ App became visible - checking for updates');
        //         this.checkForUpdates();
        //     }
        // });
        
        // Check when app regains focus
        // window.addEventListener('focus', () => {
        //     console.log('🎯 App gained focus - checking for updates');
        //     setTimeout(() => this.checkForUpdates(), 500);
        // });
    }

    async loadCurrentVersion() {
        try {
            const response = await fetch(this.versionUrl, {
                cache: 'no-store'
            });
            const data = await response.json();
            this.currentVersion = data.version;
            console.log('📌 Current version:', this.currentVersion);
            
            // Store in localStorage for comparison
            const storedVersion = localStorage.getItem('rhythm_app_version');
            if (!storedVersion || storedVersion !== this.currentVersion) {
                localStorage.setItem('rhythm_app_version', this.currentVersion);
                console.log('💾 Version stored in localStorage');
            }
        } catch (error) {
            console.error('❌ Failed to load current version:', error);
            // Try to get from localStorage as fallback
            this.currentVersion = localStorage.getItem('rhythm_app_version') || '0.0.0';
        }
    }

    async checkForUpdates() {
        if (this.isCheckingUpdate) {
            console.log('⏳ Update check already in progress, skipping...');
            return;
        }

        this.isCheckingUpdate = true;

        try {
            console.log('🔍 Checking for updates...');
            
            const response = await fetch(this.versionUrl + '?t=' + Date.now(), {
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache'
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch version info');
            }
            
            const data = await response.json();
            const latestVersion = data.version;
            
            console.log('📊 Version check:', {
                current: this.currentVersion,
                latest: latestVersion
            });
            
            if (this.isNewerVersion(latestVersion, this.currentVersion)) {
                console.log('🎉 New version available:', latestVersion);
                this.showUpdatePrompt(data);
            } else {
                console.log('✅ App is up to date');
            }
            
        } catch (error) {
            console.error('❌ Update check failed:', error);
        } finally {
            this.isCheckingUpdate = false;
        }
    }

    isNewerVersion(latest, current) {
        if (!current) return true;
        
        const latestParts = latest.split('.').map(Number);
        const currentParts = current.split('.').map(Number);
        
        for (let i = 0; i < Math.max(latestParts.length, currentParts.length); i++) {
            const latestPart = latestParts[i] || 0;
            const currentPart = currentParts[i] || 0;
            
            if (latestPart > currentPart) return true;
            if (latestPart < currentPart) return false;
        }
        
        return false;
    }

    showUpdatePrompt(versionData) {
        // Force show update prompt every time for PWA cache refresh
        console.log('🎉 Showing update prompt for version', versionData.version);

        // Create update banner
        const banner = document.createElement('div');
        banner.id = 'update-banner';
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #f5d000 0%, #fbc531 100%);
            color: #000;
            padding: 15px 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            animation: slideDown 0.3s ease-out;
        `;

        banner.innerHTML = `
            <div style="flex: 1;">
                <strong style="font-size: 16px;">🎉 New Update Available!</strong>
                <div style="font-size: 13px; margin-top: 4px; opacity: 0.9;">
                    Version ${versionData.version} - ${versionData.description}
                </div>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
                <button id="update-now-btn" style="
                    padding: 8px 20px;
                    background: #000;
                    color: #f5d000;
                    border: none;
                    border-radius: 5px;
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 14px;
                    transition: all 0.2s;
                ">Update Now</button>
                <button id="update-later-btn" style="
                    padding: 8px 15px;
                    background: rgba(0, 0, 0, 0.1);
                    color: #000;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 13px;
                ">Later</button>
            </div>
        `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from {
                    transform: translateY(-100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            #update-now-btn:hover {
                background: #1a1a1a !important;
                transform: scale(1.05);
            }
            #update-later-btn:hover {
                background: rgba(0, 0, 0, 0.2) !important;
            }
        `;
        document.head.appendChild(style);

        document.body.insertBefore(banner, document.body.firstChild);

        // Handle update button
        document.getElementById('update-now-btn').addEventListener('click', () => {
            this.performUpdate(versionData.version);
        });

        // Handle later button
        document.getElementById('update-later-btn').addEventListener('click', () => {
            banner.style.animation = 'slideDown 0.3s ease-out reverse';
            setTimeout(() => banner.remove(), 300);
            
            // Remember we prompted for this version
            localStorage.setItem('rhythm_last_prompted_version', versionData.version);
        });

        // Auto-update after 5 seconds if user doesn't click
        setTimeout(() => {
            if (banner.parentNode) {
                console.log('⏰ Auto-updating after 5 seconds...');
                this.performUpdate(versionData.version);
            }
        }, 5000);
    }

    async performUpdate(newVersion) {
        console.log('🔄 Performing update to version', newVersion);

        // 🚨 CRITICAL: Prevent infinite reload loop
        const updateInProgress = sessionStorage.getItem('rhythm_update_in_progress');
        const lastUpdateAttempt = sessionStorage.getItem('rhythm_last_update_attempt');
        const now = Date.now();
        
        // If we attempted an update in the last 10 seconds, something went wrong - bail out
        if (lastUpdateAttempt && (now - parseInt(lastUpdateAttempt)) < 10000) {
            console.error('🚨 Update attempted too recently - preventing infinite loop!');
            if (banner) {
                banner.remove();
            }
            // Clear the flag after 30 seconds
            setTimeout(() => {
                sessionStorage.removeItem('rhythm_last_update_attempt');
            }, 30000);
            return;
        }
        
        // If update is already in progress, don't start another one
        if (updateInProgress === 'true') {
            console.warn('⚠️ Update already in progress, skipping...');
            return;
        }
        
        // Mark update as in progress
        sessionStorage.setItem('rhythm_update_in_progress', 'true');
        sessionStorage.setItem('rhythm_last_update_attempt', now.toString());

        // Show loading state
        const banner = document.getElementById('update-banner');
        if (banner) {
            banner.innerHTML = `
                <div style="flex: 1; text-align: center;">
                    <strong style="font-size: 16px;">⏳ Updating...</strong>
                    <div style="font-size: 13px; margin-top: 4px;">Please wait while we update the app</div>
                </div>
            `;
        }

        // 🚨 SAFETY: Force reload after 5 seconds if update gets stuck
        const safetyTimeout = setTimeout(() => {
            console.warn('⚠️ Update taking too long, forcing reload...');
            sessionStorage.removeItem('rhythm_update_in_progress');
            window.location.replace(window.location.href.split('?')[0] + '?v=' + newVersion + '&t=' + Date.now());
        }, 5000);

        try {
            console.log('🗑️ Clearing service workers and caches...');
            
            // Unregister all service workers with timeout
            if ('serviceWorker' in navigator) {
                const registrations = await Promise.race([
                    navigator.serviceWorker.getRegistrations(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 2000))
                ]).catch(() => []);
                
                for (let registration of registrations) {
                    try {
                        await registration.unregister();
                        console.log('🗑️ Unregistered service worker');
                    } catch (e) {
                        console.warn('⚠️ Failed to unregister service worker:', e);
                    }
                }
            }

            // Clear all caches with timeout
            if ('caches' in window) {
                const cacheNames = await Promise.race([
                    caches.keys(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 2000))
                ]).catch(() => []);
                
                await Promise.allSettled(cacheNames.map(name => caches.delete(name)));
                console.log('🗑️ Cleared all caches:', cacheNames.length, 'caches deleted');
            }

            // Clear localStorage items related to caching (keep user data)
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && (key.includes('cache') || key.includes('offline') || key === 'rhythm_last_prompted_version')) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));
            console.log('🗑️ Cleared cache-related localStorage items:', keysToRemove.length);

            // Update version in localStorage
            localStorage.setItem('rhythm_app_version', newVersion);

            // Show success message
            if (banner) {
                banner.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
                banner.innerHTML = `
                    <div style="flex: 1; text-align: center; color: white;">
                        <strong style="font-size: 16px;">✅ Update Complete!</strong>
                        <div style="font-size: 13px; margin-top: 4px;">Reloading app...</div>
                    </div>
                `;
            }

            console.log('✅ Update preparation complete, reloading...');

            // Clear the safety timeout since we're about to reload
            clearTimeout(safetyTimeout);

            // Clear the update-in-progress flag before reloading
            sessionStorage.removeItem('rhythm_update_in_progress');

            // Force hard reload after short delay - strip existing query params to avoid duplication
            setTimeout(() => {
                const baseUrl = window.location.href.split('?')[0];
                window.location.replace(baseUrl + '?v=' + newVersion + '&t=' + Date.now());
            }, 1000);

        } catch (error) {
            console.error('❌ Update failed:', error);
            
            // Clear the safety timeout
            clearTimeout(safetyTimeout);
            
            // Clear the update-in-progress flag
            sessionStorage.removeItem('rhythm_update_in_progress');
            
            if (banner) {
                banner.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                banner.innerHTML = `
                    <div style="flex: 1; text-align: center; color: white;">
                        <strong style="font-size: 16px;">❌ Update Failed</strong>
                        <div style="font-size: 13px; margin-top: 4px;">Reloading anyway...</div>
                    </div>
                `;
                
                // Still try to reload even if update failed
                setTimeout(() => {
                    window.location.reload(true);
                }, 2000);
            }
        }
    }
}

// Initialize auto-update service
if (typeof window !== 'undefined') {
    window.rhythmAutoUpdate = new RhythmAutoUpdate();
}
