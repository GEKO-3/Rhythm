# Cloudinary Setup Instructions

To enable payment receipt uploads, you need to create an unsigned upload preset in Cloudinary.

## Steps to Create Upload Preset

1. **Login to Cloudinary**
   - Go to [https://cloudinary.com/console](https://cloudinary.com/console)
   - Login with your account (Cloud name: `dgvde8x6e`)

2. **Navigate to Upload Settings**
   - Click on the **Settings** (gear icon) in the top right
   - Go to the **Upload** tab

3. **Create Upload Preset**
   - Scroll down to **Upload presets**
   - Click **Add upload preset**

4. **Configure the Preset**
   - **Preset name**: `ml_default` (or any name you prefer)
   - **Signing mode**: Select **Unsigned** ⚠️ Important!
   - **Folder**: `shirt_orders/receipts` (optional, for organization)
   - **Access mode**: `public`
   - **Allowed formats**: jpg, jpeg, png, gif, webp
   - Click **Save**

5. **Update Code (if you changed the preset name)**
   - If you used a different preset name, update line in `shirt-order.html`:
   ```javascript
   uploadPreset: 'your_preset_name_here',
   ```

## Payment System Features

✅ Bank account details displayed (7730000177589 - ADAM SHIMRAH)
✅ Image upload via Cloudinary widget
✅ Receipt preview after upload
✅ Receipt stored with order in Firebase
✅ Receipt viewable in admin panel
✅ Receipt URL included in CSV export

## Security Note

The upload preset is **unsigned** to allow public uploads without authentication. This is safe because:
- Only images are allowed
- Max file size: 5MB
- Images are stored in a specific folder
- No server-side code execution possible

## Testing

After setting up the preset:
1. Go to `/pages/shirt-order.html`
2. Fill out the order form
3. Click "Upload Payment Receipt"
4. Upload a test image
5. Submit the order
6. Check admin panel to verify receipt is viewable
