import React from "react";
import logo from "./logo.svg";
//import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          React Bootstrap
        </a>
      </nav>
      <div>
        <a href="/auth/google">Sign In with Google</a>
      </div>
    </div>
  );
}

export default App;
