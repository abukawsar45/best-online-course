

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPfQrclCvoyhLPOU8qEm_BnQwGwfZRjXc",
  authDomain: "tech-camp-1864d.firebaseapp.com",
  projectId: "tech-camp-1864d",
  storageBucket: "tech-camp-1864d.appspot.com",
  messagingSenderId: "589397933769",
  appId: "1:589397933769:web:9bbb31572f86cd17e69718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth;