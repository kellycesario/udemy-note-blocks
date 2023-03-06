import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA12XDe32XoGrKlu2VSKRexglkkYH7RA6A",
  authDomain: "noteblocks-93f5e.firebaseapp.com",
  projectId: "noteblocks-93f5e",
  storageBucket: "noteblocks-93f5e.appspot.com",
  messagingSenderId: "1066597049861",
  appId: "1:1066597049861:web:f1064d51a75b10e7b85e6c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
