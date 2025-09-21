import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAtjxiwIc3SbVvQ3v0M8kRWqptnti9kCo4",
  authDomain: "fir-storage-3b77b.firebaseapp.com",
  projectId: "fir-storage-3b77b",
  storageBucket: "fir-storage-3b77b.firebasestorage.app",
  messagingSenderId: "867823780659",
  appId: "1:867823780659:web:46df31794f37c92de9f446" ,
  databaseURL :"https://fir-storage-3b77b-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)