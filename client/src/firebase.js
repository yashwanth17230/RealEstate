// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-84571.firebaseapp.com",
  projectId: "real-estate-84571",
  storageBucket: "real-estate-84571.appspot.com",
  messagingSenderId: "193476405961",
  appId: "1:193476405961:web:a21527ebbd732f62c77b18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);