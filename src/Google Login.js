// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP5GxGGW1ozIskWTNUIgZb0_xh2m1OKEs",
  authDomain: "air-ticket-9d705.firebaseapp.com",
  projectId: "air-ticket-9d705",
  storageBucket: "air-ticket-9d705.appspot.com",
  messagingSenderId: "705705379999",
  appId: "1:705705379999:web:b5f1ea91091b40cf807aaa",
  measurementId: "G-PBYZ5PM5NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);