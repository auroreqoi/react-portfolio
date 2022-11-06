import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHx1WUdfSzgffPooICrT5czeD5wc2vQRU",
  authDomain: "react-portfolio-dashboar-c57a8.firebaseapp.com",
  projectId: "react-portfolio-dashboar-c57a8",
  storageBucket: "react-portfolio-dashboar-c57a8.appspot.com",
  messagingSenderId: "946642473085",
  appId: "1:946642473085:web:c26f6dade91a68ae59e114"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
