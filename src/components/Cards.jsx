import React from "react";
import download2 from "../download2.jpg"
import { useNavigate } from "react-router";
import { useAuthState } from "../useAuthState";


const Cards = (props) => {
  console.log(props);
  const title = props.title;
  const navigate = useNavigate()
  const {hookAuth , userSignOut} = useAuthState()
  function clickHandler(){
    if(hookAuth){
      navigate("/content")
    }
    else{
      alert("You are not signed in!")
    }
  }
  
    return (
        <div className="w-[18rem] shadow-2xl opacity-100 ml-7 rounded-lg ">
          <img src={download2} alt=""  className="rounded-sm "/>
          <div className="mx-6">
            <p className="font-bold mb-3">{title}</p>
            
            
            <button className="bg-red-500 mt-5 rounded-lg p-2 mb-2" onClick={clickHandler}>Lets go</button>
          </div>
        </div>
      );
}
export default Cards;