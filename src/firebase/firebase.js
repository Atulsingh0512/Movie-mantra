


import { initializeApp } from "firebase/app";
import { getFirestore ,collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMq4XE7L_eJpqErEDk8pDPIpEHrHGvDos",
  authDomain: "filmyverse-def56.firebaseapp.com",
  projectId: "filmyverse-def56",
  storageBucket: "filmyverse-def56.appspot.com",
  messagingSenderId: "1027904629010",
  appId: "1:1027904629010:web:397bfc277f32451aafabcb",
  measurementId: "G-BN9J9EPQ6N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;
