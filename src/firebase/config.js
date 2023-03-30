// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAu5tkffYjZlNGVOtNNFrIWucBQyasOlPQ",
  authDomain: "ecommerce-shop-72eff.firebaseapp.com",
  projectId: "ecommerce-shop-72eff",
  storageBucket: "ecommerce-shop-72eff.appspot.com",
  messagingSenderId: "72961765039",
  appId: "1:72961765039:web:7d105ae92101b394b46e5a",
  measurementId: "G-HBQXJJS6MZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
export default app;
