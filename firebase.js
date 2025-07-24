// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsPOswXR4W4n5J0NVanvvdv9j1D_bK_pk",
  authDomain: "sidifysolutions.firebaseapp.com",
  projectId: "sidifysolutions",
  storageBucket: "sidifysolutions.firebasestorage.app",
  messagingSenderId: "121929452554",
  appId: "1:121929452554:web:45198890f3cbb9670063f3",
  measurementId: "G-QR1ENV3YVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);