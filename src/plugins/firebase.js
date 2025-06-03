// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQA4ajRjBttpFSjXE7fMubza61ZKRtTUs",
  authDomain: "restaurantesapp-8630b.firebaseapp.com",
  projectId: "restaurantesapp-8630b",
  storageBucket: "restaurantesapp-8630b.firebasestorage.app",
  messagingSenderId: "695765040925",
  appId: "1:695765040925:web:ddce177b592b24d5572bf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
