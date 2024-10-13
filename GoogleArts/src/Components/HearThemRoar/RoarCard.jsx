import React from "react";
import Roarimg from "../../assets/images/RoarImg.jpg";
import RoarCardContents from "./RoarCardContents/RoarCardContents";
const RoarCard = () => {
  return (
    <div
      className="flex md:py-96 md:px-96 h-80 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${Roarimg})`,
      }}
    >
      <div className="flex flex-col items-center justify-center absolute left-[10%] md:left-[40%] md:bottom-[80%] text-center mt-5 md:mt-0 ">
        <h1 className="text-white text-xl  md:text-4xl font-normal tracking-wide ">
          Hear them Roar
        </h1>
        <p className=" text-sm md:text-xl text-white font-normal mt-3">
          Meet the four superstars of the South African bush
        </p>
      </div>
      <RoarCardContents />
    </div>
  );
};

export default RoarCard;
