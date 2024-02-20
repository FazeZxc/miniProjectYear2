
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmGLtwQdxQ5W4vkLj0pBWOBfCWI6TcS_E",
  authDomain: "college-project-ed097.firebaseapp.com",
  projectId: "college-project-ed097",
  storageBucket: "college-project-ed097.appspot.com",
  messagingSenderId: "604104163237",
  appId: "1:604104163237:web:43f5827717614af7e1f24c"
};



const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
