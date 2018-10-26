import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import firebaseInit from './Credentials';
import Menu from './Menu';
import avatar from '../Assets/chef.png';
import Time from './Date';

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
            <div> Has ingresado</div>
            <button onClick={() => firebase.auth().signOut()}>
              Cerrar Sesión
            </button>
            <h2>Sesión de {firebase.auth().currentUser.displayName}</h2>
            <img alt="chef avatar" src={avatar} />
            <Time />
            <Menu />
          </div>
        ) : (
          <div>
            No has iniciado sesión
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
        )
      </div>
    );
  }
}

export default Login;
