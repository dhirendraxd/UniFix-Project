// src/lib/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKj4VDf1zNHjyDLBiY8Y0ptJHYARE1vtQ",
  authDomain: "unifix-bf2ad.firebaseapp.com",
  databaseURL: "https://unifix-bf2ad-default-rtdb.firebaseio.com",
  projectId: "unifix-bf2ad",
  storageBucket: "unifix-bf2ad.firebasestorage.app",
  messagingSenderId: "127471907329",
  appId: "1:127471907329:web:3a6a88754c653432258600"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };