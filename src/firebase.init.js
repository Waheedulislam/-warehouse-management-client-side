// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyB0TEpWDQAv68sflWfBR7E5SOkTuxJDkr8",
    // authDomain: "inventory-house-a0164.firebaseapp.com",
    // projectId: "inventory-house-a0164",
    // storageBucket: "inventory-house-a0164.appspot.com",
    // messagingSenderId: "258206543424",
    // appId: "1:258206543424:web:f7e9a1a09f05545228f9a5"
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_storageBucket,
    storageBucket: process.env.REACT_APP_projectId,
    messagingSenderId: process.env.REACT_APP_appId,
    appId: process.env.REACT_APP_messagingSenderId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;