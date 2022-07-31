
import {initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from ' firebase/auth'

import  {getFirestore, doc, getDoc, setDoc  }from 'firebase/firestore;';



const firebaseConfig = {
    apiKey: "AIzaSyAS_a_ipTSodnGyvksRcZipuKOufcdQmRM",
    authDomain: "crwn-clothing-a2603.firebaseapp.com",
    projectId: "crwn-clothing-a2603",
    storageBucket: "crwn-clothing-a2603.appspot.com",
    messagingSenderId: "225578050459",
    appId: "1:225578050459:web:8c5bbc984bfa210e4e773e"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            })
        }catch(error){
            console.log(error.message)

        }
    }

    return userDocRef;



}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}