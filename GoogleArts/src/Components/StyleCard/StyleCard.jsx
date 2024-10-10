import React from "react";
import Hiphop from "../../assets/images/Hiphop.jpeg";
import Marie from "../../assets/images/Marie.jpeg";
import IceSkating from "../../assets/images/IceSkating.jpeg";
import Vintage from "../../assets/images/Vintage.jpg";
import Button from "../ExploreButton/ExploreButton";
const StyleCard = () => {
  return (
    <>
      <div className="mt-[100px] flex justify-center items-center">
        <h1
          className="text-center text-black text-4xl  font-normal"
          style={{
            fontSize: "36px",
          }}
        >
          What's Your Style
        </h1>
      </div>
      <div className="flex mt-[80px] items-center justify-center">
        {/* First Div*/}
        <div className="w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer">
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
              className="bg-cover h-full rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div
              className="overlay"
              style={{
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
              }}
            />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{
                fontSize: "22px",
                bottom: "40px",
                zIndex: 2,
              }}
            >
              Casual
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{
                fontSize: "15px",
                bottom: "20px",
                zIndex: 2,
              }}
            >
              Early Hiphop Style
            </p>
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-2"
              style={{ zIndex: 2 }}
            >
              <Button>Explore</Button>
            </div>
          </div>
        </div>

        {/* Second Div*/}
        <div className="w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer">
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
              alt="Hiphop"
              className="bg-cover h-full rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div
              className="overlay"
              style={{
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
              }}
            />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{
                fontSize: "22px",
                bottom: "40px",
                zIndex: 2,
              }}
            >
              Formal
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{
                fontSize: "15px",
                bottom: "20px",
                zIndex: 2,
              }}
            >
              Dress like Marie Antoinette
            </p>
          </div>
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-2"
            style={{ zIndex: 2 }}
          >
            <Button>Explore</Button>
          </div>
        </div>
        {/* Third Div*/}
        <div className="w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer">
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
              alt="Hiphop"
              className="bg-cover h-full rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div
              className="overlay"
              style={{
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
              }}
            />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{
                fontSize: "22px",
                bottom: "40px",
                zIndex: 2,
              }}
            >
              Sporty
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{
                fontSize: "15px",
                bottom: "20px",
                zIndex: 2,
              }}
            >
              Get Shirty
            </p>
          </div>
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-2"
            style={{ zIndex: 2 }}
          >
            <Button>Explore</Button>
          </div>
        </div>
        {/* Fourth Div*/}
        <div className="w-[290px] mx-4 h-96 rounded-lg relative inline-block overflow-hidden cursor-pointer">
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
              alt="Hiphop"
              className="bg-cover h-full rounded-lg"
              style={{ transition: "transform 0.5s" }}
            />
            <div
              className="overlay"
              style={{
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
              }}
            />
            <h1
              className="absolute inset-0 flex items-center justify-center text-white font-normal mb-10 tracking-wider"
              style={{
                fontSize: "22px",
                bottom: "40px",
                zIndex: 2,
              }}
            >
              Vintage
            </h1>
            <p
              className="absolute inset-0 flex items-center justify-center text-white tracking-wide"
              style={{
                fontSize: "15px",
                bottom: "20px",
                zIndex: 2,
              }}
            >
              San Fran's CounterCulture
            </p>
          </div>
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-2"
            style={{ zIndex: 2 }}
          >
            <Button>Explore</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleCard;
