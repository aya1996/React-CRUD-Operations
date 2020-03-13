import  firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import 'firebase/auth';
import "firebase/firestore";

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBQ8wzyqNiOigAQZ6J8uLidmMLK6MYfbz8",
  authDomain: "reactapp-923d1.firebaseapp.com",
  databaseURL: "https://reactapp-923d1.firebaseio.com",
  projectId: "reactapp-923d1",
  storageBucket: "reactapp-923d1.appspot.com",
  messagingSenderId: "473197869711",
  appId: "1:473197869711:web:4f5911db394a2655d58efa",
  measurementId: "G-PTCBW0YJ21"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;