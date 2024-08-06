// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2otNA99kE0_x74XtpVVGU5as2jfsvh8o",
  authDomain: "realtor-clone-d1342.firebaseapp.com",
  projectId: "realtor-clone-d1342",
  storageBucket: "realtor-clone-d1342.appspot.com",
  messagingSenderId: "205397280093",
  appId: "1:205397280093:web:78f61370a9e6377f5ed4b4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();