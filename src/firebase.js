import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDLu3Bp_DfMe6_eXIafupaXBosb2UsaAfE",
  authDomain: "react-project-13e07.firebaseapp.com",
  databaseURL: "https://react-project-13e07.firebaseio.com",
  projectId: "react-project-13e07",
  storageBucket: "react-project-13e07.appspot.com",
  messagingSenderId: "584635623494",
  appId: "1:584635623494:web:c6ba233087788df307c247",
  measurementId: "G-GTH4LBLF86"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;