// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "firebase abi key",
  authDomain: "ai-trip-planner-ae60d.firebaseapp.com",
  projectId: "ai-trip-planner-ae60d",
  storageBucket: "ai-trip-planner-ae60d.firebasestorage.app",
  messagingSenderId: "464444186307",
  appId: "1:464444186307:web:ca83e7bb69014ccddd0c76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
