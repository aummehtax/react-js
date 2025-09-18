import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKT9SpOCUxwwm_tq-sMbQ_phr4MH_XAbM",
  authDomain: "fir-project-e3ad8.firebaseapp.com",
  projectId: "fir-project-e3ad8",
  storageBucket: "fir-project-e3ad8.firebasestorage.app",
  messagingSenderId: "664967176829",
  appId: "1:664967176829:web:e66ae84bf41252f0e1c714"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);