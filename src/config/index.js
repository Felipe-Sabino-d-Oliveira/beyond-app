// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAADJAGjQpBWvNfaQ9mMRylprN9dFbAO0Y",
  authDomain: "beyond-app-bfd2a.firebaseapp.com",
  projectId: "beyond-app-bfd2a",
  storageBucket: "beyond-app-bfd2a.appspot.com",
  messagingSenderId: "712933484810",
  appId: "1:712933484810:web:67b779e51cef02f379b2f3",
};

// Inicialize o Firebase
export const app = initializeApp(firebaseConfig);

// ====================== FIRESTORE =======================
export const db = getFirestore(app);