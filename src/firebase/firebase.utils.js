import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyAu8k1JzbNAv5h037gG_ckrCXUCkjZTv4I',
  authDomain: 'crwn-db-89820.firebaseapp.com',
  projectId: 'crwn-db-89820',
  storageBucket: 'crwn-db-89820.appspot.com',
  messagingSenderId: '809983569852',
  appId: '1:809983569852:web:5ca2613aabe6f1bcbac5b9',
  measurementId: 'G-VSHZK6Y7HJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
