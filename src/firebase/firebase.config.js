// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_zCoH4wWLcFoxtVXXxrDv0CGZKS5KXXI",
  authDomain: "food-donation-bc75e.firebaseapp.com",
  projectId: "food-donation-bc75e",
  storageBucket: "food-donation-bc75e.appspot.com",
  messagingSenderId: "195078396406",
  appId: "1:195078396406:web:0e92ad52e25e8fcc198fd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;