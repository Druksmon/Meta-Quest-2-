import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {ProductsProvider} from "./Context/ContextProducts";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgVYmEgotrDOXmvD1XEn360V4Fqhc1_FU",
    authDomain: "metaquest2-102c0.firebaseapp.com",
    projectId: "metaquest2-102c0",
    storageBucket: "metaquest2-102c0.appspot.com",
    messagingSenderId: "162293341890",
    appId: "1:162293341890:web:b9a04863d1bd87a678655b",
    measurementId: "G-JF9ZCW3WTH"
};
// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProductsProvider>
            <App/>
        </ProductsProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
