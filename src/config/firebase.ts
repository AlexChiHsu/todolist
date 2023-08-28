// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdfX-q-fvNLcWfZDU2YPPQYFQHstARl_4",
  authDomain: "wowmovie-autu.firebaseapp.com",
  projectId: "wowmovie-autu",
  storageBucket: "wowmovie-autu.appspot.com",
  messagingSenderId: "777036651067",
  appId: "1:777036651067:web:e28904806c0cc69b075a1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();
