import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBl4PTYbkS6q0WksVqlQzRAHiIKJ7ogX9E",
    authDomain: "discord-app-wd.firebaseapp.com",
    projectId: "discord-app-wd",
    storageBucket: "discord-app-wd.appspot.com",
    messagingSenderId: "246808826811",
    appId: "1:246808826811:web:7b44e189fedfacc32daa9e",
    measurementId: "G-X54H4SYEX9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new GoogleAuthProvider();


  export {auth, provider};
  export default db; 