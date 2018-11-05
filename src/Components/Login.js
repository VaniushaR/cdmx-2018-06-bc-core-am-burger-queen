import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import firebaseInit from './Credentials';
import Menu from './Menu';
import avatar from '../Assets/chef.png';
import Time from './Date';
import {
  Col,
  Card,
  Row,
  Button,
  Collapsible,
  CollapsibleItem
} from 'react-materialize';

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
      console.log('user', user);
    });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>
            <Collapsible popout defaultActiveKey={1}>
              <CollapsibleItem
                header={firebase.auth().currentUser.displayName + ' is working'}
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
            <Menu />
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
