import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// This apiKey is no longer usable! Was created as example...

const firebaseConfig = {
    apiKey: "AIzaSyDROd5O4I-1o773dh8_4Fz3Q_b4X5hypjg",
    authDomain: "testingreactjs-a2797.firebaseapp.com",
    projectId: "testingreactjs-a2797",
    storageBucket: "testingreactjs-a2797.appspot.com",
    messagingSenderId: "808845796063",
    appId: "1:808845796063:web:96cfd045e64ea75ade3f6a",
    measurementId: "G-QWGSCDP647"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

