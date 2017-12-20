import React, { Component } from 'react';
import './App.css';
import logo from './assets/igniter-logo-white.svg';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="LiftIgniter" />
        </header>
        <Landing />
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;
