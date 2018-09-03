import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let thing1 = "asdf";
    thing1 = thing1 + "asdf";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {thing1} To get started, Zug zug edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
