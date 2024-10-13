import React from "react";
import Backgrounimage from "../../assets/images/LubinaRa.webp";
import ReadButton from "../ReadButton/ReadButton";

const OnlineExhibit = () => {
  return (
    <div className="flex justify-center items-center  mt-[800px] md:mt-0 h-[200px] md:min-h-screen mb-64 md:mb-0 cursor-pointer">
      <div className=" relative bg-white rounded-lg shadow-lg flex flex-row max-w-6xl w-full p-2 md:p-4  h-[280px] md:h-[420px] mt-[-1000px]">
        {/* Left Card */}
        <div className="relative flex-1 px-6 flex flex-col justify-start p-[30px] md:p-[40px]">
          <h1
            className=" relative  text-blue-700  text-lg md:text-xl text-center mt-0  md:mb-[20px]"
            style={{
              zIndex: 40,
            }}
          >
            Online Exhibit
          </h1>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h2 className=" text-sm md:text-lg mb-2">
              Life and Work on Lubina Humid RA
            </h2>
            <p className="text-gray-700 text-xs md:text-sm">
              The Turner Prize-winning British artist and Royal Academician
              discusses teaching, politics, and his mum.
            </p>
            <ReadButton>Read</ReadButton>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="flex-1 px-0 mt-0 ml-0 mr-0 h-[270px] md:h-[400px] relative md:p-[100px] object-cover"
          style={{
            backgroundImage: `url(${Backgrounimage})`,
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "50%",
              padding: "10px",
              zIndex: 50,
              fontSize: "30px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            <ion-icon
              name="share-social-outline"
              className="text-gray-600 cursor-pointer"
              style={{
                fontSize: "24px",
              }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineExhibit;
