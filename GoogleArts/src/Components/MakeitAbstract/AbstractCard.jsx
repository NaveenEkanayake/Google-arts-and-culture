import React from "react";
import Backgrounimage from "../../assets/images/abstractCard.webp";

const AbstractCard = () => {
  return (
    <div className="mb-12 p-4 md:p-0">
      <div className="text-center text-3xl md:text-4xl font-sans mt-12 mb-4">
        <h1>Make it an abstract</h1>
      </div>
      <div className="flex flex-row justify-center items-center h-auto">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl w-full p-4 relative">
          <div className="relative flex-1 px-4 flex flex-col justify-start py-8 md:py-12 w-full lg:w-1/3">
            <h1 className="text-sm text-center text-blue-600 py-2 px-4 relative tracking-wider">
              EXPERIMENT
            </h1>
            <div className="mt-0 mb-4 text-center">
              <h2 className="text-lg sm:text-xl mb-2">With Art Transfer 2</h2>
              <p className="text-gray-500 text-xs sm:text-sm tracking-normal">
                Let AI transform what you see
              </p>
              <button className="bg-[#007FFF] text-white rounded-lg w-full sm:w-auto px-4 sm:px-6 py-2 mt-4 cursor-pointer">
                Play
              </button>
            </div>
          </div>
          <div className="flex-1 h-auto md:h-[300px] w-full lg:w-2/3 relative">
            <div className="absolute top-2 right-2 rounded-full p-2 z-50 text-3xl text-white">
              <ion-icon name="share-social-outline"></ion-icon>
            </div>
            <img
              src={Backgrounimage}
              alt="Abstract Background"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractCard;
