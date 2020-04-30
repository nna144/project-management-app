import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// App's firebase configuration.
var firebaseConfig = {
  apiKey: "AIzaSyCE8vw-Jbot863fVJOI56gkCm5QIOnYNnM",
  authDomain: "project-mangement-app.firebaseapp.com",
  databaseURL: "https://project-mangement-app.firebaseio.com",
  projectId: "project-mangement-app",
  storageBucket: "project-mangement-app.appspot.com",
  messagingSenderId: "533493678281",
  appId: "1:533493678281:web:7873a8f5e54eb4f6510d18",
  measurementId: "G-F92EQY7SM8",
  userProfile: "users",
  useFirestoreForProfile: true,
};
// Initialize firebase instance.
firebase.initializeApp(firebaseConfig);

// Initialize other service on firebase instance.
firebase.firestore();

export default firebase;
