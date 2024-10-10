import React from "react";
import WildLife from "../../assets/images/WildLife.avif";
import PlayButton from "../PlaynowButton/PlayButton";
import Toucan from "../../assets/images/toucan.jpeg";

const TodayActivity = () => {
  return (
    <>
      <div
        className="h-screen w-full py-96 px-96 mt-[100px]"
        style={{
          backgroundColor: "rgb(65, 195, 198)",
        }}
      >
        <div>
          <h1
            className="fixed inset-0 flex justify-center items-center text-black text-4xl tracking-wider"
            style={{
              position: "absolute",
              marginBottom: "700px",
              top: "88%",
            }}
          >
            Today's Activity
          </h1>
        </div>
        <div
          className="h-[60vh] px-80 flex justify-center items-center relative mt-[-290px] bg-cover bg-center"
          style={{ backgroundImage: `url(${WildLife})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-center text-white text-3xl">
              Rewild The World
            </h1>
            <p className="mt-4 text-center text-white text-xl">
              Meet four threatened wildlife species in their natural habitat,
              and help heal their environment.
            </p>
          </div>

          <div
            className="absolute bottom-48 left-1/2 transform -translate-x-1/2 z-2 text-white"
            style={{ zIndex: 1 }}
          >
            <PlayButton>Play now</PlayButton>
          </div>
        </div>
        <div
          className="py-4 mt-1 bg-purple-400 rounded-2xl flex items-center"
          style={{
            height: "100px",
            position: "relative",
          }}
        >
          <img
            src={Toucan}
            className="h-[100px] w-[250px] mr-4"
            style={{
              borderBottomLeftRadius: "15px",
              opacity: 0.7,
            }}
            alt="Toucan"
          />
          <div className="flex flex-col">
            <h1 className="text-white text-lg ml-28">Why Rewilding</h1>
            <p className="text-white text-sm ml-28">
              Discover how ecosystems can be restored
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayActivity;
