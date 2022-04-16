import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyB9wQjmGkIvy35coN22bZBq5aPT-d5vAtg',
  authDomain: 'e-commerce-website-f188f.firebaseapp.com',
  projectId: 'e-commerce-website-f188f',
  storageBucket: 'e-commerce-website-f188f.appspot.com',
  messagingSenderId: '737075987899',
  appId: '1:737075987899:web:b9eee89d9445c82cb1f09e',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
