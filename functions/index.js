const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


const createNotification = ((notification) => {
    return admin.firestore().collection('notification')
        .add(notification).then(doc => { console.log('Notification added', doc)}).catch(err => {
            console.log('createNotification error: ' + err);
        })
});

exports.projectCreated = functions.firestore
    .document('projects/{projectid}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added a new post',
            user:   `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });

    exports.userJoined = functions.auth.user()
        .onCreate(user => {
            return admin.firestore().collection('users')
                .doc(user.uid).get().then(doc => {
                    const newUser = doc.data();
                    const notification = {
                        content: 'Welcome, ' + `${newUser.firstName}`,
                        user: `${newUser.firstName} ${newUser.lastName}`,
                        time: admin.firestore.FieldValue.serverTimestamp()
                    }
                    return createNotification(notification);
                });
    });