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
  const [ref1, { view }] = useInView({
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
  const [ref5, inView5] = useInView({
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

  const projectItems = [
    {
      items:[
        "Developed Full stack projects using MERN stack",
        "Created Hotel booking application in just three days, showcasing swift development capabilities and developed other projects.",
        "Currently,Trying to master MySQL fundamentals."
        
      ],
      ref: ref5,
      timeline: "February'23",
      view: "inView5",
      xValViewDate: 50,
      xValInitialDate:0,
      direction: "left",
      xValViewText: -530,
      xValInitialText:-670,
      heading: "Backend journey:",
    },
    {
      items: [
        "I have advanced my React skills through commercial and personal projects, designing web apps that seamlessly integrate with diverse APIs.Also embarked on learning AWS and completed the Cloud Foundation course.",
        "Participated in Smart India hackathon and bagged the 3rd position at college level.",
      ],
      ref: ref1,
      timeline: "August'23 - December'23",
      view: "inView1",
      xValViewDate: -250,
      xValInitialDate: -180,
      direction: "right",
      xValViewText: -160,
      xValInitialText: 0,
      heading: "Personal React Projects:",
    },
    {
      items: [
        "Contributed to the development of a land rental website - Patched",
        "Developed user module, including authentication and registration flows, form validation with custom error handling.",
        "Implemented interactive landing page in React.",
        "Developed interfaces for multiple projects using HTML, CSS, Javascript which improved my design principles.",
      ],
      ref:ref2,
      timeline: " June'23 - August'23",
      view: " inView2",
      xValViewDate: 50,
      xValInitialDate: 0,
      direction: "left",
      xValViewText: -580,
      xValInitialText: -700,
      heading: "React Developer Intern - Triazine Software Pvt Ltd ",
    },
    {
      items: [
        "Engaged in an online frontend developer internship at Collcom",
        "Collaborated with a non-profit organization to develop a website for their Cybersecurity awareness campaign.",
      ],
      ref: ref3,
      timeline: "April'23 - June'23",
      view: " inView3",
      xValViewDate: -180,
      xValInitialDate: -150,
      direction: "right",
      xValViewText: -100,
      xValInitialText: 0,
      heading: "First project as Frontend developer:",
    }
  ];

  return (
    <>
      <div className={`px-95px]`}>
        <div className="flex justify-center mt-4 items-center flex-col">
          <motion.h1
            className={`${styles.heroHeadText}text-white mb-3 font-Montserrat`}
          >
            Experience
          </motion.h1>
          <br></br>

          {/* vertical white line */}
          <div className="h-[1500px] w-3 bg-white">
            {projectItems.map((item, index) => (
              <div className="flex items-baseline mb-24" key={index}>
                <motion.div
                  className="font-italic whitespace-nowrap text-white"
                  whileInView={{
                    x: (item.view)
                      ? item.xValViewDate
                      : item.xValInitialDate,
                    opacity: (item.view) ? 1 : 0,
                  }}
                  transition={{
                    delay: (item.view) ? 0.3 : 0,
                    duration: 0.6,
                  }}
                  ref={eval(item.ref)}
                  initial={{ x: item.xValInitialDate, opacity: 0 }}
                >
                  {item.timeline}
                </motion.div>

                <motion.div
                  className={`flex-shrink-0 border-b-4 border-${item.direction === "right" ? "r" : "l"
                  }-4 bg-gray-900 p-7 w-[400px] rounded-xl leading-6`}
                  ref={(item.ref)}
                  whileInView={{
                    x: (item.view)
                      ? item.xValViewText
                      : item.xValInitialText,
                  }}
                  initial={{ x: item.xValInitialText }}
                  transition={{ delay: 0.1, duration: 0.9 }}
                >
                  <p className="font-bold text-white">{item.heading}</p>
                  <ul style={{ listStyle: "disc" }}>
                    {item.items.map((ele, idx) => (
                      <li className="text-white" key={idx}>
                        {ele}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
