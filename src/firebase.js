import  firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import 'firebase/auth';
import "firebase/firestore";

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBUfLHnmEH-TsMr8LWdvOfaZViwNreiPjA",
  authDomain: "react-app-165ae.firebaseapp.com",
  databaseURL: "https://react-app-165ae.firebaseio.com",
  projectId: "react-app-165ae",
  storageBucket: "react-app-165ae.appspot.com",
  messagingSenderId: "605048794305",
  appId: "1:605048794305:web:31eabc1d78398259573840",
  measurementId: "G-534BY6N1CF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;