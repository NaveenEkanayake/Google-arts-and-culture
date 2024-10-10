import React from "react";
import PainterofGlidedAge from "../../assets/images/PainteroftheGlidedage.jpg";
import GreatSpa from "../../assets/images/Greatspa.jpeg";
import Venice from "../../assets/images/Venice.jpg";
import Coral from "../../assets/images/Coral.jpeg";
import Meowseum from "../../assets/images/Old.jpg";

const TodayPick = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-5 overflow-visible">
      <h1 className="font-sans text-4xl mb-8">Today's top Pickup</h1>
      <div className="flex justify-center overflow-visible">
        {/* Card 1 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            width: "350px",
            height: "450px",
            marginLeft: "0",
            padding: "10px",
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={PainterofGlidedAge}
            alt="Card 1"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            <h2 className="text-lg font-bold">Painter of the Glided Age</h2>
            <p className="text-xs mt-1">Discover James Tissot</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            width: "350px",
            height: "450px",
            marginLeft: "-100px",
            padding: "10px",
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={GreatSpa}
            alt="Card 2"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            <h2 className="text-lg font-bold">Explore Great Spa Towns</h2>
            <p className="text-xs mt-1">Travel through Europe With UNESCO</p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            width: "350px",
            height: "450px",
            marginLeft: "-100px",
            padding: "10px",
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Venice}
            alt="Card 3"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            <h2 className="text-lg font-bold">Take a Trip Through Venice</h2>
            <p className="text-xs mt-1">Explore in 50 seconds</p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            width: "350px",
            height: "450px",
            marginLeft: "-100px",
            padding: "10px",
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Coral}
            alt="Card 4"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            <h2 className="text-lg font-bold">Coral from Trapani </h2>
            <p className="text-xs mt-1">
              Jewelry and sacred images with unioncamere
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            width: "350px",
            height: "450px",
            marginLeft: "-100px",
            padding: "10px",
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Meowseum}
            alt="Card 5"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            <h2 className="text-lg font-bold">5 Museums for Fashionists.</h2>
            <p className="text-xs mt-1">
              Balenciage Museum,German Hat Museum,and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPick;
