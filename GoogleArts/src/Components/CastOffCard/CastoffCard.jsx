import React from "react";
import Castoffimage1 from "../../assets/images/castoff1.webp";
import Castoffimage2 from "../../assets/images/castoff2.webp";
import Castoffimage3 from "../../assets/images/castoff3.webp";
import Castoffimage4 from "../../assets/images/castoff4.webp";
import Castoffimage5 from "../../assets/images/castoff5.jpg";

const CastoffCard = () => {
  return (
    <div>
      <div
        className="grid grid-cols-3 md:gap-4 p-4 mt-28 cursor-pointer"
        style={{
          backgroundColor: "rgba(255,245,254)",
        }}
      >
        <h2
          className="col-span-3 text-[2rem] leading-[2.5rem] mb-[1rem] text-center 
             sm:text-[1.5rem] sm:leading-[2rem] 
             md:text-[1.75rem] md:leading-[2.25rem]"
          style={{
            color: "rgba(28,58,159)",
          }}
        >
          Cast-off
        </h2>

        {/* First Image */}
        <div className="w-[150px] md:w-[615px] rounded-lg flex items-center justify-center mb-4 h-[100px] md:h-[300px] md:ml-[220px] ml-[-2px] md:mr-0   relative overflow-hidden">
          <img
            src={Castoffimage1}
            alt="Topic Image 1"
            className="transition-transform duration-300 ease-in-out transform h-full w-full object-cover rounded-lg"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("scale-110");
            }}
          />
          <div className="absolute bottom-2 left-2 text-white p-4">
            <p className="text-white  mt-6 mr-7 text-sm md:text-2xl font-normal text-nowrap">
              The Great Britain Ship
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="rounded-lg flex items-center justify-center ml-[43px] md:ml-[220px] relative overflow-hidden h-[110px] md:h-[300px] w-[100px] md:w-[370px]">
          <img
            src={Castoffimage2}
            alt="Topic Image 2"
            className="transition-transform duration-300 ease-in-out transform h-full w-full object-cover rounded-lg"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("scale-110");
            }}
          />
          <div className="absolute bottom-2 left-2 text-white p-2 sm:p-4">
            <h1 className="text-white  mt-6 mr-7 text-sm md:text-2xl font-normal md:text-nowrap">
              How Phoenicians made boats
            </h1>
          </div>
        </div>

        {/* Third Image */}
        <div className="h-[220px] md:h-[620px] w-[110px] md:w-[450px] rounded-lg flex items-center justify-center md:ml-[-17px] ml-9 relative overflow-hidden">
          <img
            src={Castoffimage3}
            alt="Topic Image 3"
            className="transition-transform duration-300 ease-in-out transform h-full w-full object-cover rounded-lg"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("scale-110");
            }}
          />
          <div className="absolute bottom-2 left-2 text-white p-2 sm:p-4">
            <h1 className="text-white  mt-6 mr-7 text-sm md:text-2xl font-normal">
              Portrait of Vincent van Gogh
            </h1>
          </div>
        </div>

        {/* Fourth Image */}
        <div className="rounded-lg flex items-center justify-center md:ml-[220px] md:mt-[-320px] mt-[-110px] md:mb-[200px] relative overflow-hidden h-[100px] w-[150px] md:h-[290px] md:w-[395px]">
          <img
            src={Castoffimage4}
            alt="Topic Image 4"
            className="transition-transform duration-300 ease-in-out transform h-full w-full object-cover rounded-lg"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("scale-110");
            }}
          />
          <div className="absolute bottom-2 left-2 text-white p-2 sm:p-4">
            <h1 className="text-white  mt-6 mr-7 text-sm md:text-2xl font-normal">
              Classic Wooden Ship
            </h1>
          </div>
        </div>

        {/* Fifth Image */}
        <div className="rounded-lg flex items-center justify-center md:mb-4 mb-[50px] md:mt-[-320px] mt-[-108px] relative overflow-hidden w-[100px] h-[100px] md:h-72 md:w-[590px] ml-[43px] md:ml-[2px]  md:mr-0">
          <img
            src={Castoffimage5}
            alt="Topic Image 5"
            className="transition-transform duration-300 ease-in-out transform h-48 w-full sm:h-64 md:h-full object-cover rounded-lg hover:scale-110"
          />
          <div className="absolute md:bottom-2 md:left-2 text-white p-4">
            <h1 className="text-white  mt-6 mr-7 text-sm md:text-2xl font-normal">
              HMS Beagle
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastoffCard;
