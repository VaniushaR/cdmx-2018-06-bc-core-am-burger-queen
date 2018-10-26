import React, { Component } from 'react';
import Logo from './Assets/burguerqB.jpg';
import './App.css';

import { Navbar, NavItem } from 'react-materialize';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar right large className="deep-purple darken-3">
            <NavItem>
              <img className="logo" src={Logo} alt="Logo" />
            </NavItem>
          </Navbar>
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
