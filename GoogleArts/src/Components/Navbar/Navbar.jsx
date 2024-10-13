import { useState } from "react";
import React from "react";
import GoogleArtslogo from "../../assets/images/GoogleArtslogo.png";
import Avatar from "../../assets/images/Avatar.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white pb-6 pt-4 md:px-10 px-7">
        <div
          className="flex items-center cursor-pointer p-4 sm:p-2"
          onClick={toggleMenu}
        >
          <span className="text-black text-2xl sm:text-xl ml-2">
            <ion-icon name="menu-outline"></ion-icon>
          </span>
          <img src={GoogleArtslogo} alt="logo" className="h-5 w-auto ml-3" />
        </div>
        <ul
          className={`md:flex md:items-center text-black text-sm md:my-0 my-7 gap-4 cursor-pointer font-medium  md:bg-transparent bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "absolute left-0 w-full z-20" : "hidden md:flex"
          }`}
          style={{
            fontSize: "14px",
          }}
        >
          {["Home", "Explore", "Nearby", "Favourite"].map((link) => (
            <li
              key={link}
              className="mt-1 flex relative"
              onClick={() => handleLinkClick(link)}
              aria-current={activeLink === link ? "page" : undefined}
            >
              <span
                className={`block h-1 bg-blue-500 absolute left-0 right-0 bottom-0 mt-7 transition-transform duration-300 ease-in-out ${
                  activeLink === link
                    ? "scale-x-200 md:scale-x-100"
                    : "scale-x-0"
                }`}
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  marginTop: "2px",
                }}
              ></span>
              {link}
            </li>
          ))}
          <li
            className="mt-2 text-xl cursor-pointer"
            style={{ fontWeight: "400" }}
          >
            <ion-icon name="search-outline"></ion-icon>
          </li>
          <li
            className="mt-2 text-2xl text-gray-500 cursor-pointer"
            style={{ fontWeight: "400" }}
          >
            <ion-icon name="apps-outline"></ion-icon>
          </li>
          <li className="mt-1 cursor-pointer">
            <img src={Avatar} alt="Avatar" className="rounded-2xl w-8 h-8" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
