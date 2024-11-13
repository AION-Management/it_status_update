// firebaseService.js
function writeUserData(app, status, errormsg) {
    const dbRef = firebase.database().ref('users/' + app);
    return dbRef.set({
        app: app,
        status: status,
        errormsg: errormsg
    });
}

function getStatusUpdates(app, callback) {
    const dbRef = firebase.database().ref('users/' + app);
    dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
}
export { writeUserData, getStatusUpdates };
