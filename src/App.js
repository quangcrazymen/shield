import logo from './logo.svg';
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
    <div>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/news'>News</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </div>
  );
}

export default App;