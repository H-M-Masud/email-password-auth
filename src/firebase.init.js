// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Wj7xhfVjVQMZqXoHaYLPSZI5Vy0eBe8",
  authDomain: "email-password-auth-ad27a.firebaseapp.com",
  projectId: "email-password-auth-ad27a",
  storageBucket: "email-password-auth-ad27a.appspot.com",
  messagingSenderId: "9830504829",
  appId: "1:9830504829:web:2d5abd7a57301fc5ab1414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;