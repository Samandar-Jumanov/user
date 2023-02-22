import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA35aTiIZrTHm-Eo1ZwbfzZCRzKeRV3uFc",
  authDomain: "crud-16567.firebaseapp.com",
  projectId: "crud-16567",
  storageBucket: "crud-16567.appspot.com",
  messagingSenderId: "809726034415",
  appId: "1:809726034415:web:082d19f885661742b8b61a",
  measurementId: "G-JN8H6ECK0P"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)