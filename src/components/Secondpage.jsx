import React from "react";
import download1 from "../download1.webp";
import Cards from "./Cards";
import { Data } from "./Data";
import Footer from "./Footer";
import { Slider } from "./Slider";
const SecondPage = () => {
  return (
    <div>
      <div className=" w-dvw grid grid-cols-1 sm:grid-cols-2 mt-4 py-8 bg-[#F5F5F5] border-b-[1px] border-black">
        <div>
          <img src={download1} className="mx-4 rounded-xl"></img>
        </div>
        <div className="pl-10 text-center ">
          <h1
            className="text-3xl font-bold rounded-2xl p-2"
            style={{ fontFamily: "Poppins" }}
          >
            GATE
          </h1>
          <br />
          <p style={{ fontFamily: "Urbanist" }} className="text-xl text-left mx-8">
            The Graduate Aptitude Test in Engineering (GATE) is an examination
            that primarily tests the comprehensive understanding of various
            undergraduate subjects in engineering and science for admission into
            the Masters Program and Recruitment by some Public Sector Companies.
            GATE Examination is conducted jointly by the seven Indian Institutes
            of Technology at Mumbai, Delhi, Guwahati, Kanpur, Kharagpur,
            Chennai, Roorkee & Indian Institute of Science at Bengaluru on
            behalf of the National Coordination Board – GATE, The Department of
            Higher Education, Ministry of Education (MoE), Government of India.
          </p>
        </div>
      </div>
      <div className="pt-12">
        <p style={{fontFamily: "Poppins"}} className="text-center font-bold text-5xl mb-14 underline text-black">BRANCHES</p>
        <div className="flex  justify-evenly">
          {Data.map((item) => {
            return (
              <Cards key={item.id} title={item.title} src={item.src}></Cards>
            );
          })}
        </div>
      </div>
      <div className="mt-14">
        <p className="text-center font-bold text-5xl mb-14 underline">Top Voices</p>
      </div>
        <div className="flex justify-center items-center mb-14">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default SecondPage;
