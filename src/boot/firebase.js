// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBHsuqM37kCcu1SAC_Vz4TDHfl4AuhCjFw",
  authDomain: "sliimechat.firebaseapp.com",
  projectId: "sliimechat",
  storageBucket: "sliimechat.appspot.com",
  messagingSenderId: "1015437830738",
  appId: "1:1015437830738:web:876581251a35c2b09dcd8b"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDB = getDatabase(app)
const firebaseAuth = getAuth(app)
export {
  firebaseDB,
  firebaseAuth
}