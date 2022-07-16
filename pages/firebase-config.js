import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyALNE5E-D8GMPW-bjYlTzUIzzNvJJlNnPg",
  authDomain: "react-tutorial-b609c.firebaseapp.com",
  projectId: "react-tutorial-b609c",
  storageBucket: "react-tutorial-b609c.appspot.com",
  messagingSenderId: "802531661873",
  appId: "1:802531661873:web:18c20ffa07fda57adf9d10"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);