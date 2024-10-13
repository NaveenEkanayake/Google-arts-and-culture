import React, { useState } from "react";
import image1 from "../../assets/images/portrait.jpg";
import image2 from "../../assets/images/womeninchemise.jpeg";
import image3 from "../../assets/images/Port.jpeg";
import image4 from "../../assets/images/Manolas.jpeg";
import image5 from "../../assets/images/The regetta.jpg";
import image6 from "../../assets/images/Manolas.jpeg";
import image7 from "../../assets/images/Manolas.jpeg";

const Carasoule = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="flex flex-col items-center mt-14">
      <div className="text-center mb-4">
        <h2 className="text-2xl text-center md:text-5xl">
          Recommended for You
        </h2>
        <p className="mt-2 text-slate-500">
          Discover popular artworks and hidden gems from around the world.
        </p>
      </div>
      <div className="relative overflow-hidden w-full max-w-[1000px]">
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(-${currentIndex * (100 / totalImages)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative bg-cover bg-center shadow-md p-4 min-w-[300px] h-[25rem] flex flex-col items-start justify-end cursor-pointer rounded-lg mx-2 transition-all duration-300 ease-in-out`}
              style={{
                backgroundImage: `url(${image})`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <div className="absolute top-2 right-2">
                  <ion-icon
                    name="heart-outline"
                    className="text-white text-xl md:text-2xl"
                  ></ion-icon>
                </div>
              )}
              <div
                className={`absolute inset-0 rounded-lg transition-opacity duration-300 ease-in-out ${
                  hoveredIndex === index ? "opacity-50" : "opacity-0"
                } bg-black`}
              ></div>

              {hoveredIndex === index && (
                <div className="flex flex-col items-start justify-end relative z-10 mb-2">
                  <h4 className="text-white text-xl font-semibold mb-1">
                    Visit the Pyramid
                  </h4>
                  <p className="text-white text-sm text-left font-medium mb-0">
                    Discover ancient wonders.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg cursor-pointer ${
            currentIndex === 0 ? "hidden" : ""
          }`}
          onClick={handlePrev}
        >
          <ion-icon
            name="arrow-back-outline"
            className="text-blue-600 text-lg md:text-xl"
          ></ion-icon>
        </div>
        <div
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg cursor-pointer ${
            currentIndex === totalImages - 1 ? "hidden" : ""
          }`}
          onClick={handleNext}
        >
          <ion-icon
            name="arrow-forward-outline"
            className="text-blue-600 text-lg md:text-xl"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Carasoule;
