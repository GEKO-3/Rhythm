// Cloudinary configuration
const CLOUDINARY_CONFIG = {
  cloudName: 'YOUR_CLOUD_NAME', // Replace with your Cloudinary cloud name
  baseUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME'
};

/**
 * Get Cloudinary URL for an image with transformations
 * @param {string} publicId - The public ID of the image (path without extension)
 * @param {object} options - Transformation options
 * @returns {string} - Optimized Cloudinary URL
 */
function getCloudinaryUrl(publicId, options = {}) {
  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    folder = 'rhythm',
    gravity = 'auto'
  } = options;
  
  let transformations = [
    `q_${quality}`,
    `f_${format}`
  ];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (gravity) transformations.push(`g_${gravity}`);
  
  const transformation = transformations.join(',');
  const fullPath = folder ? `${folder}/${publicId}` : publicId;
  
  return `${CLOUDINARY_CONFIG.baseUrl}/image/upload/${transformation}/${fullPath}`;
}

/**
 * Get Cloudinary video URL with transformations
 * @param {string} publicId - The public ID of the video
 * @param {object} options - Transformation options
 * @returns {string} - Optimized Cloudinary video URL
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
  const fullPath = folder ? `${folder}/${publicId}` : publicId;
  
  return `${CLOUDINARY_CONFIG.baseUrl}/video/upload/${transformation}/${fullPath}`;
}

/**
 * Upload image to Cloudinary from client-side
 * @param {File} file - The file object to upload
 * @param {string} folder - Target folder in Cloudinary
 * @returns {Promise<string>} - URL of uploaded image
 */
async function uploadToCloudinary(file, folder = 'rhythm/inventory') {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'rhythm_uploads'); // Create this preset in Cloudinary dashboard
  formData.append('folder', folder);
  
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    );
    
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

/**
 * Generate responsive image srcset for different screen sizes
 * @param {string} publicId - The public ID of the image
 * @param {object} options - Base transformation options
 * @returns {string} - srcset attribute value
 */
function getResponsiveSrcset(publicId, options = {}) {
  const widths = [320, 640, 768, 1024, 1280, 1920];
  const folder = options.folder || 'rhythm';
  
  return widths.map(width => {
    const url = getCloudinaryUrl(publicId, { ...options, width, folder });
    return `${url} ${width}w`;
  }).join(', ');
}

/**
 * Generate favicon URLs for all sizes
 * @param {string} faviconName - Name of the favicon file (without extension)
 * @returns {object} - Object with URLs for different sizes
 */
function getFaviconUrls(faviconName) {
  return {
    favicon16: getCloudinaryUrl(`favicons/${faviconName}`, { width: 16, height: 16 }),
    favicon32: getCloudinaryUrl(`favicons/${faviconName}`, { width: 32, height: 32 }),
    favicon180: getCloudinaryUrl(`favicons/${faviconName}`, { width: 180, height: 180 }),
    favicon192: getCloudinaryUrl(`favicons/${faviconName}`, { width: 192, height: 192 }),
    favicon512: getCloudinaryUrl(`favicons/${faviconName}`, { width: 512, height: 512 })
  };
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CLOUDINARY_CONFIG,
    getCloudinaryUrl,
    getCloudinaryVideoUrl,
    uploadToCloudinary,
    getResponsiveSrcset,
    getFaviconUrls
  };
}
