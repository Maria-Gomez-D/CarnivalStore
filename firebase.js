// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApDyadhovJtybyqYbOYnoHx_EODgKKPZc",
  authDomain: "storecarnival-5f84d.firebaseapp.com",
  projectId: "storecarnival-5f84d",
  storageBucket: "storecarnival-5f84d.appspot.com",
  messagingSenderId: "846538450035",
  appId: "1:846538450035:web:81ebbd48464233ae94b606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(); 

export default app;
