import { useState } from "react";
import { subjects,allSubjects } from "../../public/Content";
import { useAuthState } from "../useAuthState";

import {Link, useNavigate} from "react-router-dom"
export function TitleWrapper() {
  const [content, setContent] = useState([]);
  function renderSubHead(e) {
    setContent([allSubjects[e.target.id]]);
  }
//   const [user] = useAuthState()
const navigate = useNavigate()
  return (
  
    <div className="container-wrapper mb-12 flex justify-evenly items-center">
    <div className="flex-col flex gap-5 mr-44 font-bold text-xl w-auto h-auto bg-blue-100 p-10 rounded-lg">
    <button className="font-bold text-xl hover:bg-blue-500 px-5 py-2 rounded-lg" onClick={() => navigate("/cs")}> Syllabus</button>
    <button className="font-bold text-xl hover:bg-blue-500 px-5 py-2 rounded-lg" onClick={() => navigate("/about")}> About-Us</button>
    <button className="font-bold text-xl hover:bg-blue-500 px-5 py-2 rounded-lg" onClick={() => navigate("/")}> Home</button>
    </div>
      <div id="right-container">
        {subjects.map((item) => {
          return (
            <>
              <div id={item.id} onClick={renderSubHead} className="subjects">
                {item.title}
              </div>
            </>
          );
        })}
      </div>
      <div id="right-container">
        {content.map((sub) => (
          <div >
            {sub.map((item) => (
              <div className="subjects" onClick={()=>{
                window.location.href=item.src
              }}>{item.title}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


