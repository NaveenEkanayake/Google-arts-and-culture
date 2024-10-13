import React, { useState } from "react";

// Importing images
import image1 from "../../assets/images/Rio.jpg";
import image2 from "../../assets/images/Rio.jpg";
import image3 from "../../assets/images/Rio.jpg";
import image4 from "../../assets/images/Rio.jpg";
import image5 from "../../assets/images/Rio.jpg";
import image6 from "../../assets/images/Rio.jpg";
import image7 from "../../assets/images/Rio.jpg";

import { IonIcon } from "@ionic/react";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";
import DiscoverButton from "../DiscovermoreButton/DiscoverButton";

const DiscoverArtist = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="flex flex-col items-center mt-14 px-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl sm:text-4xl">
          Discover artists around the world
        </h2>
        <p className="mt-2 text-slate-500">Find your new favorite</p>
      </div>
      <div className="relative overflow-hidden w-full max-w-[1000px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalImages)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative p-2 w-full min-w-[300px] h-[19rem] transition-all duration-300 ease-in-out flex flex-col items-center justify-between cursor-pointer mx-1 rounded-lg"
            >
              <div className="rounded-2xl flex items-center justify-center overflow-hidden w-[230px] h-[75%]">
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col text-center absolute top-[65%] left-1/2 transform -translate-x-1/2">
                <h4 className="text-white text-lg sm:text-xl font-semibold mb-1 font-google-sans">
                  Alma Thomas
                </h4>
                <p className="text-white text-sm font-normal">27 items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <div
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-900 bg-white rounded-full p-3 shadow-lg cursor-pointer ${
            currentIndex === 0 ? "hidden" : ""
          }`}
          onClick={handlePrev}
        >
          <IonIcon icon={arrowBackOutline} className="text-2xl" />
        </div>

        {/* Right Arrow */}
        <div
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-900 bg-white rounded-full p-3 shadow-lg cursor-pointer ${
            currentIndex === totalImages - 1 ? "hidden" : ""
          }`}
          onClick={handleNext}
        >
          <IonIcon icon={arrowForwardOutline} className="text-2xl" />
        </div>
      </div>
      <DiscoverButton>Discover More</DiscoverButton>
    </div>
  );
};

export default DiscoverArtist;
