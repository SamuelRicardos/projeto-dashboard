import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlmPajto4c5L72UVvFEPl1dHnvFji2pJM",
  authDomain: "projeto-dashboard-3eac0.firebaseapp.com",
  projectId: "projeto-dashboard-3eac0",
  storageBucket: "projeto-dashboard-3eac0.firebasestorage.app",
  messagingSenderId: "179083299256",
  appId: "1:179083299256:web:03d7481fc5e5242728274d",
  measurementId: "G-KVK7YBXPLC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };