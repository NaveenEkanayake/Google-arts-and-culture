import React from "react";
import Hiphop from "../../assets/images/Hiphop.jpeg";
import Marie from "../../assets/images/Marie.jpeg";
import IceSkating from "../../assets/images/IceSkating.jpeg";
import Vintage from "../../assets/images/Vintage.jpg";
import Button from "../ExploreButton/ExploreButton";
const KeepExploring = () => {
  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    pointerEvents: "none",
    zIndex: 1,
  };
  return (
    <>
      <div className="mt-[100px] flex justify-center items-center">
        <h1 className="text-center text-black text-4xl font-normal">
          Keep Exploring ...
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row mt-[80px] items-center justify-center">
        <div className="w-full sm:w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer mb-4 sm:mb-0">
          <div
            className="relative h-full"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1.1)";
              overlay.style.opacity = "0.5";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1)";
              overlay.style.opacity = "0";
            }}
          >
            <img
              src={Hiphop}
              alt="Hiphop"
              className="w-full h-full object-cover rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div className="overlay" style={overlayStyles} />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{ fontSize: "22px", bottom: "40px" }}
            >
              Casual
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{ fontSize: "15px", bottom: "20px" }}
            >
              Early Hiphop Style
            </p>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <Button>Explore</Button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer mb-4 sm:mb-0">
          <div
            className="relative h-full"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1.1)";
              overlay.style.opacity = "0.5";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1)";
              overlay.style.opacity = "0";
            }}
          >
            <img
              src={Marie}
              alt="Marie"
              className="w-full h-full object-cover rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div className="overlay" style={overlayStyles} />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{ fontSize: "22px", bottom: "40px" }}
            >
              Formal
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{ fontSize: "15px", bottom: "20px" }}
            >
              Dress like Marie Antoinette
            </p>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <Button>Explore</Button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer mb-4 sm:mb-0">
          <div
            className="relative h-full"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1.1)";
              overlay.style.opacity = "0.5";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1)";
              overlay.style.opacity = "0";
            }}
          >
            <img
              src={IceSkating}
              alt="Ice Skating"
              className="w-full h-full object-cover rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div className="overlay" style={overlayStyles} />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{ fontSize: "22px", bottom: "40px" }}
            >
              Sporty
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{ fontSize: "15px", bottom: "20px" }}
            >
              Get Shirty
            </p>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <Button>Explore</Button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer">
          <div
            className="relative h-full"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1.1)";
              overlay.style.opacity = "0.5";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img");
              const overlay = e.currentTarget.querySelector(".overlay");
              img.style.transition = "transform 0.5s ease";
              img.style.transform = "scale(1)";
              overlay.style.opacity = "0";
            }}
          >
            <img
              src={Vintage}
              alt="Vintage"
              className="w-full h-full object-cover rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div className="overlay" style={overlayStyles} />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{ fontSize: "22px", bottom: "40px" }}
            >
              Vintage
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{ fontSize: "15px", bottom: "20px" }}
            >
              Classic Style
            </p>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
              <Button>Explore</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeepExploring;
