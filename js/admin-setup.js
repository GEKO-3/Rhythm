// Admin User Setup Script
// This script helps you create admin users in Firebase Database

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

class AdminUserSetup {
  constructor() {
    this.init();
  }

  init() {
    const firebaseConfig = {
      apiKey: "AIzaSyBM1r1pVGc3QVmKzQOWPJkD9N87FTEnhus",
      authDomain: "rhythm-ea7a1.firebaseapp.com",
      databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "rhythm-ea7a1",
      storageBucket: "rhythm-ea7a1.firebasestorage.app",
      messagingSenderId: "776053739080",
      appId: "1:776053739080:web:bfaf1a208b117faf94927d"
    };

    const app = initializeApp(firebaseConfig);
    this.database = getDatabase(app);
  }

  async createAdminUser(userId, userData) {
    try {
      const userRef = ref(this.database, `users/${userId}`);
      await set(userRef, {
        role: 'admin',
        active: true,
        email: userData.email,
        name: userData.name,
        createdAt: Date.now(),
        permissions: [
          'admin_panel_access',
          'member_management',
          'song_management',
          'lyrics_editing',
          'show_list_generation',
          'application_management',
          'sponsor_management'
        ],
        ...userData
      });
      console.log(`Admin user ${userData.email} created successfully`);
      return true;
    } catch (error) {
      console.error('Error creating admin user:', error);
      return false;
    }
  }

  // Example usage
  async setupDefaultAdmins() {
    // You can add default admin users here
    const defaultAdmins = [
      {
        email: 'admin@rhythmboduberu.com',
        name: 'System Administrator',
        userId: 'admin_001'
      },
      {
        email: 'manager@rhythmboduberu.com', 
        name: 'Manager',
        userId: 'admin_002'
      }
    ];

    for (const admin of defaultAdmins) {
      await this.createAdminUser(admin.userId, {
        email: admin.email,
        name: admin.name
      });
    }
  }
}

// Usage
window.AdminUserSetup = AdminUserSetup;

// Auto-setup when script loads
document.addEventListener('DOMContentLoaded', () => {
  const setup = new AdminUserSetup();
  // Uncomment the line below to automatically create default admin users
  // setup.setupDefaultAdmins();
});

export default AdminUserSetup;
