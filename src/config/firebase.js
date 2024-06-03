import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIZanYfhnUbm8BTgfHJbYd-CMWLa-lWWk",
    authDomain: "deep-dives-weekly.firebaseapp.com",
    projectId: "deep-dives-weekly",
    storageBucket: "deep-dives-weekly.appspot.com",
    messagingSenderId: "872280320528",
    appId: "1:872280320528:web:bdcdbd1dcbd305e2f5f895"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)