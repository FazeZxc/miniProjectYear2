
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoS0ykCt6YS0ESugkUxaeJcv9FVBZ2MS0",
  authDomain: "studyapp-95a64.firebaseapp.com",
  projectId: "studyapp-95a64",
  storageBucket: "studyapp-95a64.appspot.com",
  messagingSenderId: "669968289660",
  appId: "1:669968289660:web:55a29170ead3998f8b1ef9",
  measurementId: "G-4NY4C9FF2K"
};



const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
