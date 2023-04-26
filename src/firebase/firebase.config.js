// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV4jASe9MT02wtvDXwMlJpSvPqVQ241Xo",
  authDomain: "ema-john-with-firebase-a-b5ef1.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-b5ef1",
  storageBucket: "ema-john-with-firebase-a-b5ef1.appspot.com",
  messagingSenderId: "767225081846",
  appId: "1:767225081846:web:46022bbe49d9c018a661d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;