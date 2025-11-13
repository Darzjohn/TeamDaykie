// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc2aKOVyozIR4SCN-ePbOI7bxI_sxqKF0",
  authDomain: "teamdaykie.firebaseapp.com",
  projectId: "teamdaykie",
  storageBucket: "teamdaykie.firebasestorage.app",
  messagingSenderId: "1063892043301",
  appId: "1:1063892043301:web:1c03898048b20808b0e1cc",
  measurementId: "G-473QQK8877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication & database
export const auth = getAuth(app);
export const db = getFirestore(app);
