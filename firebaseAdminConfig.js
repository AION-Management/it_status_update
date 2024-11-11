// firebaseAdminConfig.js (Server-side Firebase Admin SDK)
import admin from 'firebase-admin';
import serviceAccount from './path/to/serviceAccountKey.json'; // Use the correct path

// Initialize Firebase Admin with service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://status-update-c5a72-default-rtdb.firebaseio.com"
});

// You can now use admin.database(), admin.auth(), etc., on the server
const db = admin.database();
