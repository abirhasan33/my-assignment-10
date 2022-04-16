// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzTgkcO8Am2L4GPK_TrM1Ng7hfwcSkRSU",
  authDomain: "assignment-10-51d3e.firebaseapp.com",
  projectId: "assignment-10-51d3e",
  storageBucket: "assignment-10-51d3e.appspot.com",
  messagingSenderId: "800338483268",
  appId: "1:800338483268:web:03f401a2ddd53c69764411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;