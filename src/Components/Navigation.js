import React, { Component } from 'react';
import { Navbar, NavItem, Button } from 'react-materialize';
import Login from './Login';
import Logo from '../Assets/burguerqB.jpg';
import Kitchen from './Kitchen';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="deep-purple darken-3">
          <NavItem>
            <img className="logo" src={Logo} alt="Logo" />
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
