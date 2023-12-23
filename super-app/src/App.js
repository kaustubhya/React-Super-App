// import logo from './logo.svg';
// import './App.css';
// import Register from './Register';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Boiler-Plate React Setup
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Register from './register';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Register />
    </div>
  );
}

export default App;
