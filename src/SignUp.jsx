import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUpNewUser = (e) => {
    e.preventDefault;
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      console.log(value);
    });
  };
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-lg bg-opacity-30">
      <h1 className="text-4xl font-bold italic flex justify-center">Sign Up</h1>
      <div>
        <div className="relative my-4">
          <label className="text-sm duration-300 transform-translate scale-75 top-3 ">
            Email
          </label>
          <input
            className="block w-72 py-2.5 px-0 text-small bg-transparent border-0 border-gray-300 appearance-none dark:focus:border-blue-gray-500 focus:outline-none focus:border-blue-600"
            type="email"
            placeholder="Enter your Email Id"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="relative my-4">
          <label className="text-sm duration-300 transform-translate scale-75 top-3 ">
            Password{" "}
          </label>
          <input
            className="block w-72 py-2.5 px-0 text-small bg-transparent border-0 border-gray-300 appearance-none dark:focus:border-blue-gray-500 focus:outline-none focus:border-blue-600"
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          onClick={signUpNewUser}
          className="flex justify-center bg-blue-gray-400 p-2 rounded-lg"
        >
          Sign Up
        </button>
      </div>
      <button onClick={() => navigate("/signin")}>Already have an account? </button>

    </div>
  );
};
