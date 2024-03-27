// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc6wyRs_RaSa_TUKLPT259alTN4Qj9jF0",
  authDomain: "crmi-8e85e.firebaseapp.com",
  projectId: "crmi-8e85e",
  storageBucket: "crmi-8e85e.appspot.com",
  messagingSenderId: "934041128183",
  appId: "1:934041128183:web:fac2fed27f95c78c7b57f2",
  measurementId: "G-TNJ80VD0QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app,auth}