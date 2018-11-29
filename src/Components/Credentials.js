import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyAymTnu-ZB2YMUgfMEvlIqgufdSrmbJRxQ',
  authDomain: 'burguer-queen-839fc.firebaseapp.com',
  databaseURL: 'https://burguer-queen-839fc.firebaseio.com',
  projectId: 'burguer-queen-839fc',
  storageBucket: 'burguer-queen-839fc.appspot.com',
  messagingSenderId: '106440580751'
};

const firebaseInit = firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

export { firebaseInit, db };
