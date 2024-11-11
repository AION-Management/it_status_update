import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt_UgVnzRq-E-9MrUj02Cyupy_mL1Gfa0",
  authDomain: "status-update-c5a72.firebaseapp.com",
  databaseURL: "https://status-update-c5a72-default-rtdb.firebaseio.com",
  projectId: "status-update-c5a72",
  storageBucket: "status-update-c5a72.firebasestorage.app",
  messagingSenderId: "706934655596",
  appId: "1:706934655596:web:25c622f2d93e6648e72649",
  measurementId: "G-FF3BKTGF69"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/*
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt_UgVnzRq-E-9MrUj02Cyupy_mL1Gfa0",
  authDomain: "status-update-c5a72.firebaseapp.com",
  databaseURL: "https://status-update-c5a72-default-rtdb.firebaseio.com",
  projectId: "status-update-c5a72",
  storageBucket: "status-update-c5a72.firebasestorage.app",
  messagingSenderId: "706934655596",
  appId: "1:706934655596:web:25c622f2d93e6648e72649",
  measurementId: "G-FF3BKTGF69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

import { initializeApp, credential as _credential } from "firebase-admin";

import serviceAccount from "path/to/serviceAccountKey.json";

initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: "https://status-update-c5a72-default-rtdb.firebaseio.com"
});
*/
