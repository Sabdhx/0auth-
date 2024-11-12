// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4IirvFZ9eP8LXIZ2sqJjmTk9Tka_SP68",
  authDomain: "justauth-3b322.firebaseapp.com",
  projectId: "justauth-3b322",
  storageBucket: "justauth-3b322.firebasestorage.app",
  messagingSenderId: "323418957290",
  appId: "1:323418957290:web:82d6e6513c865de24f7e93",
  measurementId: "G-1MJ556P151"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);