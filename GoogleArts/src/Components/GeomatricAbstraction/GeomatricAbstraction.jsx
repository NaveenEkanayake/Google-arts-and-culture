import React from "react";
import Supermatism from "../../assets/images/Supermatism.jpeg";
import Geomatricabstraaction from "../../assets/images/Geomatric.jpeg";
import wassily from "../../assets/images/Wassil.jpeg";
import Piet from "../../assets/images/piet.jpeg";
import Bauhas from "../../assets/images/Bauhas.jpeg";

const GeomatricAbstraction = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-4 md:mt-0 mt-[300px] cursor-pointer">
        <h2 className="col-span-3 text-black text-[2rem] leading-[2.5rem] mb-[1rem] text-center">
          Today's topic: Geometric abstraction
        </h2>

        {/* First Image */}
        <div className=" w-[150px] md:w-[615px] rounded-lg flex items-center justify-center mb-4 h-[100px] md:h-[300px] md:ml-[220px] ml-[-2px] md:mr-0   relative overflow-hidden">
          <img
            src={Supermatism}
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
            <div className="bg-blue-500 rounded-lg mb-1 w-[80px] sm:w-[100px] md:w-[120px]">
              <h3 className="font-bold text-center text-sm sm:text-base">
                Artwork
              </h3>
            </div>
            <p className="text-white text-base sm:text-xl font-medium">
              Supermatism
            </p>
          </div>
        </div>

        <div className="rounded-lg flex items-center justify-center ml-[43px] md:ml-[220px] relative overflow-hidden h-[110px] md:h-[300px] w-[100px] md:w-[370px]">
          <img
            src={Geomatricabstraaction}
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
            <div className="bg-blue-500 rounded-xs mb-1 w-[100px] mr-10 sm:w-[120px]">
              <h3 className="font-bold  right-[10px] md:text-center  text-xs sm:text-base">
                Color explorer
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white custom-font">
              Brown in Geometric Abstraction
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div className=" h-[220px] md:h-[620px] w-[110px] md:w-[450px] rounded-lg flex items-center justify-center md:ml-[-17px] ml-9 relative overflow-hidden">
          <img
            src={wassily}
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
            <div className="bg-blue-500 rounded-lg mb-1 w-[70px] sm:w-[80px]">
              <h3 className="font-bold text-center custom-font text-xs sm:text-base">
                Artist
              </h3>
            </div>
            <p className="text-sm sm:text-xl text-white font-medium custom-font">
              Wassily Kandinsky
            </p>
          </div>
        </div>

        {/* Fourth */}
        <div className="rounded-lg flex items-center justify-center md:ml-[220px] md:mt-[-320px] mt-[-129px] md:mb-[200px] relative overflow-hidden h-[100px] w-[150px] md:h-[290px] md:w-[395px]">
          <img
            src={Bauhas}
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
            <div className="bg-blue-500 rounded-lg mb-1 w-[70px] sm:w-[80px]">
              <h3 className="font-bold text-center custom-font text-xs sm:text-base">
                Story
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white custom-font">
              Join us on a journey through time to 1927 at the Dessau Bauhaus
            </p>
          </div>
        </div>

        {/* Fifth Image */}
        <div className="rounded-lg flex items-center justify-center md:mb-4 mb-[50px] md:mt-[-320px] mt-[-124px] relative overflow-hidden w-[100px] h-[100px] md:h-72 md:w-[590px] ml-[43px] md:ml-[2px]  md:mr-0">
          <img
            src={Piet}
            alt="Topic Image 5"
            className="transition-transform duration-300 ease-in-out transform h-48 w-full sm:h-64 md:h-full object-cover rounded-lg hover:scale-110"
          />
          <div className="absolute md:bottom-2 md:left-2 text-white p-4">
            <div className="bg-blue-500 rounded-lg mb-1 w-16 sm:w-20">
              <h3
                className="font-bold text-center text-base sm:text-lg"
                style={{
                  fontFamily:
                    '"Google Sans", "Noto Naskh Arabic UI", Arial, sans-serif',
                }}
              >
                Artist
              </h3>
            </div>
            <p
              className="text-sm sm:text-xl font-medium text-white"
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

export default GeomatricAbstraction;
