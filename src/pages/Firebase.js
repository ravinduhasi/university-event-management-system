// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBubWYb40n-2cIv1TPNPLjSW1mRmfFo4uM",
  authDomain: "taskform-8c494.firebaseapp.com",
  databaseURL: "https://taskform-8c494-default-rtdb.firebaseio.com",
  projectId: "taskform-8c494",
  storageBucket: "taskform-8c494.appspot.com",
  messagingSenderId: "544113440895",
  appId: "1:544113440895:web:ff116c0ad3c4766338274a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth };
export const db = getFirestore(app);
export { storage };