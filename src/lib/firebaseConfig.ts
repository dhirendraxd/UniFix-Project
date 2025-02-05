import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKj4VDf1zNHjyDLBiY8Y0ptJHYARE1vtQ",
  authDomain: "unifix-bf2ad.firebaseapp.com",
  projectId: "unifix-bf2ad",
  storageBucket: "unifix-bf2ad.appspot.com",
  messagingSenderId: "127471907329",
  appId: "1:127471907329:web:6868686868686868686868"
};

const app = initializeApp(firebaseConfig);

// ✅ Correct way to export
export const auth = getAuth(app);
export const db = getFirestore(app);

