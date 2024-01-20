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

  const expcardstyleright =
    "flex-shrink-0 border-b-4 border-r-4 bg-gray-900 p-7 w-[400px]  rounded-xl leading-6";
    const expcardstyleleft =
    "flex-shrink-0 border-b-4 border-l-4 bg-gray-900 p-7 w-[400px]  rounded-xl leading-6";

    const projlistitems1=["Developed an IP Address Tracker","Participated in Smart India hackathon and bagged the 3rd position at college level.","Developed Innergram - A social media analysis tool","Engaged in many more react projects"];
    const projlistitems2=["Developed interfaces for multiple projects","Contributed to the development of a dynamic land rental website - Patched and accumulated industrial experience "];
    const projlistitems3=["Engaged in an online frontend developer internship at Collcom ","Collaborated with a non-profit organization to develop a website for their Cybersecurity awareness campaign."];
    const projlistitems4=["Completed comprehensive training in HTML, CSS, and JavaScript by completing certifications."," acquiring essential skills for developing modern and responsive websites."];
    

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
          <div className="h-[1500px] w-3 bg-white">
            <div className="flex items-baseline mb-40 ">
              <motion.div
                className="font-italic whitespace-nowrap "
                whileInView={{
                  x: inView ? -250 : -150,
                  opacity: inView ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref}
                initial={{ x: -150, opacity: 0 }}
              >
                August'23 - December'23
              </motion.div>
              <motion.div
                className={expcardstyleright}
                ref={ref}
                whileInView={{ x: inView ? -160 : 0 }}
                initial={{ x: 0 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold">Personal React Projects:</p>
                Sharpening my React skills through hands-on personal projects and enhancing my proficiency in web development.
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems1.map((item)=>(
                  <li>{item}</li>
                ))}
                </ul>
              </motion.div>
            </div>


            {/* second exp div */}
            <div className="flex items-baseline mb-40">
              <motion.div
                className="font-italic whitespace-nowrap"
                whileInView={{
                  x: inView ? 50 : 0,
                  opacity: inView ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
              >
                June'23 - August'23
              </motion.div>
              <motion.div
                className={expcardstyleleft}
                ref={ref}
                whileInView={{ x: inView ? -580 : -700 }}
                initial={{ x: -700 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold">React  Developer Intern:</p>
                Triazine Software Pvt Ltd<br></br>
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems2.map((item)=>(
                  <li>{item}</li>
                ))}
                </ul>
              </motion.div>
            </div>



            {/* third exp div */}
            <div className="flex items-baseline mb-40 ">
              <motion.div
                className="font-italic whitespace-nowrap "
                whileInView={{
                  x: inView ? -180 : -150,
                  opacity: inView ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref}
                initial={{ x: -150, opacity: 0 }}
              >
                April'23 - June'23
              </motion.div>
              <motion.div
                className={expcardstyleright}
                ref={ref}
                whileInView={{ x: inView ? -100 : 0 }}
                initial={{ x: 0 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold">Frontend developer:</p>
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems3.map((item)=>(
                  <li>{item}</li>
                ))}
                </ul>
              </motion.div>
            </div>



            {/* fourth exp div */}
            <div className="flex items-baseline mb-40">
              <motion.div
                className="font-italic whitespace-nowrap"
                whileInView={{
                  x: inView ? 50 : 0,
                  opacity: inView ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref}
                initial={{ x: 0, opacity: 0 }}
              >
                2022 - 2023
              </motion.div>
              <motion.div
                className={expcardstyleleft}
                ref={ref}
                whileInView={{ x: inView ? -530 : -700 }}
                initial={{ x: -700 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold">Web Development Foundations Training</p>
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems4.map((item)=>(
                  <li>{item}</li>
                ))}
                </ul>
              </motion.div>
            </div>

           

          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
