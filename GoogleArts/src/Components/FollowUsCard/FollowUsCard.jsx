import React from "react";
import Follow from "../../assets/images/Followus.jpeg";

const FollowUsCard = () => {
  return (
    <div className="flex items-center bg-blue-500 rounded-lg text-white p-0  md:w-[calc(70%-200px)] mx-auto overflow-hidden h-[70px] md:h-[120px]">
      <img
        src={Follow}
        alt="Follow us on Instagram"
        className=" w-[160px] md:w-[400px] h-[70px] md:h-[220px] object-cover rounded-lg opacity-70"
      />
      <div className="flex flex-col md:flex-col justify-center md:justify-center md:h-full md:ml-10 font-normal">
        <h2 className="md:text-2xl text-sm  font-normal md:font-normal ml-8 mt-3">
          Follow us on Instagram
        </h2>
        <p className="mt-1  text-xs md:text-sm font-semibold ml-2 text-nowrap">
          Keep up with the latest from arts and culture
        </p>
      </div>
    </div>
  );
};

export default FollowUsCard;
