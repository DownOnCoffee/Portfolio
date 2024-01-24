import React from 'react'
import react, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { easeInOut, easeOut } from "framer-motion";
import mainlogo from "../assets/m-logo3.png";


const Works = () => {
  const {scrollYProgress}=useScroll();
  return (
    <>
    <div className='bg-pink-600 '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#050816" fill-opacity="1.0" d="M0,96L40,117.3C80,139,160,181,240,192C320,203,400,181,480,154.7C560,128,640,96,720,106.7C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    <motion.h1
            className={`font-black sm:text-[43px] xs:text-[50px]  lg:leading-[90px]  text-white lg:text-[80px] text-center font-Montserrat`}
          >
            My Works
          </motion.h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#050816" fill-opacity="1.0" d="M0,96L40,117.3C80,139,160,181,240,192C320,203,400,181,480,154.7C560,128,640,96,720,106.7C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
          

    {/* <motion.div style={{
      
      scaleX:scrollYProgress,
      transformOrigin:'50%',
      marginLeft: `-${(scrollYProgress - 1) * 20}%`, // Use negative margin to make it expand towards both ends
       marginRight: `-${(scrollYProgress - 1) * 20}%`, 
 
      }} 
      className="mb-3 h-[10px] bg-white">
    </motion.div> */}

    </div>
    
   
    
    </>
  )
}

export default Works