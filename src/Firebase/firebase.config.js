// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUco03lyj9YClmwcfS9cFe3V2s0ITjf1o",
  authDomain: "task-managment-client.firebaseapp.com",
  projectId: "task-managment-client",
  storageBucket: "task-managment-client.appspot.com",
  messagingSenderId: "1072864912017",
  appId: "1:1072864912017:web:f712e9b51b45fdf94f5530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;