import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYMLM8O9TPAdlrTxG4CUtP5DGQwIxquw",
  authDomain: "lovebylore-5b977.firebaseapp.com",
  projectId: "lovebylore-5b977",
  storageBucket: "lovebylore-5b977.appspot.com",
  messagingSenderId: "233670203237",
  appId: "1:233670203237:web:a209ab2499e1f6efd7738c"
};

/* 

const firebaseConfig = {
  apiKey: "AIzaSyDQYMLM8O9TPAdlrTxG4CUtP5DGQwIxquw",
  authDomain: "lovebylore-5b977.firebaseapp.com",
  projectId: "lovebylore-5b977",
  storageBucket: "lovebylore-5b977.appspot.com",
  messagingSenderId: "233670203237",
  appId: "1:233670203237:web:a209ab2499e1f6efd7738c"
};
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
