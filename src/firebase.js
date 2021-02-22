// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBumKw8rvcvQx0pkv4uXdhRLBPsnz5g-O4",
  authDomain: "slack-clone-react-a4805.firebaseapp.com",
  projectId: "slack-clone-react-a4805",
  storageBucket: "slack-clone-react-a4805.appspot.com",
  messagingSenderId: "78597705810",
  appId: "1:78597705810:web:a0bbeb57e3c3cc6ac9cf8b",
  measurementId: "G-PRFHMG0P9H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,db,provider};