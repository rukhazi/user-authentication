import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCybUG5nRmhVxOCRd8dWZ226BukAady3fc",
  authDomain: "userauthentication-53b25.firebaseapp.com",
  projectId: "userauthentication-53b25",
  storageBucket: "userauthentication-53b25.firebasestorage.app",
  messagingSenderId: "771062696168",
  appId: "1:771062696168:web:a1b822897ea8ae0b1ca15d",
  measurementId: "G-W8ZFYDY525"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
