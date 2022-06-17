import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAEPluYPMVqbIGrAJ1o0B4SVbQgMS41rkM",
    authDomain: "shield-af24f.firebaseapp.com",
    projectId: "shield-af24f",
    storageBucket: "shield-af24f.appspot.com",
    messagingSenderId: "642600383217",
    appId: "1:642600383217:web:cbdc495d1f6b4d999a6f50",
    measurementId: "G-82W7C2QBR3"
  };
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);