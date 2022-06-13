//import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home/index'
import CoursesPage from './pages/Courses/index'
import WelcomePage from './pages/Welcome/index';

import './App.css';
import Lessons from './pages/Lessons';

// Animation: https://www.youtube.com/watch?v=FdrEjwymzdY
// https://stackoverflow.com/questions/52480688/how-to-render-different-layouts-using-react

function App() {
  return (
    <div className='App'>
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