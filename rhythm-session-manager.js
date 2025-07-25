/**
 * Rhythm Boduberu Session Manager
 * Handles authentication and session state across all pages
 */

class RhythmSessionManager {
  constructor() {
    this.CONFIG = {
      SESSION_TIMEOUT: 15 * 60 * 1000, // 15 minutes (only when page is hidden)
      PIN_MAX_ATTEMPTS: 5,
      LOCKOUT_DURATION: 60 * 60 * 1000, // 1 hour
      PIN_AUTH: 'ODc2NQ==', // Encoded PIN
    };
    
    this.state = {
      isAuthenticated: false,
      sessionTimer: null,
      lastActivityTime: Date.now(),
      isPageVisible: true,
      isPageFocused: true,
      backgroundTimeoutId: null,
      attemptCount: 0,
      lockoutTimer: null,
    };
    
    this.elements = {};
    this.listeners = new Map();
    
    this.init();
  }
  
  init() {
    this.setupVisibilityTracking();
    this.setupActivityTracking();
    this.setupFocusTracking();
    this.restoreAttemptCount();
    this.checkInitialSession();
  }
  
  setupVisibilityTracking() {
    document.addEventListener('visibilitychange', () => {
      this.state.isPageVisible = !document.hidden;
      
      if (this.state.isPageVisible) {
        this.refreshSession();
        this.clearBackgroundTimeout();
      } else {
        if (this.state.isAuthenticated) {
          this.startBackgroundTimeout();
        }
      }
    });
  }
  
  setupActivityTracking() {
    const activityEvents = ['click', 'keydown', 'scroll', 'touchstart', 'mousemove', 'touchmove'];
    activityEvents.forEach(event => {
      document.addEventListener(event, () => this.updateLastActivity(), { passive: true });
    });
  }
  
  setupFocusTracking() {
    window.addEventListener('focus', () => {
      this.state.isPageFocused = true;
      this.refreshSession();
    });
    
    window.addEventListener('blur', () => {
      this.state.isPageFocused = false;
    });
  }
  
  updateLastActivity() {
    this.state.lastActivityTime = Date.now();
    
    if (this.state.isPageVisible && this.state.isPageFocused && this.state.isAuthenticated) {
      this.refreshSession();
    }
  }
  
  refreshSession() {
    this.clearSessionTimeout();
    this.clearBackgroundTimeout();
    
    if (this.state.isAuthenticated) {
      this.updateSessionStorage();
    }
  }
  
  startBackgroundTimeout() {
    this.clearBackgroundTimeout();
    
    if (!this.state.isPageVisible && this.state.isAuthenticated) {
      this.state.backgroundTimeoutId = setTimeout(() => {
        this.expireSession();
      }, this.CONFIG.SESSION_TIMEOUT);
    }
  }
  
  clearBackgroundTimeout() {
    if (this.state.backgroundTimeoutId) {
      clearTimeout(this.state.backgroundTimeoutId);
      this.state.backgroundTimeoutId = null;
    }
  }
  
  clearSessionTimeout() {
    if (this.state.sessionTimer) {
      clearTimeout(this.state.sessionTimer);
      this.state.sessionTimer = null;
    }
  }
  
  updateSessionStorage() {
    const sessionData = {
      timestamp: Date.now(),
      authenticated: true,
      sessionType: 'rhythm',
      lastActivity: this.state.lastActivityTime,
      pageType: this.getPageType()
    };
    sessionStorage.setItem('pinSession', JSON.stringify(sessionData));
    
    // Also update localStorage for cross-tab communication
    localStorage.setItem('rhythmSessionUpdate', Date.now().toString());
  }
  
  getPageType() {
    const path = window.location.pathname;
    if (path.includes('songlist')) return 'songlist';
    if (path.includes('lyrics')) return 'lyrics';
    return 'unknown';
  }
  
  checkInitialSession() {
    const sessionData = sessionStorage.getItem('pinSession');
    if (!sessionData) return false;
    
    try {
      const session = JSON.parse(sessionData);
      const sessionAge = Date.now() - session.timestamp;
      
      if (session.authenticated && sessionAge < this.CONFIG.SESSION_TIMEOUT * 2) {
        this.state.isAuthenticated = true;
        this.refreshSession();
        this.emit('sessionRestored', session);
        return true;
      }
    } catch (e) {
      sessionStorage.removeItem('pinSession');
    }
    
    return false;
  }
  
  async authenticateWithPin(pin) {
    if (this.isLockedOut()) {
      throw new Error('Account is locked. Please wait.');
    }
    
    const enteredPinArray = pin.split('').map(Number);
    const actualPinConfig = this.decodePinConfig(this.CONFIG.PIN_AUTH);
    
    const basicMatch = enteredPinArray.every((digit, index) => 
      digit === actualPinConfig[index]
    );
    
    const structureValid = this.validatePinStructure(enteredPinArray);
    
    if (basicMatch && structureValid) {
      // Correct PIN
      this.state.isAuthenticated = true;
      this.state.attemptCount = 0;
      localStorage.removeItem('pinAttemptCount');
      
      this.refreshSession();
      this.emit('authenticationSuccess');
      
      return true;
    } else {
      // Incorrect PIN
      this.state.attemptCount++;
      localStorage.setItem('pinAttemptCount', this.state.attemptCount.toString());
      
      if (this.state.attemptCount >= this.CONFIG.PIN_MAX_ATTEMPTS) {
        this.startLockout();
        throw new Error('Too many attempts. Account locked.');
      } else {
        const remainingAttempts = this.CONFIG.PIN_MAX_ATTEMPTS - this.state.attemptCount;
        throw new Error(`Incorrect PIN. ${remainingAttempts} attempts remaining.`);
      }
    }
  }
  
  decodePinConfig(encoded) {
    try {
      const decoded = atob(encoded);
      const reversed = decoded.split('').reverse().join('');
      return reversed.split('').map(Number);
    } catch (e) {
      return [8, 7, 6, 5]; // Fallback PIN
    }
  }
  
  validatePinStructure(pin) {
    const actualPin = this.decodePinConfig(this.CONFIG.PIN_AUTH);
    const checksum = pin.reduce((sum, digit) => sum + digit, 0);
    const expectedChecksum = actualPin.reduce((sum, digit) => sum + digit, 0);
    return checksum === expectedChecksum;
  }
  
  isLockedOut() {
    const lockoutEnd = localStorage.getItem('pinLockoutEnd');
    return lockoutEnd && Date.now() < parseInt(lockoutEnd);
  }
  
  getLockoutTimeRemaining() {
    const lockoutEnd = localStorage.getItem('pinLockoutEnd');
    if (!lockoutEnd) return 0;
    
    const timeLeft = parseInt(lockoutEnd) - Date.now();
    return Math.max(0, timeLeft);
  }
  
  startLockout() {
    const lockoutEnd = Date.now() + this.CONFIG.LOCKOUT_DURATION;
    localStorage.setItem('pinLockoutEnd', lockoutEnd.toString());
    localStorage.setItem('pinAttemptCount', this.state.attemptCount.toString());
    
    this.emit('lockoutStarted', lockoutEnd);
    this.startLockoutTimer(lockoutEnd);
  }
  
  startLockoutTimer(lockoutEnd) {
    const updateLockoutDisplay = () => {
      const timeLeft = lockoutEnd - Date.now();
      if (timeLeft <= 0) {
        this.clearLockout();
        return;
      }
      
      const minutes = Math.floor(timeLeft / 60000);
      const seconds = Math.floor((timeLeft % 60000) / 1000);
      this.emit('lockoutUpdate', { minutes, seconds, timeLeft });
    };
    
    updateLockoutDisplay();
    this.state.lockoutTimer = setInterval(updateLockoutDisplay, 1000);
  }
  
  clearLockout() {
    if (this.state.lockoutTimer) {
      clearInterval(this.state.lockoutTimer);
      this.state.lockoutTimer = null;
    }
    
    localStorage.removeItem('pinLockoutEnd');
    localStorage.removeItem('pinAttemptCount');
    this.state.attemptCount = 0;
    
    this.emit('lockoutCleared');
  }
  
  restoreAttemptCount() {
    const savedAttempts = localStorage.getItem('pinAttemptCount');
    if (savedAttempts) {
      this.state.attemptCount = parseInt(savedAttempts);
    }
    
    // Check if currently locked out
    if (this.isLockedOut()) {
      const lockoutEnd = parseInt(localStorage.getItem('pinLockoutEnd'));
      this.startLockoutTimer(lockoutEnd);
    }
  }
  
  expireSession() {
    this.state.isAuthenticated = false;
    sessionStorage.removeItem('pinSession');
    
    this.clearSessionTimeout();
    this.clearBackgroundTimeout();
    
    this.emit('sessionExpired');
  }
  
  logout() {
    this.expireSession();
    this.emit('logout');
  }
  
  isAuthenticated() {
    return this.state.isAuthenticated;
  }
  
  // Event system
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }
  
  off(event, callback) {
    if (this.listeners.has(event)) {
      const callbacks = this.listeners.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }
  
  emit(event, ...args) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => {
        try {
          callback(...args);
        } catch (error) {
          console.error('Error in session event listener:', error);
        }
      });
    }
  }
}

// Create global instance
window.RhythmSession = new RhythmSessionManager();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RhythmSessionManager;
}
