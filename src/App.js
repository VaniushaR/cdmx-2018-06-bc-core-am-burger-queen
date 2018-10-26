import React, { Component } from 'react';
import Logo from './Assets/burguerqB.jpg';
import './App.css';
import monthlyOffer from './Assets/Offer.png';
import {
  Navbar,
  NavItem,
  Button,
  Icon,
  Card,
  CardTitle,
  Row,
  Col
} from 'react-materialize';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar right large>
            <NavItem>
              <img className="logo" src={Logo} alt="Logo" />
            </NavItem>
            <NavItem onClick={() => console.log('test click')}>TEAM</NavItem>
          </Navbar>
          <div className="">
            <Row>
              <Col s={6} m={6}>
                <section className="action">
                  <Button large waves="yellow">
                    <Icon right>restaurant</Icon>
                    ORDENAR
                  </Button>
                </section>
              </Col>
              <Col s={6} m={6}>
                <img className="offer-img" src={monthlyOffer} Octubre />
              </Col>
            </Row>
          </div>
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
