//import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import HomePage from './pages/Home/index'
import CoursesPage from './pages/Courses/index'
import WelcomePage from './pages/Welcome/index';

import './App.css';
import Lessons from './pages/Lessons';

// Animation: https://www.youtube.com/watch?v=FdrEjwymzdY
// https://stackoverflow.com/questions/52480688/how-to-render-different-layouts-using-react
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
export const db = getFirestore(app);
async function getCourses(db){
  const courses = collection(db,"Users")
  const courseDetail = await getDocs(courses)
  const courseList = courseDetail.docs.map(doc => doc.data());
  return courseList;
}

// import {useState,useEffect} from "react"
console.log(getCourses(db))
const user = async ()=>{
    const userRaw = collection(db,"Users")
    const ans= await getDocs(userRaw) 
    console.log(ans.docs.map(doc => doc.data()))
}
user()

function App() {
  //TEST
  // const [users, setUsers] = useState([])
  //const usesCollectionRef 

  return (
    <div className='App'>
      {/* TEST SOME FIRE-BASE FUNCTIONS */}
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/welcome'>Welcome</Link></li>
      </ul>

      {/* <WelcomePage/> */}
       {/* <HomePage />  */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage/>} />
        <Route path="home/courses" element={<CoursesPage/>} />
        <Route path='home/courses/lessons' element={<Lessons/>}/>
        {/* <Route path="welcome" element={<WelcomePage />} /> */}
      </Routes>
    </div>

  );
}

export default App;