/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>// still busy coding this one</code>
        </p>
      </header>
    </div>
  );
}

const Test = () => {
  console.log('test');
};
Test();

export default App;
