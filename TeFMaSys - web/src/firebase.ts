import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDVSd-t9MioroHf1xEMFT5oMTmNbpskO4",
  authDomain: "tefmasys.firebaseapp.com",
  projectId: "tefmasys",
  storageBucket: "tefmasys.appspot.com",
  messagingSenderId: "457887304161",
  appId: "1:457887304161:web:fd5b6139b0cbdf80dd6aa0",
  measurementId: "G-MDZGHXGPR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
export {db,auth}
