// PWA Installation Handler
let deferredPrompt;
let installButton;

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Update UI to show install button
  showInstallPromotion();
});

// Show install button/banner
function showInstallPromotion() {
  // Check if install button exists
  installButton = document.getElementById('install-app-btn');
  if (installButton) {
    installButton.style.display = 'block';
    installButton.addEventListener('click', installApp);
  } else {
    // Create floating install button if doesn't exist
    createFloatingInstallButton();
  }
}

// Create a floating install button
function createFloatingInstallButton() {
  // Don't show if already installed or dismissed
  if (window.matchMedia('(display-mode: standalone)').matches || 
      localStorage.getItem('pwa-install-dismissed') === 'true') {
    return;
  }

  const installBanner = document.createElement('div');
  installBanner.id = 'pwa-install-banner';
  installBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #f5d000 0%, #e0a800 100%);
      color: #000;
      padding: 15px 25px;
      border-radius: 50px;
      box-shadow: 0 4px 20px rgba(245, 208, 0, 0.4);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 15px;
      font-family: 'Montserrat', sans-serif;
      animation: slideUp 0.3s ease-out;
    ">
      <span style="font-weight: 600; font-size: 14px;">📱 Install Rhythm App</span>
      <button id="pwa-install-btn" style="
        background: #000;
        color: #f5d000;
        border: none;
        padding: 8px 20px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        font-size: 13px;
      ">Install</button>
      <button id="pwa-dismiss-btn" style="
        background: transparent;
        color: #000;
        border: none;
        padding: 5px;
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
      ">×</button>
    </div>
  `;

  // Add animation keyframes
  if (!document.getElementById('pwa-animations')) {
    const style = document.createElement('style');
    style.id = 'pwa-animations';
    style.textContent = `
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(installBanner);

  // Add event listeners
  document.getElementById('pwa-install-btn').addEventListener('click', installApp);
  document.getElementById('pwa-dismiss-btn').addEventListener('click', () => {
    installBanner.remove();
    localStorage.setItem('pwa-install-dismissed', 'true');
    // Reset after 7 days
    setTimeout(() => {
      localStorage.removeItem('pwa-install-dismissed');
    }, 7 * 24 * 60 * 60 * 1000);
  });
}

// Install the PWA
async function installApp() {
  if (!deferredPrompt) {
    return;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  console.log(`User response to the install prompt: ${outcome}`);

  if (outcome === 'accepted') {
    console.log('User accepted the install prompt');
    // Remove install button
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.remove();
    if (installButton) installButton.style.display = 'none';
  }

  // Clear the deferredPrompt
  deferredPrompt = null;
}

// Detect if app is already installed
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  // Hide install button
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.remove();
  if (installButton) installButton.style.display = 'none';
  
  // Show thank you message
  if (window.location.pathname === '/login.html' || window.location.pathname === '/') {
    setTimeout(() => {
      alert('✅ Rhythm app installed successfully! You can now access it from your home screen.');
    }, 1000);
  }
});

// Check if running as installed PWA
if (window.matchMedia('(display-mode: standalone)').matches || 
    window.navigator.standalone === true) {
  console.log('Running as installed PWA');
  document.body.classList.add('pwa-installed');
  
  // Request notification permission if not already granted
  if ('Notification' in window && Notification.permission === 'default') {
    setTimeout(() => {
      requestNotificationPermission();
    }, 3000); // Wait 3 seconds after app opens
  }
}

// Request notification permission
async function requestNotificationPermission() {
  try {
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted');
      
      // Subscribe to push notifications if Firebase messaging is available
      if (window.messaging) {
        try {
          const currentToken = await window.messaging.getToken({
            vapidKey: 'YOUR_VAPID_KEY' // Will be set when FCM is configured
          });
          
          if (currentToken) {
            console.log('FCM Token:', currentToken);
            // Send token to server
            if (window.rhythmNotifications && window.rhythmNotifications.saveToken) {
              await window.rhythmNotifications.saveToken(currentToken);
            }
          }
        } catch (error) {
          console.log('Error getting FCM token:', error);
        }
      }
    } else {
      console.log('Notification permission denied');
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.pwaInstall = {
    requestInstall: installApp,
    requestNotifications: requestNotificationPermission
  };
}
