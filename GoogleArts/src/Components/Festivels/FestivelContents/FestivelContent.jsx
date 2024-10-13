import React from "react";
import Holi from "../../../assets/images/Holi.jpg";
import Rio from "../../../assets/images/Rio.jpg";
import Naadam from "../../../assets/images/Naadam.jpg";
import DayofDead from "../../../assets/images/DayofDead.jpg";
import Festa from "../../../assets/images/Festa.jpg";
import ViewAllButton2 from "../../ViewAllButton2/ViewAllButton2";
const FestivelContent = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-5 overflow-visible ">
      <div className="flex justify-center overflow-visible">
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer mt-[40px]  md:mt-0    w-[95px]  md:w-[350px]  h-[130px] md:h-[450px] md:ml-[0px] ml-[-20px]  mr-[150px] md:mr-0 p-[0px] md:p-[10px] overflow-visible"
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Holi}
            alt="Card 1"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className=" flex flex-col absolute bottom-[-5px] left-[-10px] md:bottom-[10px] md:left-[10px] right-0 p-4 text-white text-left ">
            <h2 className="md:text-2xl texl-xl font-normal text-nowrap ">
              Holi
            </h2>
            <p className="md:text-sm text-xs font-normal">India</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer mt-[40px]  md:mt-0    w-[95px]  md:w-[350px]  h-[130px] md:h-[450px] md:ml-[-100px] ml-[-180px]  mr-[150px] md:mr-0 p-[0px] md:p-[10px] overflow-visible"
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={DayofDead}
            alt="Card 2"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className=" flex flex-col absolute bottom-[-5px] left-[-10px] md:bottom-[10px] md:left-[10px] right-0 p-4 text-white text-left ">
            <h2 className="md:text-2xl texl-xl font-normal text-nowrap">
              Day of Dead
            </h2>
            <p className="md:text-sm text-xs font-normal">Mexico</p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer mt-[40px]  md:mt-0    w-[95px]  md:w-[350px]  h-[130px] md:h-[450px] md:ml-[-100px] ml-[-180px]  mr-[150px] md:mr-0 p-[0px] md:p-[10px] overflow-visible"
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Rio}
            alt="Card 3"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className=" flex flex-col absolute bottom-[-5px] left-[-10px] md:bottom-[10px] md:left-[10px] right-0 p-4 text-white text-left ">
            <h2 className=" text-xs md:text-2xl font-normal text-nowrap ">
              The Rio Carnival
            </h2>
            <p className=" text-xs md:text-sm font-normal">Brazil</p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer w-[95px] h-[130px] md:w-[350px] md:h-[450px] ml-[-200px] md:ml-[-100px] md:p-[10px] overflow-visible md:mt-0 mt-[40px]"
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Naadam}
            alt="Card 4"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="flex flex-col absolute bottom-[-5px] left-[-10px] md:bottom-[10px] md:left-[10px] right-0 p-4 text-white text-left">
            <h2 className="text-xs md:text-2xl font-normal text-nowrap ">
              The Naadam Festival
            </h2>
            <p className="md:text-sm font-normal">Mongolia</p>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="relative rounded-lg transition-transform duration-300 ease-in-out z-40 cursor-pointer mt-[40px]  md:mt-0    w-[95px]  md:w-[350px]  h-[130px] md:h-[450px] md:ml-[-100px] ml-[-10px]  mr-[150px] md:mr-0 p-[0px] md:p-[10px] overflow-visible"
          onMouseEnter={(e) => (e.currentTarget.style.zIndex = 50)}
          onMouseLeave={(e) => (e.currentTarget.style.zIndex = 10)}
        >
          <img
            src={Festa}
            alt="Card 5"
            className="rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="flex flex-col absolute bottom-[-5px] left-[-10px] md:bottom-[10px] md:left-[10px] right-0 p-4 text-white text-left">
            <h2 className="text-xs md:text-2xl font-normal text-nowrap">
              Festa del Redentro
            </h2>
            <p className=" text-xs md:text-sm font-normal">Venice</p>
          </div>
        </div>
      </div>
      <ViewAllButton2>View All</ViewAllButton2>
    </div>
  );
};

export default FestivelContent;
