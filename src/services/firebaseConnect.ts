import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDllZJ1G9Gh5iu1D0tk0xlXnQserFSn4-8",
  authDomain: "devlink-62059.firebaseapp.com",
  projectId: "devlink-62059",
  storageBucket: "devlink-62059.appspot.com",
  messagingSenderId: "292178663058",
  appId: "1:292178663058:web:fd050441ea9288a0e0784b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };