// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"
import { 
    collection, 
    getDocs, getDoc,
    addDoc, 
    deleteDoc,  
    doc,
    query,
    where,
    setDoc,
    updateDoc,
    orderBy,
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnPlHxbq8ZtqUbuULd8eTL15tYf-iYqX4",
  authDomain: "e-commerce-94ae9.firebaseapp.com",
  projectId: "e-commerce-94ae9",
  storageBucket: "e-commerce-94ae9.firebasestorage.app",
  messagingSenderId: "935360300203",
  appId: "1:935360300203:web:aca94be7c12c20943be3ee",
  measurementId: "G-0MQQQHVX9S"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase Modules

export { auth, db, storage, collection, getDocs, addDoc, setDoc, deleteDoc,updateDoc, doc,orderBy,query,where, serverTimestamp,getDoc };



