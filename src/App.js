import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <h1>Loader Practice</h1>
          <User/>
        </section>
      </div>
    );
  }
}

export default App;
