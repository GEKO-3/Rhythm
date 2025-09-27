/**
 * Firebase Admin Script for Production Updates
 * Use this script to update database when write rules are restricted
 * 
 * Setup:
 * 1. npm init -y
 * 2. npm install firebase-admin
 * 3. Get service account key from Firebase Console
 * 4. Update the serviceAccount path below
 */

const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
// Download service account key from Firebase Console > Project Settings > Service Accounts
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();

// Example: Update songs metadata
async function updateSongsMetadata(songsData) {
  try {
    console.log('🔄 Updating songs metadata...');
    await db.ref('songsMetadata').set(songsData);
    console.log('✅ Songs metadata updated successfully');
  } catch (error) {
    console.error('❌ Error updating songs metadata:', error);
  }
}

// Example: Update members database
async function updateMembersDatabase(membersData) {
  try {
    console.log('🔄 Updating members database...');
    await db.ref('members').set(membersData);
    console.log('✅ Members database updated successfully');
  } catch (error) {
    console.error('❌ Error updating members database:', error);
  }
}

// Example: Add new song
async function addNewSong(songId, songData) {
  try {
    console.log(`🔄 Adding new song: ${songId}...`);
    
    // Add to songs collection
    await db.ref(`songs/${songId}`).set(songData);
    
    // Add to songsMetadata for listing
    const metadata = {
      id: songData.id,
      title: songData.title,
      artist: songData.artist,
      form: songData.form || '',
      original: songData.original || false,
      trackId: songData.trackId,
      thumbnailUrl: songData.thumbnailUrl || ''
    };
    
    await db.ref(`songsMetadata/${songId}`).set(metadata);
    
    console.log(`✅ Song ${songId} added successfully`);
  } catch (error) {
    console.error(`❌ Error adding song ${songId}:`, error);
  }
}

// Example: Update version
async function updateVersion(versionInfo) {
  try {
    console.log('🔄 Updating version info...');
    await db.ref('version').set(versionInfo);
    console.log('✅ Version updated successfully');
  } catch (error) {
    console.error('❌ Error updating version:', error);
  }
}

// Example usage:
async function main() {
  console.log('🚀 Firebase Admin Script Started');
  
  // Example: Update version
  await updateVersion({
    current: "2.1.0",
    lastUpdated: new Date().toISOString(),
    changelog: "Updated to production Firebase rules"
  });
  
  // Add more operations as needed
  
  console.log('✅ All operations completed');
  process.exit(0);
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  updateSongsMetadata,
  updateMembersDatabase,
  addNewSong,
  updateVersion
};