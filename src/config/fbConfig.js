import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCE8vw-Jbot863fVJOI56gkCm5QIOnYNnM",
  authDomain: "project-mangement-app.firebaseapp.com",
  databaseURL: "https://project-mangement-app.firebaseio.com",
  projectId: "project-mangement-app",
  storageBucket: "project-mangement-app.appspot.com",
  messagingSenderId: "533493678281",
  appId: "1:533493678281:web:7873a8f5e54eb4f6510d18",
  measurementId: "G-F92EQY7SM8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
