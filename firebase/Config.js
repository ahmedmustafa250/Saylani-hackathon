import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   getDoc,
//   addDoc,
//   collection,
//   getDocs,
//   query,
//   where,
//   updateDoc,
//   onSnapshot,
// } from "firebase/firestore";
// import 
//   getStorage,
//   ref,
//   uploadBytes,
//   uploadString,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5XXmfsMX_1T9IY-zSroO10IaXMdW_0TY",
  authDomain: "final-hackathon-17507.firebaseapp.com",
  projectId: "final-hackathon-17507",
  storageBucket: "final-hackathon-17507.appspot.com",
  messagingSenderId: "695889241187",
  appId: "1:695889241187:web:0a231a5b78a3de3130c456"
};



const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

const app = initializeApp(firebaseConfig)

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  // db,
  // doc,
  // setDoc,
  // getDoc,
  // addDoc,
  // collection,
  // getDocs,
  // query,
  // where,
  // updateDoc,
  // onSnapshot,
  // storage,
  // ref,
  // uploadBytes,
  // uploadString,
  // uploadBytesResumable,
  // getDownloadURL,
};