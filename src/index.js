import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import './index.css';
import App from './App';

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
const db = getFirestore(app);
async function getCourses(db){
  const courses = collection(db,"Courses")
  const courseDetail = await getDocs(courses)
  const courseList = courseDetail.docs.map(doc => doc.data());
  return courseList;
}

console.log(getCourses(db))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

