// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVuKUjrP0K_znUZ37noaYZgkBmqoxdC5Q",
    authDomain: "iapptest-2737b.firebaseapp.com",
    projectId: "iapptest-2737b",
    storageBucket: "iapptest-2737b.appspot.com",
    messagingSenderId: "729882413349",
    appId: "1:729882413349:web:676e47eea77defc376b2cc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
