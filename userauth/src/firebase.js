// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCybUG5nRmhVxOCRd8dWZ226BukAady3fc",
  authDomain: "userauthentication-53b25.firebaseapp.com",
  projectId: "userauthentication-53b25",
  storageBucket: "userauthentication-53b25.firebasestorage.app",
  messagingSenderId: "771062696168",
  appId: "1:771062696168:web:a1b822897ea8ae0b1ca15d",
  measurementId: "G-W8ZFYDY525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);