import React, { Component } from 'react';
import logo from './Assets/logo.jpg';
import './App.css';
import Welcome from './Components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Welcome">Welcome to Burger Queen!</h1>
          </header>
        </div>
        <Welcome />
      </div>
    );
  }
}

export default App;
