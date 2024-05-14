// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAADJAGjQpBWvNfaQ9mMRylprN9dFbAO0Y",
  authDomain: "beyond-app-bfd2a.firebaseapp.com",
  projectId: "beyond-app-bfd2a",
  storageBucket: "beyond-app-bfd2a.appspot.com",
  messagingSenderId: "712933484810",
  appId: "1:712933484810:web:67b779e51cef02f379b2f3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export { app };