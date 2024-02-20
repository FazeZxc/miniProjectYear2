import React from "react";
import Studentimage from "./Studentimage.jpg";
import student2 from "./student2.webp";
import { Navbar } from "@material-tailwind/react";

export const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 sm:text-6xl">
            About Us
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition duration-300 border-b-4 border-transparent hover:border-blue-500 focus:border-blue-500">
          <div className="cursor-pointer">
            <img src={Studentimage} alt="Student" className="w-full rounded-lg" />
          </div>
          <div className="cursor-pointer">
            <h1 className="text-3xl font-bold text-gray-800">
              "Simplify Learning with learnEase: Your Educational Gateway"
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Welcome to Learn Ease, your premier destination for comprehensive
              GATE preparation resources. Our platform is dedicated to empowering
              aspiring engineers like you to achieve your academic and professional
              goals through top-notch study materials, expert guidance, and personalized
              support.
              {/* More content goes here */}
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition duration-300 border-b-4 border-transparent hover:border-blue-500 focus:border-blue-500">
          <div className="lg:order-last cursor-pointer">
            <img src={student2} alt="Student" className="w-full rounded-lg" />
          </div>
          <div className="cursor-pointer">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission &amp; Features
            </h2>
            <ol className="list-decimal list-inside text-gray-600 text-lg">
            <li>Comprehensive Study Materials: We offer a vast repository of study materials, including notes, and video lectures, covering all topics and subjects included in the GATE syllabus.</li>
                    <li>Expert Guidance: Our team of experienced educators and industry professionals is committed to providing expert guidance and support at every step of your GATE preparation journey. From exam strategy tips to personalized study plans, we're here to help you navigate the complexities of the GATE exam with confidence.</li>
                    <li>Interactive Learning: We believe in the power of interactive learning. Our platform features engaging learning resources, interactive quizzes, and real-time progress tracking tools designed to enhance comprehension and retention.</li>
                    <li>Community Support: Join a vibrant community of fellow GATE aspirants, where you can connect, collaborate, and share knowledge. Our forums, discussion groups, and peer-to-peer support networks provide invaluable opportunities for collaboration and learning.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};