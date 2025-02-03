import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKj4VDf1zNHjyDLBiY8Y0ptJHYARE1vtQ",
  authDomain: "unifix-bf2ad.firebaseapp.com",
  projectId: "unifix-bf2ad",
  storageBucket: "unifix-bf2ad.appspot.com",  // ✅ Fixed `storageBucket`
  messagingSenderId: "127471907329",
  appId: "1:127471907329:web:b3be0598847546c6258600",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
