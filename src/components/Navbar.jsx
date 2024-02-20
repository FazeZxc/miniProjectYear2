import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between  text-white pt-5 px-32 bg-[#000E27] py-4">
            <div>
               <div className="text-4xl">Ease Learning</div>
            </div>
            <div className="flex gap-3 font-serif font-bold text-lg mt-3">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About Us</button>
                <button onClick={() => navigate("/signup")}>Join-Us</button>
                <button onClick={() => navigate("/")}>Contact-Us</button>
            </div>
        </div>
    )
}

export default Navbar;