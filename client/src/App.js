import React from 'react';
import logo from './logo.svg';
import linkedin from './linkedin.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Powered by React
        </p>
        <a href="https://www.linkedin.com/in/philkrull/" target="_"><img src={linkedin} className="App-linkedin" alt="linkedin"></img></a>
      </header>
    </div>
  );
}

export default App;
