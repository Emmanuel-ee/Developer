// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2fRdT2_FdEMehNiZVcleKS7rixCfdLDE",
  authDomain: "twin-55a99.firebaseapp.com",
  databaseURL: "https://twin-55a99-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twin-55a99",
  storageBucket: "twin-55a99.appspot.com",
  messagingSenderId: "1043969596799",
  appId: "1:1043969596799:web:f52018ac4664c55e918e4a",
  measurementId: "G-HSC3YKF258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app