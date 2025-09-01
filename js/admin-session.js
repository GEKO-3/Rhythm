// Firebase Admin Session Management
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

class AdminSession {
  constructor() {
    this.auth = getAuth();
    this.isAuthenticated = false;
    this.currentUser = null;
    this.init();
  }

  init() {
    // Listen for authentication state changes
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.isAuthenticated = true;
        this.updateSessionStorage();
      } else {
        this.currentUser = null;
        this.isAuthenticated = false;
        this.clearSessionStorage();
        this.redirectToLogin();
      }
    });
  }

  updateSessionStorage() {
    const sessionData = {
      timestamp: Date.now(),
      authenticated: true,
      sessionType: 'admin',
      userId: this.currentUser.uid,
      email: this.currentUser.email
    };
    sessionStorage.setItem('adminSession', JSON.stringify(sessionData));
  }

  clearSessionStorage() {
    sessionStorage.removeItem('adminSession');
    sessionStorage.removeItem('pinSession'); // Clear old PIN sessions
  }

  redirectToLogin() {
    // Only redirect if not already on admin login page
    if (!window.location.pathname.includes('admin.html')) {
      window.location.href = '../admin.html';
    }
  }

  // Check if user has valid session
  hasValidSession() {
    try {
      const sessionData = sessionStorage.getItem('adminSession');
      if (!sessionData) return false;

      const session = JSON.parse(sessionData);
      const sessionAge = Date.now() - session.timestamp;
      
      // Session valid for 24 hours (longer than PIN sessions)
      return session.authenticated && sessionAge < (24 * 60 * 60 * 1000);
    } catch (error) {
      console.error('Session validation error:', error);
      return false;
    }
  }

  // Refresh session timestamp
  refreshSession() {
    if (this.isAuthenticated && this.currentUser) {
      this.updateSessionStorage();
    }
  }

  // Sign out
  async signOut() {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }
}

// Create global instance
const adminSession = new AdminSession();

// Make it globally available
window.adminSession = adminSession;

export default adminSession;