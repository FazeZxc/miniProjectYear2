import React from "react";
import { useNavigate } from "react-router";

const FirstPage = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center h-96 text-center">
      <p className="theme text-white text-5xl flex flex-row gap-4">
        Welcome to <h1 style={{fontFamily: "Anta"}} className="font-bold text-primary">EZLEARN</h1>{" "}
      </p>
      <br />
      <p className="hello text-white text-2xl">
        {" "}
        BEST ONLINE LEARNING<br></br> PLATFORM
      </p>
      <br />
      
      <div className="flex flex-col mt-5">
        <label className="text-white"> Start Learning</label>
        <button onClick={()=>{
            navigate("/signup")
        }} style={{ fontFamily: "Urbanist"}} className="bg-white py-2 px-2 rounded-lg text-primary font-semibold hover:text-white hover:bg-primary">
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
