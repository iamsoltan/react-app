import React from "react";
//import logo from './logo.svg';
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I AM A PARAGRAPH</p>
        <a href="https://google.com">Visit GooGle</a>
        <ul>
          <li>join meeting</li>
          <li>join discord</li>
          <li>write in the presence sheet</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
