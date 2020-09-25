import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD_4F-H5V9xcD7WFNB77gr2Gpq9YQeCnNM",
  authDomain: "outdor-clothing-db.firebaseapp.com",
  databaseURL: "https://outdor-clothing-db.firebaseio.com",
  projectId: "outdor-clothing-db",
  storageBucket: "outdor-clothing-db.appspot.com",
  messagingSenderId: "914704462751",
  appId: "1:914704462751:web:2af27ebf1cef3940d643aa",
  measurementId: "G-LJLRFJHHSG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;