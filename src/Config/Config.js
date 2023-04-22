import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaO6zJJ5eCVimZYQRqjkbaede-R5syrDM",
  authDomain: "ecommerce-app-with-react-66ce4.firebaseapp.com",
  projectId: "ecommerce-app-with-react-66ce4",
  storageBucket: "ecommerce-app-with-react-66ce4.appspot.com",
  messagingSenderId: "400931149707",
  appId: "1:400931149707:web:6952e02233ed30cbe2c18e",
  measurementId: "G-4WNXHXHQYE",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
