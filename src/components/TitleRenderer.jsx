import { useState } from "react";
import { subjects, allSubjects } from "../../public/Content";
import { useAuthState } from "../useAuthState";

import { Link, useNavigate } from "react-router-dom";
export function TitleWrapper() {
  const [content, setContent] = useState([]);
  const [link , setLink ] = useState("");
  function renderSubHead(e) {
    setContent([allSubjects[e.target.id]]);
  }
  //   const [user] = useAuthState()
  const navigate = useNavigate();
  return (
    <div className="container-wrapper mb-12 w-1/2 flex flex-col">
      <div className="flex-row flex gap-2 mb-4  font-bold ">
        <button
          className="font-bold text-white text-xl  px-5  rounded-lg"
          onClick={() => navigate("/cs")}
        >
          {" "}
          Syllabus
        </button>
        <button
          className="font-bold text-white text-xl  px-5  rounded-lg"
          onClick={() => navigate("/about")}
        >
          {" "}
          About-Us
        </button>
        <button
          className="font-bold text-white text-xl  px-5  rounded-lg"
          onClick={() => navigate("/")}
        >
          {" "}
          Home
        </button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <div id="right-container">
            {subjects.map((item) => {
              return (
                <>
                  <div
                    id={item.id}
                    onClick={renderSubHead}
                    className="subjects"
                  >
                    {item.title}
                  </div>
                </>
              );
            })}
          </div>
          <div id="right-container">
            {content.map((sub) => (
              <div>
                {sub.map((item) => (
                  <div
                    className="subjects"
                    onClick={() => {
                      // window.location.href = item.src;
                      setLink(item.src)
                      console.log(item.src);
                    }}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div >
          <iframe className="rounded-xl px-4 h-full w-[900px]" src={link}></iframe>
        </div>
      </div>
    </div>
  );
}
