//import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebase-config';

import HomePage from './pages/Home/index'
import CoursesPage from './pages/Courses/index'
import WelcomePage from './pages/Welcome/index';
import RegisterPage from './pages/Register/index'
import LessonsPage from './pages/Lessons';
import VideoPage from './pages/Video';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

// Animation: https://www.youtube.com/watch?v=FdrEjwymzdY
// https://stackoverflow.com/questions/52480688/how-to-render-different-layouts-using-react

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/shield" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="home/courses" element={<CoursesPage />} />
        <Route path='home/courses/lessons' element={<LessonsPage />} />
        <Route path='video' element={<VideoPage />} />
      </Routes>

    </div>

  );
}

export default App;