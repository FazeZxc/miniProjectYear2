import React from "react";
import cs from "./cs (1).pdf"

export const Syllabus = () => {
    return(
        <div>
            <embed src={cs} type="application/pdf" style={{width: "100vw" , height: "100vh"}} />
        </div>
    )
}