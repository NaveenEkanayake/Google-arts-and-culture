import { useState } from "react";
import React from "react";
import GoogleArtslogo from "../../assets/images/GoogleArtslogo.png";
import Avatar from "../../assets/images/Avatar.png";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white pb-6 pt-4 md:px-10 px-7">
        <div className=" cursor-pointe flex items-center ">
          <span className="text-black ml-4 text-3xl">
            <ion-icon name="menu-outline"></ion-icon>
          </span>
          <img src={GoogleArtslogo} alt="logo" className="h-5 w-full ml-3" />
        </div>
        <div>
          <ul
            className="md:flex  lg:items-center text-black text-sm md:my-0 my-7 gap-4 cursor-pointer  absolute md:static  bg-white md:z-auto z-[-1] left-1 w-full md:w-auto "
            style={{
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            <li
              className="mt-1  flex relative"
              onClick={() => setActiveLink("Home")}
            >
              <span
                className={`block h-1 bg-blue-500 absolute mt-7 left-0 right-0  bottom-0  transition-transform duration-300 ease-in-out ${
                  activeLink === "Home"
                    ? "scale-x-200 md:scale-x-100"
                    : "scale-x-0"
                }`}
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  marginTop: "2px",
                }}
              ></span>
              Home
            </li>

            <li
              className="mt-1 relative"
              onClick={() => setActiveLink("Explore")}
            >
              <span
                className={`block h-1 bg-blue-500 absolute left-0 right-0 bottom-0   mt-7 transition-transform duration-300 ease-in-out ${
                  activeLink === "Explore"
                    ? "scale-x-200 md:scale-x-100"
                    : "scale-x-0"
                }`}
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  marginTop: "2px",
                }}
              ></span>
              Explore
            </li>
            <li
              className="mt-1 relative"
              onClick={() => setActiveLink("Nearby")}
            >
              <span
                className={`block h-1 bg-blue-500 absolute left-0 right-0 bottom-0   mt-7 transition-transform duration-300 ease-in-out ${
                  activeLink === "Nearby"
                    ? "scale-x-200 md:scale-x-100"
                    : "scale-x-0"
                }`}
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  marginTop: "2px",
                }}
              ></span>
              Nearby
            </li>
            <li
              className="mt-1 relative"
              onClick={() => setActiveLink(" Favourite")}
            >
              <span
                className={`block h-1 bg-blue-500 absolute left-0 right-0 bottom-0   mt-7 transition-transform duration-300 ease-in-out ${
                  activeLink === " Favourite"
                    ? "scale-x-200 md:scale-x-100"
                    : "scale-x-0"
                }`}
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  marginTop: "5px",
                }}
              ></span>
              Favourite
            </li>
            <li
              className=" mt-2 text-xl  cursor-pointer"
              style={{
                fontWeight: "400",
              }}
            >
              <ion-icon name="search-outline"></ion-icon>
            </li>
            <li
              className="mt-2 text-2xl text-gray-500 cursor-pointer"
              style={{
                fontWeight: "400",
              }}
            >
              <ion-icon name="apps-outline"></ion-icon>
            </li>
            <li className="mt-1 cursor-pointer">
              <img src={Avatar} alt="Avatar" className="rounded-2xl " />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
