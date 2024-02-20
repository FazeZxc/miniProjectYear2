import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useState } from "react";
import { useAuthState } from "./useAuthState";
import { redirect, useNavigate } from "react-router";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { hookAuth, userSignOut } = useAuthState();
  const navigate = useNavigate();

  const signInUser = (e) => {
    signInWithEmailAndPassword(auth, email, password).then((value) => {
      alert("user Sign In");
      if (hookAuth) {
        navigate("/");
      }
    });
  };
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-lg bg-opacity-30">
      <h1 className="text-white text-4xl font-bold italic flex justify-center">Login</h1>
      <div>
        <div className="relative my-4">
          <label className="text-white text-sm duration-300 transform-translate scale-75 top-3 ">
            Email
          </label>
          <input
            className="text-white block w-72 py-2.5 px-0 text-small bg-transparent border-0 border-gray-300 appearance-none dark:focus:border-blue-gray-500 focus:outline-none focus:border-blue-600"
            type="email"
            placeholder="Enter your Email Id"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="relative my-4">
          <label className="text-white text-sm duration-300 transform-translate scale-75 top-3 ">
            Password{" "}
          </label>
          <input
            className="text-white block w-72 py-2.5 px-0 text-small bg-transparent border-0 border-gray-300 appearance-none dark:focus:border-blue-gray-500 focus:outline-none focus:border-blue-600"
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          onClick={signInUser}
          className="w-full bg-primary p-2 rounded-lg"
        >
          Sign In
        </button>
      </div>
      <br />
      <button className="text-primary" onClick={() => navigate("/signup")}>New here? </button>
    </div>
  );
};
