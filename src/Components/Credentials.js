import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAymTnu-ZB2YMUgfMEvlIqgufdSrmbJRxQ',
  authDomain: 'burguer-queen-839fc.firebaseapp.com',
  databaseURL: 'https://burguer-queen-839fc.firebaseio.com',
  projectId: 'burguer-queen-839fc',
  storageBucket: 'burguer-queen-839fc.appspot.com',
  messagingSenderId: '106440580751'
};

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };
