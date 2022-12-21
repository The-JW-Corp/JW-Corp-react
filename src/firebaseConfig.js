import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAdmZlASJwTso_ruRZmWs0vm8Xlkmrvxhk",
  authDomain: "jw-corp-website.firebaseapp.com",
  databaseURL: "https://jw-corp-website-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jw-corp-website",
  storageBucket: "jw-corp-website.appspot.com",
  messagingSenderId: "984520556511",
  appId: "1:984520556511:web:ba0c02fac98b8731a44e6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};