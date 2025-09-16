
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBilE0-5JIoB6vXGF4_XNfCVfw4rybA4ow",
  authDomain: "first-project-cabe1.firebaseapp.com",
  projectId: "first-project-cabe1",
  storageBucket: "first-project-cabe1.firebasestorage.app",
  messagingSenderId: "104409716683",
  appId: "1:104409716683:web:0d6334b7f0c3098392884e",
  measurementId: "G-LYSDPWKM5W"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
