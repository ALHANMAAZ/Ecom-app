// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-IRwW8BP492NPuBEGH7zL2v42CXawZ_w",
  authDomain: "ecom-app-edc85.firebaseapp.com",
  projectId: "ecom-app-edc85",
  storageBucket: "ecom-app-edc85.appspot.com",
  messagingSenderId: "507976347608",
  appId: "1:507976347608:web:e9f8de3688075cb7778cad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
