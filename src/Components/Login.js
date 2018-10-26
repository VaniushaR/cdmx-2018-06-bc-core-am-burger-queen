import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import firebaseInit from './Credentials';
import Menu from './Menu';
import avatar from '../Assets/chef.png';
import Time from './Date';
import { Col, Card, Row, Button } from 'react-materialize';

class Login extends Component {
  firebaseInit;
  state = { isSignedIn: false };
  uiConfig = {
    // Popup signin flow rather than redirect flow.
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
            <Row>
              <Col m={6} s={12}>
                <Card
                  className="deep-purple darken-3"
                  textClassName="white-text"
                  title={
                    <h5 className="waiter">
                      {firebase.auth().currentUser.displayName} is working{' '}
                    </h5>
                  }
                  actions={[
                    <Button onClick={() => firebase.auth().signOut()}>
                      Close my session
                    </Button>
                  ]}
                >
                  <img className="avatar" alt="chef avatar" src={avatar} />
                  <Time />
                </Card>
              </Col>
            </Row>

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
