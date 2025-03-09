// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAONLEGcz92hyfieLBxTtpXystTevq0Mws",
  authDomain: "vite-contact-facd0.firebaseapp.com",
  projectId: "vite-contact-facd0",
  storageBucket: "<project-id>.appspot.com",
  messagingSenderId: "401767388671",
  appId: "1:401767388671:web:824a25cf0a403fd45843ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
