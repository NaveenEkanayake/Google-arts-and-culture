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
        className="grid grid-cols-3 gap-4 p-4  mt-28"
        style={{
          backgroundColor: "rgba(255,245,254)",
        }}
      >
        <h2
          className="col-span-3  text-[2rem] leading-[2.5rem] mb-[1rem] text-center"
          style={{
            color: "rgba(28,58,159)",
          }}
        >
          Cast-off
        </h2>
        {/* First Image */}
        <div className="bg-gray-300 w-full rounded-lg flex items-center justify-center mb-4 h-[300px] ml-[220px] relative overflow-hidden">
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
            <div className="bg-blue-500 rounded-lg mb-1 w-[80px]">
              <h3 className="font-bold text-center">Artwork</h3>
            </div>
            <p className="text-white text-xl font-medium">Supermatism</p>
          </div>
        </div>

        <div className="bg-gray-300 rounded-lg flex items-center justify-center ml-[220px] relative overflow-hidden h-[300px] w-[370px]">
          <img
            src={Castoffimage1}
            alt="Topic Image 2"
            className="transition-transform duration-300 ease-in-out transform h-full w-full object-cover rounded-lg"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("scale-110");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("scale-110");
            }}
          />
          <div className="absolute bottom-2 left-2 text-white p-4">
            <div className="bg-blue-500 rounded-lg mb-1 w-[120px]">
              <h3 className="font-bold text-center custom-font">
                Color explorer
              </h3>
            </div>
            <p className="text-sm text-white custom-font">
              Brown in Geometric Abstraction
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div className="bg-gray-300 h-[620px] w-[450px] rounded-lg flex items-center justify-center ml-[-17px] relative overflow-hidden">
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
          <div className="absolute bottom-2 left-2 text-white p-4">
            <div className="bg-blue-500 rounded-lg mb-1 w-[80px]">
              <h3 className="font-bold text-center custom-font">Artist</h3>
            </div>
            <p className="text-xl text-white font-medium custom-font">
              Wassily Kandinsky
            </p>
          </div>
        </div>

        {/* Fourth */}
        <div className="bg-gray-300 rounded-lg flex items-center justify-center ml-[220px] mt-[-320px] relative overflow-hidden h-[290px] w-[395px]">
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
          <div className="absolute bottom-2 left-2 text-white p-4">
            <div className="bg-blue-500 rounded-lg mb-1 w-[80px]">
              <h3 className="font-bold text-center custom-font">Story</h3>
            </div>
            <p className="text-sm text-white custom-font">
              Join us on a journey through time to 1927 at the Dessau Bauhaus
            </p>
          </div>
        </div>

        {/* Fifth Image */}
        <div className="bg-gray-300 rounded-lg flex items-center justify-center mb-4  mt-[-317px] relative overflow-hidden h-72 w-[590px] ml-[2px]">
          <img
            src={Castoffimage5}
            alt="Topic Image 5"
            className="transition-transform duration-300 ease-in-out transform h-full w-full object-cover rounded-lg hover:scale-110 "
          />
          <div className="absolute bottom-2 left-2 text-white p-4">
            <div className="bg-blue-500 rounded-lg mb-1 w-20">
              <h3
                className="font-bold text-center text-lg"
                style={{
                  fontFamily:
                    '"Google Sans", "Noto Naskh Arabic UI", Arial, sans-serif',
                }}
              >
                Artist
              </h3>
            </div>
            <p
              className="text-xl font-medium text-white"
              style={{
                fontFamily:
                  '"Google Sans", "Noto Naskh Arabic UI", Arial, sans-serif',
              }}
            >
              Piet Mandarin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastoffCard;
