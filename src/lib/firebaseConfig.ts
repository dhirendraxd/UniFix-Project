import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider} from "firebase/auth";
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

export const auth = getAuth(app);
export const db = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider();