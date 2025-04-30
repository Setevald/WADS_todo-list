// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQgGMKGpCIe9A_Fbo5-W39kXFxdE9dMqA",
  authDomain: "to-do-list-authenticatio-9c0b4.firebaseapp.com",
  projectId: "to-do-list-authenticatio-9c0b4",
  storageBucket: "to-do-list-authenticatio-9c0b4.firebasestorage.app",
  messagingSenderId: "78477089226",
  appId: "1:78477089226:web:05d5021b647000997a9733",
  measurementId: "G-EDTZWRDS9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
export default app;