import React from "react";
import Follow from "../../assets/images/Followus.jpeg";

const FollowUsCard = () => {
  return (
    <div className="flex items-center bg-blue-500 rounded-lg text-white p-0 w-[calc(70%-200px)] mx-auto overflow-hidden h-[120px]">
      <img
        src={Follow}
        alt="Follow us on Instagram"
        className="w-[400px] h-[220px] object-cover rounded-lg opacity-70"
      />
      <div className="flex flex-col justify-center h-full ml-10 font-sans">
        <h2 className="text-2xl font-normal">Follow us on Instagram</h2>
        <p className="mt-1 text-sm font-semibold">
          Keep up with the latest from arts and culture
        </p>
      </div>
    </div>
  );
};

export default FollowUsCard;
