import "./App.css";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/Secondpage";
import { Slider } from "./components/Slider";
import { TitleWrapper } from "./components/TitleRenderer";
import { Routes, Route, useNavigate } from "react-router";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { AboutUs } from "./AboutUs";
import { Syllabus } from "./Syllabus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen g-5">
       <div className="w-screen ">
       <Navbar></Navbar>
       </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="bg-[url('./download.webp')] bg-no-repeat">
                    
                    <FirstPage></FirstPage>
                  </div>
                 
                  <SecondPage></SecondPage>
                </>
              }
            ></Route>
            <Route
              path="/content"
              element={
                <>
                  <div className="bg-[url('./download.webp')] w-screen bg-no-repeat mb-6 pb-5">
                  
                  </div>
                  <TitleWrapper></TitleWrapper>
                </>
              }
            ></Route>
            <Route path="/signup" element={<div className="flex flex-col justify-center items-center h-screen w-screen join-us">
              <SignUp></SignUp>
            </div>}></Route>
            <Route path="/signin" element={<div className="flex flex-col justify-center items-center h-screen w-screen join-us">
              <SignIn></SignIn>
            </div>
            }></Route>
            <Route path="/cs" element={<Syllabus></Syllabus>}></Route>
            <Route path="/about" element={<AboutUs></AboutUs>}></Route>
          </Routes>
          <Footer></Footer>
    </div>
  );
}

export default App;
