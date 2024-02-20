import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const useAuthState = () => {
  const [hookAuth, setHookAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setHookAuth(true);
      } else {
        setHookAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);


  function userSignOut() {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
        window.location.href='/register'
      })
      .catch((error) => console.log(error));
  }

  return { hookAuth , userSignOut };
};
