# Firebase Hosting Deployment Guide

## Prerequisites
1. Firebase CLI installed: `npm install -g firebase-tools`
2. Cloudinary account set up
3. Custom domain `rhythmboduberu.com` access

## Step 1: Initialize Firebase Hosting

```bash
# Login to Firebase
firebase login

# Initialize hosting (if not already done)
firebase init hosting
```

When prompted:
- Select your Firebase project: `rhythm-ea7a1`
- Public directory: `.` (current directory)
- Configure as single-page app: `No`
- Set up automatic builds: `No`
- Overwrite existing files: `No`

## Step 2: Deploy to Firebase Hosting

```bash
# Deploy everything
firebase deploy

# Or deploy only hosting
firebase deploy --only hosting
```

## Step 3: Set Up Custom Domain

### Option A: Using Firebase Console (Recommended)
1. Go to Firebase Console: https://console.firebase.google.com
2. Select your project: `rhythm-ea7a1`
3. Go to **Hosting** → **Custom domains**
4. Click **Add custom domain**
5. Enter: `rhythmboduberu.com`
6. Follow the verification steps:
   - Add TXT record to your domain DNS
   - Add A records provided by Firebase

### Option B: Using Firebase CLI

```bash
firebase hosting:channel:deploy live
```

### DNS Records for rhythmboduberu.com
Add these records in your domain registrar:

**A Records (for apex domain):**
```
Type: A
Name: @
Value: 151.101.1.195
Value: 151.101.65.195
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Value: rhythmboduberu.com
```

**TXT Record (for verification):**
```
Type: TXT
Name: @
Value: [Will be provided by Firebase Console]
```

## Step 4: Remove GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Set source to **None**
4. Delete the `CNAME` file or update it:

```bash
# Update CNAME for Firebase custom domain
echo "rhythmboduberu.com" > CNAME
```

## Step 5: Update Service Worker & PWA

Update `sw.js` and `firebase-messaging-sw.js` to handle Firebase Hosting URLs:

```javascript
const CACHE_NAME = 'rhythm-v1.0.0';
const HOSTNAME = 'rhythmboduberu.com';
```

## Step 6: Verify Deployment

After deployment, test:
- Main site: https://rhythm-ea7a1.web.app (Firebase default)
- Custom domain: https://rhythmboduberu.com (after DNS propagation)

DNS propagation can take 24-48 hours.

## Deployment Commands

```bash
# Full deployment
firebase deploy

# Hosting only
firebase deploy --only hosting

# Database rules only
firebase deploy --only database

# Storage rules only
firebase deploy --only storage

# Preview before deploying
firebase hosting:channel:deploy preview
```

## Rollback if Needed

```bash
# List previous releases
firebase hosting:clone --only

# Rollback to previous version
firebase hosting:rollback
```

## Monitoring

View hosting analytics:
```bash
firebase hosting:channel:list
```

Or check Firebase Console:
- Hosting → Usage
- View bandwidth, requests, and storage

## Troubleshooting

**Issue: DNS not propagating**
- Check DNS propagation: https://dnschecker.org
- Verify A and TXT records are correct
- Wait 24-48 hours for full propagation

**Issue: SSL certificate pending**
- Firebase auto-provisions SSL certificates
- Can take 24 hours after DNS verification
- Certificate auto-renews

**Issue: 404 errors**
- Check `firebase.json` rewrites configuration
- Ensure all paths are correct
- Redeploy: `firebase deploy --only hosting`

## Custom Domain Status Check

```bash
# Check domain status
firebase hosting:channel:list

# View domain configuration
firebase hosting:sites:list
```

## Cost Monitoring

Firebase Hosting Free Tier:
- 10 GB storage
- 360 MB/day bandwidth (~10.8 GB/month)
- Custom domain: Free
- SSL: Free

Monitor usage in Firebase Console → Usage and Billing
