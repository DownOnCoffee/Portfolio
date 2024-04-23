import React from "react";
import react, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../constants";
import mainlogo from "../assets/m-logo3.png";
import "../index.css";
import { logo, menu, close } from "../assets";
import {motion } from "framer-motion";
import { useScroll } from "framer-motion";



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

      <nav className="w-full sm:px-6 md:py-3 py-1  fixed top-3 z-30 bg-black overflow-x-hidden">
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
              className="md:w-[98px] md:h-[60px] w-[78px] h-[45px] object-container"
            ></img>
            <p className="cursor-pointer text-[15px] text-white md:block hidden ">
              Manya | <span>Portfolio</span>
            </p>
          </Link>

          {/* Active state is being used for styling and toggle between white and grey color on click */}
          <ul className="list-none flex flex-row md:gap-11 gap-4 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  Active === link.title ? "text-white" : "text-gray-700"
                } md:text-[17.5px] text-[15px] cursor-pointer  hover:text-[18px] hover:text-gray-400 `}
                onClick={() => {
                  setActive(link.title);
                  window.scrollTo(link.horzscroll,link.vertscroll);
                  
                }}
              >
                <Link to={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
