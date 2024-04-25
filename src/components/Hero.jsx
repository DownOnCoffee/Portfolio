import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import My3Dscene from './My3dscene';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Hero = () => {
  const isMobile = window.innerWidth <= 800;
 
  const styleForMobile = {
    fontSize: '1.5em', // Set the font size for mobile screens
    display: 'inline-block',
  };

  const styleForLargeScreens = {
    fontSize: '2em', // Set the font size for larger screens
    display: 'inline-block',
  };

  return (
    <>
    <div className={isMobile?"p-5":"p-0"}></div>
    
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 lg:top-[120px] sm:top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] animate-wiggle "></div>
            <div className="w-1 lg:h-80 sm:h-[180px] violet-gradient" />
          </div>

          <div className="flex flex-col">
            <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span className="text-[#C50598] lg:text-[70px] text-[48px]">Manya!</span></h1>
        

            {/*Typing animation*/}
            <TypeAnimation
              sequence={[
                "Glad to have you here ;) ",
                1000, 
                "MERN Developer at your service💻",
                1000,
                "Available for work 📆",
                1000,
                "Drop a feedback or contact me! 📬",
                1000,
              ]}
              className={`${styles.heroSubText}`}
              wrapper="span"
              speed={60}
              style={isMobile ? {fontSize:"1.5em"}:  {fontSize:"2em"}}
              repeat={Infinity}
            />
            
          </div>
          </div>
          <br></br>
          {/* <div className={isMobile?"p-5":"p-0"}></div> */}
          <ComputersCanvas />
          <br></br>
          <br></br>

      </section>
    </>
  );
};

export default Hero;
