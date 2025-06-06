// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPSoAPb9Ug0mJGY6ULT39ZDVv_2PqGdxA",
  authDomain: "cravecusine.firebaseapp.com",
  projectId: "cravecusine",
  storageBucket: "cravecusine.firebasestorage.app",
  messagingSenderId: "519243892999",
  appId: "1:519243892999:web:1f88d15368aa860d6edda2",
  measurementId: "G-FX1E2EGV83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);