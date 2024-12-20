import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your_apiKey",
  authDomain: "your_authDomain",
  projectId: "your_projectId",
  storageBucket: "your_storageBucket",
  messagingSenderId: "your_messagingSenderId",
  appId: "your_appId"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged };