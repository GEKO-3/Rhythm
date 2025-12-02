# Deploy Firebase Database Rules

The Firebase database rules have been updated to allow access to the shirt ordering system, but they need to be deployed to take effect.

## Quick Deploy (Firebase Console)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **rhythm-ea7a1**
3. Navigate to **Realtime Database** → **Rules**
4. Copy the entire contents of `firebase-database-rules.json`
5. Paste into the Rules editor
6. Click **Publish**

## What's Been Added

The following database paths now have read/write permissions:

- `shirtOrders/{deviceId}/{orderId}` - User-specific shirt orders
- `allShirtOrders/{orderId}` - Admin view of all shirt orders
- `tshirtOrders/{deviceId}/{orderId}` - User-specific t-shirt orders  
- `allTshirtOrders/{orderId}` - Admin view of all t-shirt orders

## Verify Deployment

After publishing the rules, refresh your order pages:
- Public order page: `/pages/shirt-order.html`
- Admin page: `/pages/admin/shirt-orders.html`

The permission errors should be resolved.

## Alternative: Firebase CLI

If you have Firebase CLI installed:

```bash
firebase deploy --only database
```

Make sure `firebase.json` and `database.rules.json` are properly configured in your project root.
