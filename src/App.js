// src/App.js
import React from 'react';
import ColorWheel from './components/ColorWheel'; // Import the Square component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Existing content */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Include the Square component */}
        <ColorWheel />
      </header>
    </div>
  );
}

export default App;
