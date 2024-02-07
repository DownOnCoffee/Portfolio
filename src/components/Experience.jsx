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
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // Trigger animations or set state for animations here
  //   }, 1000); // Adjust the delay as needed
  
  //   return () => clearTimeout(timeout);
  // }, [inView]);

  const expcardstyleright =
    "flex-shrink-0 border-b-4 border-r-4 bg-gray-900 p-7 w-[400px]  rounded-xl leading-6";
    const expcardstyleleft =
    "flex-shrink-0 border-b-4 border-l-4 bg-gray-900 p-7 w-[400px]  rounded-xl leading-6";

    const projlistitems1=["I actively honed my React skills through personal and academic projects, solidifying my understanding of component-based development, state management, UI/UX best practices, and building dynamic websites that integrate with APIs.I also embarked on learning AWS and completed the Cloud Foundation course, gaining knowledge in Cloud computing.","Participated in Smart India hackathon and bagged the 3rd position at college level."];
    const projlistitems2=["Contributed to the development of a dynamic land rental website - Patched","Developed user module with React, including authentication and registration flows managed by Axios API calls.","Implemented interactive landing page in React, fetching data for content display.","Built robust form validation with custom error handling, integrating OTP verification","Developed interfaces for multiple projects using HTML,CSS, Javascript which has improved my design principles."];
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
          <div className="h-[1800px] w-3 bg-white">
            <div className="flex items-baseline mb-40 ">
              <motion.div
                className="font-italic whitespace-nowrap text-white "
                whileInView={{
                  x: inView1 ? -250 : -180,
                  opacity: inView1 ? 1 : 0,
                }}
                transition={{ delay: inView1 ? 0.3 : 0, duration: 0.6 }}
                ref={ref1}
                initial={{ x: -180, opacity: 0 }}
              >
                August'23 - December'23
              </motion.div>
              <motion.div
                className={expcardstyleright}
                ref={ref1}
                whileInView={{ x: inView1 ? -160 : 0 }}
                initial={{ x: 0 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold text-white ">Personal React Projects:</p>
               
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems1.map((item)=>(
                  <li className="text-white">{item}</li>
                ))}
                </ul>
              </motion.div>
            </div>


            {/* second exp div */}
            <div className="flex items-baseline mb-40">
              <motion.div
                className="font-italic text-white whitespace-nowrap"
                whileInView={{
                  x: inView2 ? 50 : 0,
                  opacity: inView2 ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref2}
                initial={{ x: 0, opacity: 0 }}
              >
                June'23 - August'23
              </motion.div>
              <motion.div
                className={expcardstyleleft}
                ref={ref2}
                whileInView={{ x: inView2 ? -580 : -700 }}
                initial={{ x: -700 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold text-white">React  Developer Intern:</p>
                <p className="text-white">Triazine Software Pvt Ltd</p><br></br>
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems2.map((item)=>(
                  <li className="text-white">{item}</li>
                ))}
                </ul>
              </motion.div>
            </div>



            {/* third exp div */}
            <div className="flex items-baseline mb-40 ">
              <motion.div
                className="font-italic text-white whitespace-nowrap "
                whileInView={{
                  x: inView3 ? -180 : -150,
                  opacity: inView3 ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref3}
                initial={{ x: -150, opacity: 0 }}
              >
                April'23 - June'23
              </motion.div>
              <motion.div
                className={expcardstyleright}
                ref={ref3}
                whileInView={{ x: inView3 ? -100 : 0 }}
                initial={{ x: 0 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold text-white">Frontend developer:</p>
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems3.map((item)=>(
                  <li className="text-white">{item}</li>
                ))}
                </ul>
              </motion.div>
            </div>



            {/* fourth exp div */}
            <div className="flex items-baseline mb-40">
              <motion.div
                className="font-italic text-white whitespace-nowrap"
                whileInView={{
                  x: inView4 ? 50 : 0,
                  opacity: inView4 ? 1 : 0,
                }}
                transition={{ delay: 0.3, duration: 0.6 }}
                ref={ref4}
                initial={{ x: 0, opacity: 0 }}
              >
                2022 - 2023
              </motion.div>
              <motion.div
                className={expcardstyleleft }
                ref={ref4}
                whileInView={{ x: inView4 ? -530 : -700 }}
                initial={{ x: -700 }}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                <p className="font-bold text-white">Web Development Foundations Training</p>
               
                <ul style={{ listStyle: 'disc' }}>
                {projlistitems4.map((item)=>(
                  <li className="text-white">{item}</li>
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
