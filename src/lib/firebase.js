import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1b8f0.firebaseapp.com",
  projectId: "reactchat-1b8f0",
  storageBucket: "reactchat-1b8f0.appspot.com",
  messagingSenderId: "761005465192",
  appId: "1:761005465192:web:9651fd9044a797c987a5dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// for authentication
export const auth = getAuth(app);
// for user information
export const db = getFirestore(app);
// for images
export const storage = getStorage(app);
