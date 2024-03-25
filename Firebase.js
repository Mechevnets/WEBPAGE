// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-JcDdwf3fAWfjnJtTvj5dut8g_ayKGBk",
  authDomain: "mechonix-24.firebaseapp.com",
  projectId: "mechonix-24",
  storageBucket: "mechonix-24.appspot.com",
  messagingSenderId: "7925130966",
  appId: "1:7925130966:web:47cff876a1cf54833e4b77",
  measurementId: "G-9C0W4S3KTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
