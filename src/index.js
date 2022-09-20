import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVP6-FoYXsQqBHiBZway2x6CB4iu_46Dk",
    authDomain: "test-firebase-5b6d0.firebaseapp.com",
    projectId: "test-firebase-5b6d0",
    storageBucket: "test-firebase-5b6d0.appspot.com",
    messagingSenderId: "178275048521",
    appId: "1:178275048521:web:f5e2716e61b4300fa3b398",
    measurementId: "G-Y7QWWV1988"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App / > );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();