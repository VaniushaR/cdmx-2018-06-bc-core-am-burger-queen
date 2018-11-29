import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Menu from './Menu';
import Time from './Date';
import {
  Button,
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  Navbar,
  NavItem
} from 'react-materialize';
import { NavLink } from 'react-router-dom';
//import { BrowserRouter, Route } from 'react-router-dom';

class Login extends Component {
  firebaseInit;
  state = { isSignedIn: false };
  uiConfig = {
    // Popup sign in flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>
            <Row>
              <div>
                <Collapsible
                  className="collapsible-card"
                  popout
                  defaultActiveKey={1}
                >
                  <CollapsibleItem
                    className="waiter-card"
                    header={
                      firebase.auth().currentUser.displayName + ' is working'
                    }
                    icon="account_circle"
                  >
                    <Time />
                    <h5>
                      ¡Nice Job {firebase.auth().currentUser.displayName + '!'}
                    </h5>
                    <Button onClick={() => firebase.auth().signOut()}>
                      Close my session
                    </Button>
                  </CollapsibleItem>
                </Collapsible>
                <div>
                  <Row>
                    <Navbar className="deep-purple darken-3">
                      <NavItem className="right">
                        <NavLink to="/Kitchen">
                          <Button>Kitchen</Button>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <h4>Clients Order: </h4>
                      </NavItem>
                    </Navbar>
                  </Row>
                </div>
                <Menu attentionBy={firebase.auth().currentUser.displayName} />
              </div>
            </Row>
          </div>
        ) : (
          <div>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Login;
