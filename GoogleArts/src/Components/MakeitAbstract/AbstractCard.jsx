import React from "react";
import Backgrounimage from "../../assets/images/abstractCard.webp";

const AbstractCard = () => {
  return (
    <>
      <div className="mb-12">
        <div className="text-center text-4xl font-sans mt-20 mb-4">
          <h1>Make it an abstract</h1>
        </div>
        <div className="flex justify-center items-center h-[420px]">
          <div className="bg-white rounded-lg shadow-lg flex flex-row max-w-6xl w-full p-4 relative h-[420px]">
            <div className="relative flex-1 px-6 flex flex-col justify-start py-24">
              <h1
                className="text-sm text-center text-blue-600 py-4 px-8  relative tracking-wider"
                style={{
                  bottom: "50%",
                }}
              >
                EXPERIMENT
              </h1>
              <div className="mt-0 mb-10 text-center">
                <h2 className="text-2xl mb-2">With Art Transfer 2</h2>
                <p className="text-gray-500 text-sm tracking-normal">
                  Let AI transform what you see
                </p>
                <button className="bg-[#007FFF] text-white rounded-lg px-7 py-2 mt-5 cursor-pointer">
                  Play
                </button>
              </div>
            </div>
            <div
              className="flex-1 px-0 relative h-[400px] bg-cover object-left"
              style={{
                backgroundImage: `url(${Backgrounimage})`,
              }}
            >
              <div className="absolute top-2 right-2 rounded-full p-2 z-50 text-3xl text-white">
                <ion-icon name="share-social-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbstractCard;
