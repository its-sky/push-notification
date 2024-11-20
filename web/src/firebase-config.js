// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbk6H7V5JrOI4FlJgCTBZOh2eCmBuy88g",
  authDomain: "push-test-f29b7.firebaseapp.com",
  projectId: "push-test-f29b7",
  storageBucket: "push-test-f29b7.firebasestorage.app",
  messagingSenderId: "1070329985176",
  appId: "1:1070329985176:web:a0a0db2920f71362ac38ed",
  measurementId: "G-J2RGK1VPLX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const messaging = getMessaging(firebaseApp);

export { firebaseApp, analytics, messaging };