import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxOpCQLNSX_GmmyHuLN16LY3dNHyaoNac",
    authDomain: "ticket-e7faa.firebaseapp.com",
    projectId: "ticket-e7faa",
    storageBucket: "ticket-e7faa.firebasestorage.app",
    messagingSenderId: "656653101604",
    appId: "1:656653101604:web:5261f4f6d605bd4b1646b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
