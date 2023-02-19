import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyDcrtGZ5DYXSUXJnoocpxw6Cawo3xxc1LM",
    authDomain: "naari-10f91.firebaseapp.com",
    projectId: "naari-10f91",
    storageBucket: "naari-10f91.appspot.com",
    messagingSenderId: "165387598514",
    appId: "1:165387598514:web:c135fb5f339fd3ac9c67ab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export { firebaseConfig };
