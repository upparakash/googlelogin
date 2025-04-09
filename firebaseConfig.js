// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfEhLFalkm7xO9E1gesPY5jx6Vg4b_U0g",
    authDomain: "s2service-d23c5.firebaseapp.com",
    projectId: "s2service-d23c5",
    storageBucket: "s2service-d23c5.firebasestorage.app",
    messagingSenderId: "387215750150",
    appId: "1:387215750150:android:6480446bae95bd89207f87"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export authentication instance
export const auth = getAuth(app);
export default app;
