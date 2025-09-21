// Member Management System for Rhythm Boduberu
// Uses Firebase Realtime Database directly with existing authentication system

class MembersData {
    constructor() {
        this.database = null;
        this.membersRef = null;
        this.membersCache = new Map();
        this.isFirebaseReady = false;
        
        this.initializeDatabase();
    }

    async initializeDatabase() {
        try {
            // Firebase configuration (same as auth system)
            const firebaseConfig = {
                apiKey: "AIzaSyBM1r1pVGc3QVmKzQOWPJkD9N87FTEnhus",
                authDomain: "rhythm-ea7a1.firebaseapp.com",
                databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app",
                projectId: "rhythm-ea7a1",
                storageBucket: "rhythm-ea7a1.firebasestorage.app",
                messagingSenderId: "776053739080",
                appId: "1:776053739080:web:bfaf1a208b117faf94927d"
            };

            // Check if Firebase is already initialized (by auth system)
            if (window.firebase && window.firebase.database) {
                this.database = window.firebase.database();
                this.membersRef = this.database.ref('members');
                
                // Create v9-style function wrappers for v8 Firebase
                this.firebaseFunctions = {
                    ref: (db, path) => db.ref(path),
                    set: (ref, data) => ref.set(data),
                    get: (ref) => ref.once('value'),
                    update: (ref, data) => ref.update(data),
                    remove: (ref) => ref.remove(),
                    push: (ref, data) => ref.push(data),
                    onValue: (ref, callback) => ref.on('value', callback)
                };
                
                this.isFirebaseReady = true;
                console.log('✅ Members Firebase Database connected to existing instance with v8 wrappers');
            } else {
                // Initialize Firebase using ES6 modules
                const { initializeApp } = await import('https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js');
                const { getDatabase, ref, set, get, update, remove, push, onValue } = await import('https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js');
                
                const app = initializeApp(firebaseConfig);
                this.database = getDatabase(app);
                this.membersRef = ref(this.database, 'members');
                
                // Store Firebase functions for use
                this.firebaseFunctions = { ref, set, get, update, remove, push, onValue };
                this.isFirebaseReady = true;
                console.log('✅ Members Firebase Database initialized with ES6 modules');
            }
            
            // Initialize with sample data if database is empty
            await this.initializeSampleDataIfNeeded();
            
        } catch (error) {
            console.error('❌ Error initializing Members Firebase:', error);
            throw new Error('Failed to connect to Firebase. Please check your connection.');
        }
    }

    // Initialize sample data only if the database is empty
    async initializeSampleDataIfNeeded() {
        try {
            // Use unified interface regardless of Firebase version
            const snapshot = await this.firebaseFunctions.get(this.membersRef);
            if (!snapshot.exists()) {
                console.log('📦 Initializing sample member data in Firebase...');
                await this.createSampleData();
            }
        } catch (error) {
            console.error('Error checking/initializing sample data:', error);
        }
    }

    async createSampleData() {
        const sampleMembers = {
            "member_001": {
                fullName: "Ali Shamrooh",
                photo: "src/Logo.png",
                photoPath: "src/Logo.png", // Add both for compatibility
                rhythmIndexNumber: "RHY001",
                residence: "Male', Maldives",
                role: "Lead Vocalist",
                dateOfBirth: "1995-05-15",
                contactNumber: "+960 7123456",
                userId: null,
                hasAppAccess: false,
                memberSince: "2020-01-15",
                joinDate: "2020-01-15", // Add both for compatibility
                status: "active",
                biography: "Lead vocalist and founding member of Rhythm Boduberu group."
            },
            "member_002": {
                fullName: "Mohamed Nibras",
                photo: "src/Logo.png",
                photoPath: "src/Logo.png",
                rhythmIndexNumber: "RHY002",
                residence: "Male', Maldives",
                role: "Lead Drummer",
                dateOfBirth: "1992-08-22",
                contactNumber: "+960 7234567",
                userId: "user_authenticated_001",
                hasAppAccess: true,
                memberSince: "2020-01-15",
                joinDate: "2020-01-15",
                status: "active",
                biography: "Master drummer with extensive boduberu experience."
            },
            "member_003": {
                fullName: "Adam Shimrah",
                photo: "src/Logo.png",
                photoPath: "src/Logo.png",
                rhythmIndexNumber: "RHY003",
                residence: "Hulhumale', Maldives",
                role: "Drummer",
                dateOfBirth: "1998-03-10",
                contactNumber: "+960 7345678",
                userId: null,
                hasAppAccess: false,
                memberSince: "2020-02-01",
                joinDate: "2020-02-01",
                status: "active",
                biography: "Talented drummer and traditional instrument player."
            }
        };

        try {
            // Use unified interface
            await this.firebaseFunctions.set(this.membersRef, sampleMembers);
            console.log('✅ Sample member data created in Firebase');
        } catch (error) {
            console.error('❌ Error creating sample data:', error);
        }
    }

    // Add new member to Firebase
    async addMember(memberData) {
        if (!this.isFirebaseReady) {
            throw new Error('Firebase is not ready');
        }

        try {
            const memberId = memberData.rhythmIndexNumber || `member_${Date.now()}`;
            const memberToSave = {
                ...memberData,
                id: memberId,
                lastUpdated: new Date().toISOString()
            };

            if (window.firebase && window.firebase.database) {
                await this.membersRef.child(memberId).set(memberToSave);
            } else {
                const memberRef = this.firebaseFunctions.ref(this.database, `members/${memberId}`);
                await this.firebaseFunctions.set(memberRef, memberToSave);
            }

            // Update cache
            this.membersCache.set(memberId, memberToSave);
            console.log('✅ Member added successfully:', memberId);
            return memberToSave;
        } catch (error) {
            console.error('❌ Error adding member:', error);
            throw error;
        }
    }

    // Save member (backward compatibility - handles both add and update)
    async saveMember(memberData) {
        if (memberData.id) {
            // Update existing member
            return await this.updateMember(memberData.id, memberData);
        } else {
            // Add new member
            return await this.addMember(memberData);
        }
    }

    // Get all members from Firebase
    async getAllMembers() {
        if (!this.isFirebaseReady) {
            throw new Error('Firebase is not ready');
        }

        try {
            // Use unified interface
            const snapshot = await this.firebaseFunctions.get(this.membersRef);

            const members = snapshot.val() || {};
            
            // Update cache
            this.membersCache.clear();
            Object.entries(members).forEach(([id, member]) => {
                this.membersCache.set(id, member);
            });

            return members;
        } catch (error) {
            console.error('❌ Error getting members:', error);
            throw error;
        }
    }

    // Get specific member by ID
    async getMember(memberId) {
        if (!this.isFirebaseReady) {
            throw new Error('Firebase is not ready');
        }

        try {
            // Check cache first
            if (this.membersCache.has(memberId)) {
                return this.membersCache.get(memberId);
            }

            let snapshot;
            if (window.firebase && window.firebase.database) {
                snapshot = await this.membersRef.child(memberId).once('value');
            } else {
                const memberRef = this.firebaseFunctions.ref(this.database, `members/${memberId}`);
                snapshot = await this.firebaseFunctions.get(memberRef);
            }

            const member = snapshot.val();
            if (member) {
                this.membersCache.set(memberId, member);
            }
            return member;
        } catch (error) {
            console.error('❌ Error getting member:', error);
            throw error;
        }
    }

    // Update member in Firebase
    async updateMember(memberId, updates) {
        if (!this.isFirebaseReady) {
            throw new Error('Firebase is not ready');
        }

        try {
            const updateData = {
                ...updates,
                lastUpdated: new Date().toISOString()
            };

            if (window.firebase && window.firebase.database) {
                await this.membersRef.child(memberId).update(updateData);
            } else {
                const memberRef = this.firebaseFunctions.ref(this.database, `members/${memberId}`);
                await this.firebaseFunctions.update(memberRef, updateData);
            }

            // Update cache
            if (this.membersCache.has(memberId)) {
                const currentMember = this.membersCache.get(memberId);
                this.membersCache.set(memberId, { ...currentMember, ...updateData });
            }

            console.log('✅ Member updated successfully:', memberId);
            return updateData;
        } catch (error) {
            console.error('❌ Error updating member:', error);
            throw error;
        }
    }

    // Delete member from Firebase
    async deleteMember(memberId) {
        if (!this.isFirebaseReady) {
            throw new Error('Firebase is not ready');
        }

        try {
            if (window.firebase && window.firebase.database) {
                await this.membersRef.child(memberId).remove();
            } else {
                const memberRef = this.firebaseFunctions.ref(this.database, `members/${memberId}`);
                await this.firebaseFunctions.remove(memberRef);
            }

            // Remove from cache
            this.membersCache.delete(memberId);
            console.log('✅ Member deleted successfully:', memberId);
        } catch (error) {
            console.error('❌ Error deleting member:', error);
            throw error;
        }
    }

    // Connect member to user account
    async connectMemberToUser(memberId, userId) {
        return await this.updateMember(memberId, {
            userId: userId,
            hasAppAccess: true
        });
    }

    // Disconnect member from user account
    async disconnectMemberFromUser(memberId) {
        return await this.updateMember(memberId, {
            userId: null,
            hasAppAccess: false
        });
    }

    // Get members with app access
    async getMembersWithAccess() {
        const allMembers = await this.getAllMembers();
        return Object.entries(allMembers)
            .filter(([id, member]) => member.hasAppAccess)
            .reduce((acc, [id, member]) => {
                acc[id] = member;
                return acc;
            }, {});
    }

    // Search members by name, role, or rhythm index
    async searchMembers(searchTerm) {
        const allMembers = await this.getAllMembers();
        const lowercaseSearch = searchTerm.toLowerCase();
        
        return Object.entries(allMembers)
            .filter(([id, member]) => {
                return member.fullName?.toLowerCase().includes(lowercaseSearch) ||
                       member.role?.toLowerCase().includes(lowercaseSearch) ||
                       member.rhythmIndexNumber?.toLowerCase().includes(lowercaseSearch);
            })
            .reduce((acc, [id, member]) => {
                acc[id] = member;
                return acc;
            }, {});
    }

    // Listen for real-time updates
    listenToMembers(callback) {
        if (!this.isFirebaseReady) {
            throw new Error('Firebase is not ready');
        }

        try {
            if (window.firebase && window.firebase.database) {
                this.membersRef.on('value', (snapshot) => {
                    const members = snapshot.val() || {};
                    callback(members);
                });
            } else {
                this.firebaseFunctions.onValue(this.membersRef, (snapshot) => {
                    const members = snapshot.val() || {};
                    callback(members);
                });
            }
        } catch (error) {
            console.error('❌ Error setting up member listener:', error);
        }
    }

    // Stop listening to updates
    stopListening() {
        if (this.membersRef && window.firebase && window.firebase.database) {
            this.membersRef.off();
        }
    }

    // Get user status from authentication database
    async getUserStatus(userId) {
        if (!userId || !this.isFirebaseReady) {
            return { status: 'no_access', message: 'No App Access' };
        }

        try {
            let userSnapshot;
            
            // Check approved users first
            if (window.firebase && window.firebase.database) {
                userSnapshot = await this.database.ref(`users/${userId}`).once('value');
            } else {
                const userRef = this.firebaseFunctions.ref(this.database, `users/${userId}`);
                userSnapshot = await this.firebaseFunctions.get(userRef);
            }

            const userData = userSnapshot.val();
            
            if (userData && userData.status === 'active') {
                // Check if admin
                const isAdmin = userData.role === 'admin' || 
                              userData.permissions?.includes('admin') ||
                              userData.isAdmin === true;
                
                if (isAdmin) {
                    return { status: 'admin', message: 'Admin Access' };
                } else {
                    return { status: 'user', message: 'App Access' };
                }
            } else if (userData && userData.status === 'revoked') {
                return { status: 'revoked', message: 'Access Revoked' };
            }

            // Check pending requests
            let pendingSnapshot;
            if (window.firebase && window.firebase.database) {
                pendingSnapshot = await this.database.ref('pending_requests').once('value');
            } else {
                const pendingRef = this.firebaseFunctions.ref(this.database, 'pending_requests');
                pendingSnapshot = await this.firebaseFunctions.get(pendingRef);
            }

            const pendingRequests = pendingSnapshot.val() || {};
            
            // Check if user has pending requests (stored as accessCode_deviceId)
            const hasPendingRequest = Object.keys(pendingRequests).some(key => 
                key.startsWith(userId + '_')
            );
            
            if (hasPendingRequest) {
                return { status: 'pending', message: 'Access Pending' };
            }

            // Check rejected requests
            let rejectedSnapshot;
            if (window.firebase && window.firebase.database) {
                rejectedSnapshot = await this.database.ref('rejected_requests').once('value');
            } else {
                const rejectedRef = this.firebaseFunctions.ref(this.database, 'rejected_requests');
                rejectedSnapshot = await this.firebaseFunctions.get(rejectedRef);
            }

            const rejectedRequests = rejectedSnapshot.val() || {};
            
            // Check if user has rejected requests
            const hasRejectedRequest = Object.keys(rejectedRequests).some(key => 
                key.startsWith(userId + '_')
            );
            
            if (hasRejectedRequest) {
                return { status: 'rejected', message: 'Access Rejected' };
            }

            // No matching ID found
            return { status: 'no_access', message: 'No App Access' };

        } catch (error) {
            console.error('Error checking user status:', error);
            return { status: 'error', message: 'Status Unknown' };
        }
    }

    // Get enhanced member with user status
    async getMemberWithUserStatus(memberId) {
        const member = await this.getMember(memberId);
        if (!member) return null;

        const userStatus = await this.getUserStatus(member.userId);
        return {
            ...member,
            userStatus: userStatus
        };
    }

    // Get all members with user status
    async getAllMembersWithUserStatus() {
        const members = await this.getAllMembers();
        const membersWithStatus = {};

        for (const [id, member] of Object.entries(members)) {
            const userStatus = await this.getUserStatus(member.userId);
            membersWithStatus[id] = {
                ...member,
                userStatus: userStatus
            };
        }

        return membersWithStatus;
    }
}

// Export for use in other files
window.MembersData = MembersData;

// Auto-initialize a global instance for backward compatibility
if (typeof window.membersData === 'undefined') {
    window.membersData = new MembersData();
}