import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXb6UiUGWwB4ZA5nqHouaskjCFpGaun1Q",
    authDomain: "the-green-lounge.firebaseapp.com",
    projectId: "the-green-lounge",
    storageBucket: "the-green-lounge.appspot.com",
    messagingSenderId: "360528937108",
    appId: "1:360528937108:web:54d44ba27f54f2ca94f481",
    measurementId: "G-MJWPCN2ZPJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error created user', error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
