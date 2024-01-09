// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {  getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmhjyrUYkM7ei9rxami_9ZE00Pn09DZCo",
  authDomain: "futbolretro-988eb.firebaseapp.com",
  projectId: "futbolretro-988eb",
  storageBucket: "futbolretro-988eb.appspot.com",
  messagingSenderId: "1011389221039",
  appId: "1:1011389221039:web:5136301eef903d44d0ac5a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();