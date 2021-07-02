import firebase from "firebase/app";

// import * as firebase from 'firebase';
import "@firebase/auth";
import "@firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHspSmRCvHsh-QpGilsSzkKtK9jZvHbB8",
  authDomain: "green-deeds.firebaseapp.com",
  databaseURL: "https://green-deeds.firebaseio.com",
  projectId: "green-deeds",
  storageBucket: "green-deeds.appspot.com",
  messagingSenderId: "69694626166",
  appId: "1:69694626166:android:b2f5850932db7a807c8257",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
