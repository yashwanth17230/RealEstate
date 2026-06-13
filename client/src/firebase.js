// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eliteestates-a286c.firebaseapp.com",
  projectId: "eliteestates-a286c",
  storageBucket: "eliteestates-a286c.firebasestorage.app",
  messagingSenderId: "931261998187",
  appId: "1:931261998187:web:9283194ac80a7afeb1bd2e",
  measurementId: "G-TZTCPEQ0KF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//   apiKey: "AIzaSyAZXWSBeEPQscIQ5uc2xmO1VRHeQFSn4RU",
//   authDomain: "eliteestates-a286c.firebaseapp.com",
//   projectId: "eliteestates-a286c",
//   storageBucket: "eliteestates-a286c.firebasestorage.app",
//   messagingSenderId: "931261998187",
//   appId: "1:931261998187:web:9283194ac80a7afeb1bd2e",
//   measurementId: "G-TZTCPEQ0KF"
// };