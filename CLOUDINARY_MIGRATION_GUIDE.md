# Cloudinary Media Migration Guide

## Overview
Migrate all images and videos from local hosting to Cloudinary to conserve Firebase bandwidth.

## Step 1: Cloudinary Setup

### Create Account
1. Sign up at: https://cloudinary.com
2. Free tier includes:
   - 25 GB storage
   - 25 GB bandwidth/month
   - Image/video transformations

### Get Credentials
From Cloudinary Dashboard:
- Cloud name: `your-cloud-name`
- API Key: `your-api-key`
- API Secret: `your-api-secret`

## Step 2: Install Cloudinary SDK (Optional)

For bulk uploads:
```bash
npm install cloudinary
```

## Step 3: Create Cloudinary Upload Script

Create `cloudinary-upload.js`:

```javascript
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

// Upload directory
async function uploadDirectory(dirPath, folderName) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && /\.(jpg|jpeg|png|gif|webp|svg|mp4|webm)$/i.test(file)) {
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: `rhythm/${folderName}`,
          public_id: path.parse(file).name,
          resource_type: 'auto',
          overwrite: false
        });
        console.log(`✅ Uploaded: ${file} -> ${result.secure_url}`);
      } catch (error) {
        console.error(`❌ Failed: ${file}`, error.message);
      }
    }
  }
}

// Upload all media
async function uploadAllMedia() {
  console.log('🚀 Starting Cloudinary upload...\n');
  
  // Upload favicons
  await uploadDirectory('./assets/favicons', 'favicons');
  
  // Upload fonts (if needed)
  // await uploadDirectory('./assets/Fonts', 'fonts');
  
  // Add other directories as needed
  
  console.log('\n✅ All uploads complete!');
}

uploadAllMedia();
```

## Step 4: Upload Media to Cloudinary

### Option A: Using Script
```bash
node cloudinary-upload.js
```

### Option B: Manual Upload via Dashboard
1. Go to Cloudinary Dashboard
2. Click **Media Library**
3. Create folders:
   - `rhythm/favicons`
   - `rhythm/fonts`
   - `rhythm/member-photos`
   - `rhythm/inventory`
4. Drag and drop files

## Step 5: Create Cloudinary Helper

Create `js/cloudinary-helper.js`:

```javascript
// Cloudinary configuration
const CLOUDINARY_CONFIG = {
  cloudName: 'YOUR_CLOUD_NAME',
  baseUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME'
};

/**
 * Get Cloudinary URL for an image
 * @param {string} publicId - The public ID of the image
 * @param {object} options - Transformation options
 * @returns {string} - Cloudinary URL
 */
function getCloudinaryUrl(publicId, options = {}) {
  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    folder = 'rhythm'
  } = options;
  
  let transformations = [
    `q_${quality}`,
    `f_${format}`
  ];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  
  const transformation = transformations.join(',');
  
  return `${CLOUDINARY_CONFIG.baseUrl}/image/upload/${transformation}/${folder}/${publicId}`;
}

/**
 * Get Cloudinary video URL
 * @param {string} publicId - The public ID of the video
 * @param {object} options - Transformation options
 * @returns {string} - Cloudinary video URL
 */
function getCloudinaryVideoUrl(publicId, options = {}) {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    folder = 'rhythm'
  } = options;
  
  let transformations = [`q_${quality}`, `f_${format}`];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  
  const transformation = transformations.join(',');
  
  return `${CLOUDINARY_CONFIG.baseUrl}/video/upload/${transformation}/${folder}/${publicId}`;
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getCloudinaryUrl, getCloudinaryVideoUrl };
}
```

## Step 6: Update Image References

### Example: Update Favicon References

**Before:**
```html
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicons/favicon-32x32.png">
```

**After:**
```html
<link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_32,h_32,c_fill,q_auto,f_auto/rhythm/favicons/favicon-32x32">
```

### Example: Dynamic Images in JavaScript

**Before:**
```javascript
const photoUrl = 'assets/photos/member.jpg';
```

**After:**
```javascript
import { getCloudinaryUrl } from './cloudinary-helper.js';
const photoUrl = getCloudinaryUrl('member-photos/member', { width: 200, height: 200 });
```

## Step 7: Update Inventory Photo Uploads

Modify `inventory.html` to upload directly to Cloudinary:

```javascript
// Add Cloudinary upload widget
async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Create in Cloudinary settings
  formData.append('folder', 'rhythm/inventory');
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`,
    {
      method: 'POST',
      body: formData
    }
  );
  
  const data = await response.json();
  return data.secure_url;
}
```

## Step 8: Create Upload Preset in Cloudinary

1. Go to Cloudinary Dashboard → Settings → Upload
2. Click **Add upload preset**
3. Configure:
   - Preset name: `rhythm_uploads`
   - Signing mode: **Unsigned** (for client-side uploads)
   - Folder: `rhythm/inventory`
   - Allowed formats: `jpg, png, gif, webp`
   - Max file size: 5 MB
4. Save preset

## Step 9: Image Optimization

Cloudinary automatically optimizes images. Use these transformations:

### Responsive Images
```javascript
// Thumbnail
getCloudinaryUrl('photo-id', { width: 150, height: 150, crop: 'thumb' });

// Full size
getCloudinaryUrl('photo-id', { width: 1200, quality: 'auto:best' });

// Mobile optimized
getCloudinaryUrl('photo-id', { width: 800, quality: 'auto:eco' });
```

### Image Formats
Cloudinary auto-selects best format:
- WebP for modern browsers
- JPEG for older browsers
- AVIF for cutting-edge browsers

Use `f_auto` parameter (already included in helper).

## Step 10: Migration Checklist

- [ ] Create Cloudinary account
- [ ] Upload all favicons to `rhythm/favicons`
- [ ] Upload member photos to `rhythm/member-photos`
- [ ] Upload inventory photos to `rhythm/inventory`
- [ ] Create upload preset for new uploads
- [ ] Update `cloudinary-helper.js` with your cloud name
- [ ] Update all HTML files to use Cloudinary URLs
- [ ] Update JavaScript to use Cloudinary helper
- [ ] Test all images load correctly
- [ ] Delete local image files (keep originals backed up)
- [ ] Update inventory upload to use Cloudinary
- [ ] Monitor Cloudinary usage in dashboard

## Step 11: Bandwidth Savings Estimate

**Current (Firebase Hosting):**
- Average image: 200 KB
- 1000 page views/month with 5 images each
- Bandwidth: 200 KB × 5 × 1000 = 1 GB/month

**After (Cloudinary):**
- Firebase bandwidth: ~100 MB (HTML/CSS/JS only)
- Cloudinary bandwidth: ~900 MB (images)
- Savings: 90% of Firebase bandwidth quota

## Cloudinary Features to Use

1. **Auto Format & Quality**: `f_auto,q_auto`
2. **Lazy Loading**: Add `loading="lazy"` to img tags
3. **Responsive Images**: Use srcset with different widths
4. **Video Optimization**: Convert to WebM/MP4 automatically
5. **Image Transformations**: Crop, resize, filters on-the-fly

## Testing

After migration:
```bash
# Check all images load
# Open browser dev tools → Network tab
# Verify images load from cloudinary.com
# Check for broken image links
```

## Cost Monitoring

Monitor Cloudinary usage:
- Dashboard → Reports → Usage
- Set up usage alerts
- Free tier: 25 GB bandwidth/month
- If exceeded, upgrade or optimize transformations

## Rollback Plan

Keep local images in a backup folder:
```bash
mkdir backup-images
cp -r assets/favicons backup-images/
cp -r assets/photos backup-images/
```

If issues occur, restore local images and revert changes.
