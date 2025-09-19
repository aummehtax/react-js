import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeO2goSo3Iwz9p2VqhkzhxjqHVqlc8Uq4",
  authDomain: "crud-app-d57bd.firebaseapp.com",
  projectId: "crud-app-d57bd",
  storageBucket: "crud-app-d57bd.firebasestorage.app",
  messagingSenderId: "1069006770075",
  appId: "1:1069006770075:web:cea9cea6c8f03b7c075b3e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)