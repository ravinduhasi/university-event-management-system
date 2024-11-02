// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByb3OAi9HHlHQl2DlH9vtig-e9-SLkHZ4",
  authDomain: "event-management-68adc.firebaseapp.com",
  projectId: "event-management-68adc",
  storageBucket: "event-management-68adc.appspot.com",
  messagingSenderId: "99068419588",
  appId: "1:99068419588:web:c791f6a3eea4f8027b1f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
export const db = getFirestore(app);