import React from "react";


const Footer = () => {
  return (
    <div className="w-dvw px-56 bg-[#F5F5F7] text-black grid grid-cols-3 py-14">
      <ul>
        <p className="font-bold text-2xl mb-5 underline">Quick Links</p>
        <li className="done">Work</li>
        <li className="done">Services</li>
        <li className="done">Products</li>
        <li className="done">Tips & Tricks</li>
      </ul>
      <ul>
        <p className="font-bold text-2xl mb-5 underline">Contact Us</p>
        <li className="done">Contact-No</li>
       
        <li className="done"><a href="www.linkedin.com/in/abhishek-maddheshiya-65174a259">LinkedIn</a></li>
        <li className="done"><a href="https://www.instagram.com/abhishek_maddheshiya827/?hl=en">Instagram</a></li>
        <li className="done">Email</li>
      </ul>
      <ul>
        <p className="font-bold text-2xl mb-5 underline">Important Links</p>
        <li className="done"><a href="https://gate2024.iisc.ac.in/">GATE 2024 Official Site</a></li>
        <li className="done"><a href="https://www.sarkariresult.com/"></a>Sarkari Results</li>
        <li className="done"><a href="https://iisc.ac.in/">IISc Bangalore</a></li>
        <li className="done"><a href="https://www.iitb.ac.in/"></a>IIT Bombay</li>
      </ul>
    </div>
  );
};

export default Footer;
