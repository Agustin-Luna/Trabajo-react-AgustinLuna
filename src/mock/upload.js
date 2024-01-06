import MOCK_DATA from './data.json' assert{type: 'json'}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore"

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
const db = getFirestore (app)

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item =>{
    delete item.id
    addDoc(productosRef, item)


})

