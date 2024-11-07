import { database } from "./firebaseConfig.js";
import { ref, set, onValue } from "firebase/database";

// Function to write data to Firebase
export function writeUserData(app, status, errormsg) {
    const dbRef = ref(database, 'users/' + app);
    return set(dbRef, {
        app: app,
        status: status,
        errormsg: errormsg
    });
}

// Function to read data from Firebase
export function getStatusUpdates(app, callback) {
    const dbRef = ref(database, 'users/' + app);
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
}
