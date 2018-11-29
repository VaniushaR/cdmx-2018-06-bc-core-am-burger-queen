import React, { Component } from 'react';
import { Navbar, NavItem, Button } from 'react-materialize';
import Logo from '../Assets/burguerqB.jpg';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="deep-purple darken-3 right">
          <NavItem>
            <img className="logo" src={Logo} alt="Logo" />
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
