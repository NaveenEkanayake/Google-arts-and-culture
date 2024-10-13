import React from "react";
import Miniature from "../../assets/images/Minature.webp";
import Pigozzi from "../../assets/images/Africatojapan.webp";
import Museum from "../../assets/images/Meum.webp";

const StepinsdeGallery = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-[50px] md:mt-[-150px]">
      <div className="flex flex-col items-center cursor-pointer">
        <h2 className="  text-xl mb:text-4xl mb-2 ">Step Inside a Gallery</h2>
        <h4 className="text-gray-500 mb-6 tracking-wider">
          With Augmented Reality
        </h4>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
          {/* First Card */}
          <div className="flex flex-col items-center">
            <div
              className="relative inline-block  w-[350px] md:w-[450px] md:h-[240px] bg-gray-400 rounded-[10px]"
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src={Miniature}
                alt="Step Image"
                className="transition-transform duration-300 ease-in-out transform"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add("scale-110");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("scale-110");
                }}
              />
            </div>
            <div className="mt-2 flex items-center w-full">
              <div className="text-left">
                <h3 className=" md:ml-0 ml-32 text-md font-normal">
                  Discover Indian Miniatures
                </h3>
                <p className="text-sm md:ml-0 ml-32  text-gray-500 tracking-wider">
                  See the tiny work up close
                </p>
              </div>
              <div className="ml-32 md:ml-auto">
                <ion-icon
                  name="share-social-outline"
                  className="text-gray-600 cursor-pointer"
                  style={{ fontSize: "24px" }}
                ></ion-icon>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col items-center">
            <div
              className="relative inline-block   w-[350px] md:w-[450px]  md:h-[240px] bg-gray-400 rounded-[10px]"
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src={Pigozzi}
                alt="Step Image"
                className="transition-transform duration-300 ease-in-out transform"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add("scale-110");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("scale-110");
                }}
              />
            </div>
            <div className="mt-2 flex items-center w-full">
              <div className="text-left">
                <h3 className="md:ml-0 ml-32 text-md font-normal">
                  Inside the Jean Pigozzi Collection
                </h3>
                <p className="text-sm md:ml-0 ml-32 text-gray-500 tracking-wider">
                  Art from Africa to Japan
                </p>
              </div>
              <div className="ml-20 md:ml-auto">
                <ion-icon
                  name="share-social-outline"
                  className="text-gray-600 cursor-pointer"
                  style={{ fontSize: "24px" }}
                ></ion-icon>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex flex-col items-center">
            <div
              className="relative inline-block   w-[350px] md:w-[450px]  md:h-[240px] bg-gray-400 rounded-[10px]"
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src={Museum}
                alt="Step Image"
                className="transition-transform duration-300 ease-in-out transform"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add("scale-110");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("scale-110");
                }}
              />
            </div>
            <div className="md:mt-2 flex items-center w-full md:mb-0 mb-[-200px]">
              <div className=" ml-[70px] md:ml-0text-left md:mt-0">
                <h3 className="md:ml-0   ml-14 text-md font-normal">
                  Getty Museum: Immersive Experience
                </h3>
                <p className=" text-xs md:text-sm md:ml-0 ml-14 text-gray-500 tracking-wider text-nowrap">
                  Discover paintings from Los Angeles' iconic collection
                </p>
              </div>
              <div className=" mr-28 md:mr-0 md:ml-auto">
                <ion-icon
                  name="share-social-outline"
                  className="text-gray-600 cursor-pointer ml-32 md:ml-auto"
                  style={{ fontSize: "24px" }}
                ></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepinsdeGallery;
