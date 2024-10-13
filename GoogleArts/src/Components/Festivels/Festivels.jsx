import React from "react";
import Roarimg from "../../assets/images/RoarImg.jpg";
import FestivelContent from "./FestivelContents/FestivelContent";

const Festivels = () => {
  return (
    <div
      className="
        flex py-20 px-7 md:py-96 md:px-96 md:h-80 
        bg-cover bg-bottom md:bg-center relative 
        mt-[-600px] md:mt-[-600px] 
      "
      style={{
        backgroundColor: "#e0c69b",
      }}
    >
      <div className="flex flex-col md:items-center md:justify-center absolute left-[50%] md:left-[40%] bottom-[78%] md:bottom-[84%] text-center transform -translate-x-1/2 md:translate-x-0">
        <h1 className="text-blue-950 md:text-4xl text-xl  font-medium md:font-normal tracking-wide text-nowrap">
          Celebrate 5 festivals around the world
        </h1>
        <p className="text-sm md:text-xl text-blue-950 font-normal mt-1 md:mt-3">
          Street parades, paint throwing, and more
        </p>
      </div>
      <FestivelContent />
    </div>
  );
};

export default Festivels;
