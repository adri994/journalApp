import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1MrczP-huKftZBzmvSW1wgszrj8aUGPs",
  authDomain: "react-journal-a3a2e.firebaseapp.com",
  projectId: "react-journal-a3a2e",
  storageBucket: "react-journal-a3a2e.appspot.com",
  messagingSenderId: "503140810080",
  appId: "1:503140810080:web:0306301fdc272050b73205"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
export {
  db,
  googleAuthProvider
}
