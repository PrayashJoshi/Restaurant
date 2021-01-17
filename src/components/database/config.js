import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4-pXk-UJtPh1qab_mzaEdiJrnGPd9Zkc",
    authDomain: "resturantapp-ae443.firebaseapp.com",
    databaseURL: "https://resturantapp-ae443-default-rtdb.firebaseio.com",
    projectId: "resturantapp-ae443",
    storageBucket: "resturantapp-ae443.appspot.com",
    messagingSenderId: "42643984495",
    appId: "1:42643984495:web:e59f3b01880e3cfd4bfd9a",
    measurementId: "G-3XR4N5T8MB"
});

var db = firebaseApp.firestore();

export { db };
