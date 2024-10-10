import React from "react";
import LucasImage1 from "../../assets/images/Lucasimage1.jpeg";
import LucasImage2 from "../../assets/images/Lucasimage2.jpeg";
import LucasImage3 from "../../assets/images/Lucasimage3.jpeg";
import LucasImage4 from "../../assets/images/Lucasimage4.jpeg";
const LucasCranach = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-[500px]">
      <div className="flex flex-row max-w-4xl w-full p-4 h-[420px] mt-[-1500px] mb-0 relative">
        <div className="relative flex-1 px-6 flex flex-col justify-start p-[60px]">
          <div className="flex items-center">
            <ion-icon
              name="calendar-number-outline"
              class="text-black mr-2 text-[20px] mb-[22px]"
            ></ion-icon>

            <h1 className="text-sm mt-0 relative text-black mb-[20px]">
              Today in History
            </h1>
          </div>

          <div className="mt-[50px] text-center w-[300px]">
            <h2 class="text-[2rem] mb-2 max-w-[600px] box-border">
              On this day in 1472, Lucas Cranach the Elder was born
            </h2>

            <h4 className="text-gray-700 text-sm">
              "Lucas Cranach the Elder was a German Renaissance painter and
              printmaker in woodcut and engraving. He was court painter to the
              Electors of Saxony for most of his career..."
            </h4>
            <p class="text-[#007FFF] block mt-[10px] mr-[200px] cursor-pointer">
              Learn More
            </p>
          </div>
        </div>
        <div class="flex-1 grid grid-cols-2 grid-rows-2 gap-4 px-[20px] mt-28 h-[400px]">
          <div
            className="rounded-lg bg-cover bg-center h-[180px] mb-2"
            style={{
              backgroundImage: `url(${LucasImage1})`,
            }}
          ></div>

          <div
            className="rounded-lg bg-cover bg-center h-[180px] mb-[3px]"
            style={{
              backgroundImage: `url(${LucasImage2})`,
            }}
          ></div>

          <div className="col-span-2 flex justify-between gap-[2px]">
            <div
              className="rounded-lg flex-1 bg-cover bg-center h-[100px] mr-[10px]"
              style={{
                backgroundImage: `url(${LucasImage3})`,
              }}
            ></div>
            <div
              className="rounded-lg flex-1 bg-cover bg-center h-[100px]"
              style={{
                backgroundImage: `url(${LucasImage4})`,
              }}
            ></div>
          </div>
        </div>
        <div className="absolute top-[10px] right-[10px] rounded-full p-[10px] z-[50] text-[30px] font-bold"></div>
      </div>
    </div>
  );
};

export default LucasCranach;
