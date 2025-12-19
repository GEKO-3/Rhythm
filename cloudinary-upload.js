const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary - REPLACE WITH YOUR CREDENTIALS
cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

/**
 * Upload a directory of files to Cloudinary
 */
async function uploadDirectory(dirPath, folderName) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  console.log(`\n📁 Uploading from: ${dirPath}`);
  console.log(`📂 Target folder: rhythm/${folderName}\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively upload subdirectories
      await uploadDirectory(filePath, `${folderName}/${file}`);
      continue;
    }
    
    if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|mov)$/i.test(file)) {
      try {
        const publicId = path.parse(file).name;
        const isVideo = /\.(mp4|webm|mov)$/i.test(file);
        
        const result = await cloudinary.uploader.upload(filePath, {
          folder: `rhythm/${folderName}`,
          public_id: publicId,
          resource_type: isVideo ? 'video' : 'image',
          overwrite: false,
          unique_filename: false
        });
        
        console.log(`✅ ${file}`);
        console.log(`   URL: ${result.secure_url}\n`);
        successCount++;
        
      } catch (error) {
        console.error(`❌ ${file}: ${error.message}\n`);
        failCount++;
      }
    }
  }
  
  return { successCount, failCount };
}

/**
 * Main upload function
 */
async function uploadAllMedia() {
  console.log('🚀 Starting Cloudinary Media Upload\n');
  console.log('=' .repeat(50));
  
  let totalSuccess = 0;
  let totalFail = 0;
  
  // Upload favicons
  const favicons = await uploadDirectory('./assets/favicons', 'favicons');
  if (favicons) {
    totalSuccess += favicons.successCount;
    totalFail += favicons.failCount;
  }
  
  // Upload fonts (if you want to host them on Cloudinary)
  // const fonts = await uploadDirectory('./assets/Fonts', 'fonts');
  // if (fonts) {
  //   totalSuccess += fonts.successCount;
  //   totalFail += fonts.failCount;
  // }
  
  // Add more directories as needed
  // Examples:
  // await uploadDirectory('./assets/images', 'images');
  // await uploadDirectory('./assets/videos', 'videos');
  
  console.log('=' .repeat(50));
  console.log('\n📊 Upload Summary:');
  console.log(`✅ Successful: ${totalSuccess}`);
  console.log(`❌ Failed: ${totalFail}`);
  console.log(`📈 Total: ${totalSuccess + totalFail}\n`);
  
  if (totalSuccess > 0) {
    console.log('🎉 Upload complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Update js/cloudinary-helper.js with your cloud name');
    console.log('2. Create upload preset "rhythm_uploads" in Cloudinary dashboard');
    console.log('3. Update HTML/JS files to use Cloudinary URLs');
    console.log('4. Test all images load correctly');
    console.log('5. Deploy to Firebase Hosting\n');
  }
}

// Run the upload
uploadAllMedia().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
