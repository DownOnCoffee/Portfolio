import React from "react";
import react, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { easeInOut, easeOut } from "framer-motion";
const Experience = () => {
  const isMobile = window.innerWidth <= 768;
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation runs once when the element enters the viewport
  });

  const expcardstyle="flex-shrink-0 border-b-4 border-r-4 bg-gray-900 p-7 w-[400px]  rounded-xl leading-6";

  return (
    <>
      <div className={`md:px-[95px] sm:px-[50px]`}>
        <div className="flex justify-center mt-4 items-center flex-col">
          <motion.h1
            className={`${styles.heroHeadText}text-white mb-3 font-Montserrat`}
          >
            Experience
          </motion.h1>
          <br></br>

          {/* vertical white line */}
          <div className="h-[1000px] w-3 bg-white">

            <div className="flex items-baseline ">
              <motion.div
                className="font-italic"
                whileInView={{
                  x: inView ? -150 : -100,
                  opacity: inView ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
              >
                December'2023
              </motion.div>
              <motion.div
                className={expcardstyle}
                ref={ref}
                whileInView={{ x: inView ? -70 : 200 }}
                initial={{ x: 200 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold">AWS Foundation Certification:</p>
                <br></br>
                <p>
                  Completed the AWS Foundation Level course and earned the
                  certification badge.
                </p>
              </motion.div>
            </div>




          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
