import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCleLutzjg75VOGQlRxEYqDHIDcULAGdw",
    authDomain: "supplierxbr.firebaseapp.com",
    databaseURL: "https://supplierxbr.firebaseio.com",
    projectId: "supplierxbr",
    storageBucket: "supplierxbr.appspot.com",
    messagingSenderId: "13760032043"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase