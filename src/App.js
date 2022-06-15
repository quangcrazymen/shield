//import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebase-config';

import HomePage from './pages/Home/index'
import CoursesPage from './pages/Courses/index'
import WelcomePage from './pages/Welcome/index';
import RegisterPage from './pages/Register/index'
import './App.css';
import Lessons from './pages/Lessons';

// Animation: https://www.youtube.com/watch?v=FdrEjwymzdY
// https://stackoverflow.com/questions/52480688/how-to-render-different-layouts-using-react

function App() {
  //TEST
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db,"Users")

  useEffect(()=>{
    const getUsers = async()=>{
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map(doc=>({...doc.data(),id:doc.id})))
      console.log(data)
    }
    getUsers()
  },[])
  return (
    <div className='App'>
      {/* TEST SOME FIRE-BASE FUNCTIONS */}


      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/welcome'>Welcome</Link></li>
      </ul>
      {users.map(user=>{
        return <div>
          <h2>{user.Name}</h2>
          <p>{user.Age}</p>
          <p>{user.Password}</p>
        </div>
      })}

      {/* <WelcomePage/> */}
       {/* <HomePage />  */}
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
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