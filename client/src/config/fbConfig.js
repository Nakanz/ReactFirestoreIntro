import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyATQhfQXGO3dx1-9GZ91R0OQtn8E9apYxU",
    authDomain: "reactjswfbase.firebaseapp.com",
    databaseURL: "https://reactjswfbase.firebaseio.com",
    projectId: "reactjswfbase",
    storageBucket: "reactjswfbase.appspot.com",
    messagingSenderId: "454825300718",
    appId: "1:454825300718:web:c257b47b233ed4fbae59ff",
    measurementId: "G-ZHNV31EH7Q"
  };
  // // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // // firebase.analytics();
  firebase.firestore();
  export default firebase;