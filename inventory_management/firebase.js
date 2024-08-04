// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRGeQt2wXwikLCZuudHnwdlzqXWvKipMg",
  authDomain: "inventorymanagement-711ba.firebaseapp.com",
  projectId: "inventorymanagement-711ba",
  storageBucket: "inventorymanagement-711ba.appspot.com",
  messagingSenderId: "601612930516",
  appId: "1:601612930516:web:a3d5565553b7d6e2925a41",
  measurementId: "G-EHMRM6T86Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}