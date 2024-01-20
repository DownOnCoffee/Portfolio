import React from "react";
import react, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../constants";
import mainlogo from "../assets/m-logo3.png";
import "../index.css";
import { logo, menu, close } from "../assets";

import {motion } from "framer-motion";
import { useScroll,useTransform } from "framer-motion";
import scrollIcon from '../assets/scrollIcon.png';


const Navbar = () => {
  
  // scrolling at the top of page
  const { scrollYProgress } = useScroll();
  // const imageXPosition = useTransform(scrollYProgress, [0, 1], [0,1500]); 
  const [Active, setActive] = useState("initail");
  const [Toggle, setToggle] = useState(false);
  return (
    <>
    {/*X scroll at the top of page*/}
    <div className="bg-black fixed top-0 left-0 right-0 z-30 ">
    <motion.div style={{
      scaleX:scrollYProgress,
      transformOrigin:'0%',
      
      }} 
      className="mb-3 h-[15px] bg-white "> 
    </motion.div>
    
    

    </div> 
      <nav className="w-full sm:px-6 md:py-3 sm:py-[1px] fixed top-3 z-30 bg-black overflow-x-hidden">
        <div className=" flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-0"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={mainlogo}
              alt="logo"
              className="w-[98px] h-[60px] object-container"
            ></img>
            <p className="cursor-pointer text-[15px]">
              Manya | <span>Portfolio</span>
            </p>
          </Link>
          {/* Active state is being used for styling and toggle between white and grey color on click */}
          <ul className="list-none sm:hidden md:flex flex-row gap-11 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  Active === link.title ? "text-white" : "text-gray-700"
                } text-[17.5px] cursor-pointer  hover:text-[18px] hover:text-gray-400 `}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <Link to={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>

          {/*mobile screen nav*/}
          <div className=" lg:hidden sm:flex items-center">
            <img
              src={Toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer "
              onClick={() => setToggle(!Toggle)}
            ></img>
            <div
              className={`${
                !Toggle ? "hidden" : "flex"
              } p-6  black-gradient absolute top-20 right-0 mx-5 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none sm:flex flex justify-end items-start flex-col gap-4 ">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      Active === link.title ? "text-white" : "text-gray-300"
                    } hover:text-white font-poppins font-medium cursor-pointer text-[17px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!Toggle);
                    }}
                  >
                    <NavLink to={link.id}>{link.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
