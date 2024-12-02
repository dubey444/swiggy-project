// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { TfiHelpAlt } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [toggle, settoggle] = useState(false);

  const showSideMenu = () => {
    settoggle(true);
  };
  const hideSideMenu = () => {
    settoggle(false);
  };

  const Links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offer",
      sup:"New"
    },
    {
      icon: <TfiHelpAlt />,
      name: "Help",
    },
    {
      icon: <CgProfile />,
      name: "Sign-in ",
    },
    {
      icon: <IoCartOutline />,
      name: "Cart",
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      ></div>

      <div
        className="h-full w-[500px] bg-white absolute duration-[600ms]"
        onClick={(e) => {
          e.stopPropagation;
        }}
        style={{
          left: toggle ? "0%" : "-100% ",
        }}
      ></div>
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto border border-white flex items-center ">
          <div className="border-black-300">
            <img src="images/logo.png " className=" h-10 w-30" alt="" />
          </div>
          <div className="">
            <span className="font-bold underline ">Kadipur</span> Sultanpur,
            Uttar-pradesh , India
            <PiCaretDownLight
              onClick={showSideMenu}
              className="inline  cursor-pointer"
            />
          </div>
          
          
          <nav className="flex list-none gap-10 ml-auto font-semibold text-[18px] ">
            {Links.map((link, index) => (
              <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
              </li>
            ))}
          </nav>


        </div>
      </header>
    </>
  );
};

export default Header;
