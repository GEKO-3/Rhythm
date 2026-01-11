/**
 * Firebase Rules Validation Script
 * Test this in your browser console to check if rules will work
 */

async function validateFirebaseRules() {
    console.log('🧪 Testing Firebase Rules Compatibility...');
    
    try {
        // Test 1: Songs read access (should work)
        console.log('1️⃣ Testing songs read access...');
        if (window.rhythmAuth && window.rhythmAuth.database) {
            const songsRef = window.rhythmAuth.database.ref('songs').limitToFirst(1);
            const songsSnapshot = await songsRef.once('value');
            console.log('✅ Songs read access: WORKING');
        } else {
            console.log('❓ Firebase not initialized yet');
        }
        
        // Test 2: Members read access (should work)
        console.log('2️⃣ Testing members read access...');
        if (window.rhythmAuth && window.rhythmAuth.database) {
            const membersRef = window.rhythmAuth.database.ref('members').limitToFirst(1);
            const membersSnapshot = await membersRef.once('value');
            console.log('✅ Members read access: WORKING');
        }
        
        // Test 3: songsMetadata read access (should work)
        console.log('3️⃣ Testing songsMetadata read access...');
        if (window.rhythmAuth && window.rhythmAuth.database) {
            const metadataRef = window.rhythmAuth.database.ref('songsMetadata').limitToFirst(1);
            const metadataSnapshot = await metadataRef.once('value');
            console.log('✅ SongsMetadata read access: WORKING');
        }
        
        console.log('🎉 All critical read operations should work with new rules!');
        
        // Warning about write operations
        console.log('⚠️ WARNING: Write operations will be restricted after applying rules');
        console.log('📝 Use Firebase Console or Admin SDK for data updates');
        
    } catch (error) {
        console.error('❌ Rules validation failed:', error);
        console.log('🔧 You may need to adjust the rules or check your implementation');
    }
}

// Auto-run if Firebase is ready
if (window.rhythmAuth && window.rhythmAuth.isInitialized) {
    validateFirebaseRules();
} else {
    console.log('⏳ Waiting for Firebase to initialize...');
    // Try again in 2 seconds
    setTimeout(() => {
        if (window.rhythmAuth && window.rhythmAuth.isInitialized) {
            validateFirebaseRules();
        } else {
            console.log('❌ Firebase not ready. Run validateFirebaseRules() manually after initialization.');
        }
    }, 2000);
}