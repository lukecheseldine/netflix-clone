import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeZrA4ta6Ga9ncdWNJUrGNH-TggjtNXbw",
  authDomain: "netflix-clone-22c44.firebaseapp.com",
  projectId: "netflix-clone-22c44",
  storageBucket: "netflix-clone-22c44.appspot.com",
  messagingSenderId: "808207834046",
  appId: "1:808207834046:web:61bd15f10f3f6c472b77ef",
  measurementId: "G-SP9K2XJGS3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);