import React from "react";
import WildLife from "../../assets/images/WildLife.avif";
import PlayButton from "../PlaynowButton/PlayButton";
import Toucan from "../../assets/images/toucan.jpeg";

const TodayActivity = () => {
  return (
    <>
      <div className="h-screen w-full py-16 md:py-24 lg:py-96 px-4 md:px-24 lg:px-96 mt-[100px] relative bg-[#41C3C6]">
        <div className="absolute inset-0 flex justify-center lg:items-center xl:items-center bottom-[80%] md:items-center top-0">
          <h1 className="text-black mb-10 text-2xl md:text-4xl tracking-wider mt-5 absolute top-5">
            Today's Activity
          </h1>
        </div>

        <div
          className="h-[40vh] md:h-[70vh] px-0 md:px-8 lg:px-80 flex justify-center items-center relative mt-4 md:mt-[-290px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${WildLife})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-center text-white text-2xl md:text-3xl">
              Rewild The World
            </h1>
            <p className="mt-4 text-center text-white text-sm md:text-xl">
              Meet four threatened wildlife species in their natural habitat,
              and help heal their environment.
            </p>
          </div>

          <div className="absolute bottom-16 md:bottom-32 left-1/2 transform -translate-x-1/2 z-10 text-white">
            <PlayButton>Play now</PlayButton>
          </div>
        </div>

        <div className="py-2 mt-1 bg-purple-400 rounded-2xl flex items-center">
          <img
            src={Toucan}
            className="h-[100px] md:h-[100px] sm:h-[200px] w-[100px] md:w-[200px] sm:w-[500px] rounded-bl-2xl opacity-70 mr-4"
            alt="Toucan"
          />
          <div className="flex flex-col text-left">
            <h1 className="text-white text-md md:text-2xl font-normal">
              Why Rewilding
            </h1>
            <p className="text-white text-sm">
              Discover how ecosystems can be restored
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayActivity;
