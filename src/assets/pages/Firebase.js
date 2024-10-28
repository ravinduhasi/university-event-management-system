// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMAOxihbj_xn6JckfulpOhW2-p1nG-bC4",
  authDomain: "event-management-system-ad4d2.firebaseapp.com",
  projectId: "event-management-system-ad4d2",
  storageBucket: "event-management-system-ad4d2.appspot.com",
  messagingSenderId: "461225515446",
  appId: "1:461225515446:web:3c41aa3e46b8ad02020917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;