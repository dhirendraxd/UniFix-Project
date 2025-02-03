import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJK_jJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ",
  authDomain: "unifix-bf2ad.firebaseapp.com",
  projectId: "unifix-bf2ad",
  storageBucket: "unifix-bf2ad.appspot.com",
  messagingSenderId: "686868686868",
  appId: "1:686868686868:web:6868686868686868686868"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
