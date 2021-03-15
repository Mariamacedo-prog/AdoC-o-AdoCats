import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCSxiOgLw8nR1RMukglK9G6OMgN6OdST8g',
  authDomain: 'adocao-adocats.firebaseapp.com',
  projectId: 'adocao-adocats',
  storageBucket: 'adocao-adocats.appspot.com',
  messagingSenderId: '852065738852',
  appId: '1:852065738852:web:8ca65ec5db78bed37fbf71',
  measurementId: 'G-MM9E717Z4H',
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const database = firebaseapp.firestore();
export default database;
