const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const firestore = admin.firestore()
const settings = {timestampInSnapshots: true}
firestore.settings(settings)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from SupplierX!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
    .document('orders/{orderId}')
    .onCreate(doc => {

        const order = doc.data()
        const notification = {
            content: 'Added a new order',
            user: `${order.authorFirstName} ${order.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
})

exports.userJoined = functions.auth.user()
    .onCreate(user =>{

        return admin.firestore().collection('user')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data()
                const notification = {
                    content: 'Joined the party',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                
                return createNotification(notification)

            })

})