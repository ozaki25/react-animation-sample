import React from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';

function App() {
  const props = useSpring({
    to: { transform: 'translateX(0)', opacity: 1 },
    from: { transform: 'translateX(100%)', opacity: 0 },
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <animated.a
          style={props}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </animated.a>
      </header>
    </div>
  );
}

export default App;
