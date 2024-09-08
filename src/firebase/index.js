import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import firebaseConfig from "./config";

const firebaseConfig = {
  apiKey: "AIzaSyAA-eKZpdeQREETGHSJFK1Hz7S6bARhjc0",
  authDomain: "linkedin-clone-74e87.firebaseapp.com",
  projectId: "linkedin-clone-74e87",
  storageBucket: "linkedin-clone-74e87.appspot.com",
  messagingSenderId: "857815286792",
  appId: "1:857815286792:web:539f7d99413fe41c147dbd",
  measurementId: "G-LNREH1XQZN",
};



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
