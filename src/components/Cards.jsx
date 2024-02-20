import React from "react";
import { useNavigate } from "react-router";
import { useAuthState } from "../useAuthState";

const Cards = (props) => {
  console.log(props);
  const title = props.title;
  const src = props.src;
  const navigate = useNavigate();
  const { hookAuth, userSignOut } = useAuthState();
  function clickHandler() {
    if (hookAuth) {
      navigate("/content");
    } else {
      alert("You are not signed in!");
    }
  }

  return (
    <div className="w-96 p-4 border-2 border-primary shadow-2xl  ml-7 rounded-lg ">
      <img
        src={src}
        alt=""
        className="border-primary border-2 rounded-lg h-60 w-auto "
      />
      <div className="flex flex-col">
        <p className="p-4 mb-3">{title}</p>
        <button
          className="bg-primary border-[1px] text-white mt-5 rounded-lg p-2 mb-2 hover:text-primary hover:bg-white hover:border-black hover:border-[1px]"
          onClick={clickHandler}
        >
          Lets go
        </button>
      </div>
    </div>
  );
};
export default Cards;
