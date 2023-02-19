import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyCb1D1HBn8bizR8ZpIPMbKLiYAljf-Bzz4",
    authDomain: "meet-clone-e0c0a.firebaseapp.com",
    databaseURL: "https://meet-clone-e0c0a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "meet-clone-e0c0a",
    storageBucket: "meet-clone-e0c0a.appspot.com",
    messagingSenderId: "1007338783870",
    appId: "1:1007338783870:web:651519b12c354d2fc0042f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export { firebaseConfig };