import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMqs_KCPBkvEwxGOrcU0XFmTUSHuKYD3c",
    authDomain: "crown-db-5c28c.firebaseapp.com",
    projectId: "crown-db-5c28c",
    storageBucket: "crown-db-5c28c.appspot.com",
    messagingSenderId: "710983573931",
    appId: "1:710983573931:web:1efb219830182d753c32ee",
    measurementId: "G-TKBM28S8LN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
