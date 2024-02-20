import React from "react";


const Footer = () => {
  return (
    <div className="w-screen bg-black text-white flex flex-row justify-evenly py-14">
     

      <ul>
        <p className="font-bold text-2xl flex justify-center mb-5">Quick Links</p>
        <li className="done">Work</li>
        <li className="done">Services</li>
        <li className="done">Products</li>
        <li className="done">Tips & Tricks</li>
      </ul>
      <ul>
        <p className="font-bold text-2xl mb-5">Contect Us</p>
        <li className="done">Contect-No</li>
       
        <li className="done"><a href="www.linkedin.com/in/abhishek-maddheshiya-65174a259">Linkdin</a></li>
        <li className="done"><a href="https://www.instagram.com/abhishek_maddheshiya827/?hl=en">Instagram</a></li>
        <li className="done">Email  -  abhishekmaddheshiya954@gmail.com</li>
      </ul>
      <ul>
        <p className="font-bold text-2xl mb-5">Important Links</p>
        <li className="done"><a href="https://gate2024.iisc.ac.in/">GATE 2023 Official Site</a></li>
        <li className="done"><a href="https://www.sarkariresult.com/"></a>Sarkari Result</li>
        <li className="done"><a href="https://iisc.ac.in/">IIsc Benglore</a></li>
        <li className="done"><a href="https://www.iitb.ac.in/"></a>IIT Bombay</li>
      </ul>
    </div>
  );
};

export default Footer;
