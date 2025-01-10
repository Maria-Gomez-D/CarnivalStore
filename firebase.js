// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyApDyadhovJtybyqYbOYnoHx_EODgKKPZc",
    authDomain: "storecarnival-5f84d.firebaseapp.com",
    projectId: "storecarnival-5f84d",
    storageBucket: "storecarnival-5f84d.firebasestorage.app",
    messagingSenderId: "846538450035",
    appId: "1:846538450035:web:81ebbd48464233ae94b606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
export default app;
