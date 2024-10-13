import React from "react";
import Buffolo from "../../../assets/images/Buffolo.webp";
import Rhino from "../../../assets/images/Rhino.webp";
import Lion from "../../../assets/images/Lion.jpeg";
import Leopard from "../../../assets/images/Leopard.webp";
import Elephant from "../../../assets/images/Elephant.webp";
import ViewAllButton from "../../ViewallButton/ViewallButton";
const RoarCardContents = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-5 overflow-visible">
      <div className="flex justify-center overflow-visible">
        {/* Card 1 */}
        <div
          className="relative rounded-lg transition-transform  w-[90px] md:w-[350px] h-[150px] mt-[120px] md:mt-0 md:h-[450px] md:p-[10px] ml:100px md:ml-[-10px] md:left-0 md:mr-72  duration-300 ease-in-out z-40 cursor-pointer overflow-visible"
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Buffolo}
            alt="Card 1"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-[10px] md:left-[10px] md:right-0 right-[10px] p-4 text-white text-left  md:mt-0 mt-[-11px]">
            <h2 className=" text-xs md:text-2xl font-normal text-nowrap">
              The Buffalo
            </h2>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative rounded-lg transition-transform   w-[90px] md:w-[350px] h-[150px] mt-[120px]   ml:100px md:ml-[-400px]  left-[-12px] md:left-0 md:mt-0 md:h-[450px] md:p-[10px]  md:mr-[500px]  duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Leopard}
            alt="Card 2"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-[10px] md:left-[10px] md:right-0 right-[10px] p-4 text-white text-left  md:mt-0 mt-[-11px] ">
            <h2 className="text-xs md:text-2xl font-normal text-nowrap ">
              The Leopard
            </h2>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative rounded-lg transition-transform  w-[90px] md:w-[350px] h-[150px] mt-[120px]  ml:100px md:ml-[-600px]  left-[-14px] md:left-0 md:mt-0 md:h-[450px] md:p-[10px] right-32 md:right-36 md:mr-0  duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Rhino}
            alt="Card 3"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-[10px] md:left-[10px] md:right-0 right-[10px] p-4 text-white text-left  md:mt-0 mt-[-11px]">
            <h2 className="text-xs md:text-2xl font-normal text-nowrap ">
              The Rhino
            </h2>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="relative rounded-lg transition-transform   w-[90px] md:w-[350px] h-[150px] mt-[120px]  ml:100px md:ml-[-50px] left-[-16px] md:left-0 md:mt-0 md:h-[450px] md:p-[10px] right-32 md:right-48 md:mr-0  duration-300 ease-in-out z-40 cursor-pointer"
          style={{
            overflow: "visible",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Lion}
            alt="Card 4"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute bottom-[10px] md:left-[10px] md:right-0 right-[10px] p-4 text-white text-left  md:mt-0 mt-[-11px]">
            <h2 className="text-xs md:text-2xl font-normal text-nowrap">
              The Lion
            </h2>
          </div>
        </div>
      </div>
      <ViewAllButton>View All</ViewAllButton>
    </div>
  );
};

export default RoarCardContents;
