//import logo from './logo.svg';
import { Routes,Route,Link } from 'react-router-dom'
import HomePage from './pages/Home/index'
import NewsPage from './pages/News/index'
import WelcomePage from './pages/Welcome/index';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             Hello world
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <div className='App'>
      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul> */}
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/news" element={ <NewsPage/> }/>
        <Route path="welcome" element={<WelcomePage/>}/>
      </Routes>
    </div>

  );
}

export default App;