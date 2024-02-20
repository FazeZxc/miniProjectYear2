import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full gap-3 font-serif font-bold text-lg justify-between p-4">
      <div className="flex flex-row gap-4 ">
        <div className="text-5xl text-white cursor-pointer" style={{fontFamily : "Anta"}} onClick={()=>{
            navigate("/")
        }}>EZLEARN</div>
      </div>
      {/* <div className="flex flex-row gap-4">
        <button className="text-white" onClick={() => navigate("/signin")}>Login</button>
        <button className="text-white" onClick={() => navigate("/signup")}>Sign Up</button>
      </div> */}
    </div>
  );
};

export default Navbar;
