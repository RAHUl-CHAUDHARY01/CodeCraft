import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtpfkDKt3xG-uT--yt4LEVmOVJlnS6-EE",
  authDomain: "codecraft-91f39.firebaseapp.com",
  projectId: "codecraft-91f39",
  storageBucket: "codecraft-91f39.firebasestorage.app",
  messagingSenderId: "459660136076",
  appId: "1:459660136076:web:f862ebccaef3ac1fad35a9",
  measurementId: "G-5M8JJTVVRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication service and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { 
  auth, 
  provider, 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
};