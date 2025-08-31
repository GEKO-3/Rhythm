// Rhythm Authentication System
class RhythmAuth {
    constructor() {
        this.isInitialized = false;
        this.userData = null;
        this.init();
    }

    async init() {
        try {
            // Check for stored authentication
            const storedAuth = localStorage.getItem('rhythmAuth_approval');
            if (storedAuth) {
                this.userData = JSON.parse(storedAuth);
                this.isInitialized = true;
            }
        } catch (error) {
            console.error('Auth initialization error:', error);
        }
    }

    hasPermission(resource) {
        if (!this.userData || !this.userData.approved) {
            return false;
        }

        if (this.userData.permissions && Array.isArray(this.userData.permissions)) {
            return this.userData.permissions.includes(resource);
        }

        return false;
    }

    onAuthenticationSuccess(user) {
        // Show welcome message
        this.showWelcomeMessage(user);
        
        // Logout button functionality removed as requested
        // this.addLogoutButton(user);
        
        console.log('User authenticated:', user);
    }

    showWelcomeMessage(user) {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #f5d000, #ffd700);
            color: #333;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-family: 'Montserrat', Arial, sans-serif;
            font-weight: 600;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        welcomeDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.2em;">🎵</span>
                <div>
                    <div style="font-size: 0.9rem; margin-bottom: 2px;">Welcome!</div>
                    <div style="font-size: 0.8rem; opacity: 0.8;">${user.name || 'User'}</div>
                </div>
            </div>
        `;

        document.body.appendChild(welcomeDiv);
        
        // Slide in
        setTimeout(() => {
            welcomeDiv.style.transform = 'translateX(0)';
        }, 100);
        
        // Slide out after 3 seconds
        setTimeout(() => {
            welcomeDiv.style.transform = 'translateX(100%)';
            setTimeout(() => {
                welcomeDiv.remove();
            }, 300);
        }, 3000);
    }

    logout() {
        localStorage.removeItem('rhythmAuth_approval');
        this.userData = null;
        this.isInitialized = false;
        
        // Redirect to login page
        window.location.href = 'login.html';
    }
}

// Initialize global instance
window.RhythmAuth = RhythmAuth;
window.rhythmAuth = new RhythmAuth();
