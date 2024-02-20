import "./App.css";
import Navbar from "./components/Navbar";
import FirstPage from "./components/Landing";
import SecondPage from "./components/Secondpage";
import { Slider } from "./components/Slider";
import { TitleWrapper } from "./components/TitleRenderer";
import { Routes, Route } from "react-router";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { AboutUs } from "./AboutUs";
import { Syllabus } from "./Syllabus";
import Footer from "./components/Footer";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div className="h-screen w-dvw">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Topbar></Topbar>
              <div className="bg-landing bg-cover bg-no-repeat rounded-bl-full">
                <Navbar></Navbar>
                <FirstPage></FirstPage>
              </div>
              <SecondPage></SecondPage>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/content"
          element={
            <div className="bg-[#272727] h-dvh">
              <Navbar></Navbar>
              <TitleWrapper></TitleWrapper>
            </div>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <div className="bg-landing bg-cover w-vw h-vh">
              <Navbar></Navbar>
              <div className="flex flex-col justify-center items-center h-screen w-screen join-us">
                <SignUp></SignUp>
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <div className="bg-landing bg-cover w-vw h-vh">
              <Navbar></Navbar>
              <div className="flex flex-col justify-center items-center h-screen w-screen join-us">
                <SignIn></SignIn>
              </div>
            </div>
          }
        ></Route>
        <Route path="/cs" element={<Syllabus></Syllabus>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
