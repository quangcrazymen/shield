//import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home/index'
import NewsPage from './pages/News/index'
import WelcomePage from './pages/Welcome/index';

import './App.css';

// Animation: https://www.youtube.com/watch?v=FdrEjwymzdY
// https://stackoverflow.com/questions/52480688/how-to-render-different-layouts-using-react

function App() {
  return (
    <div className='App'>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/welcome'>Welcome</Link></li>
      </ul>
      {/* <WelcomePage/> */}
       {/* <HomePage />  */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomePage/>} />
        {/* <Route path="welcome" element={<WelcomePage />} /> */}
      </Routes>
    </div>

  );
}

export default App;