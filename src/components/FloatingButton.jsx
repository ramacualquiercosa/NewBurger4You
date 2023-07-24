import React from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

export const FloatingBotton = () => {
    function goTop(){
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
  return (
    <>
      <button onClick= {()=>goTop()} className="fixed bottom-4 right-4 text-white py-2 px-4 rounded-full  z-50">
      <IoIosArrowDropupCircle className="h-11 w-11 opacity-20 hover:opacity-80 duration-300"/>
      </button>
      </>
  );
};

