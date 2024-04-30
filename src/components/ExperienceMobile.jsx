import React from "react";
import react, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { easeInOut, easeOut } from "framer-motion";
const ExperienceMobile = () => {

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
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  
  const projectItems = [
    {
      items:[
        "Began with a basic commercial website to grasp foundational MERN operations.",
        "Created Hotel booking application in just three days, showcasing swift development capabilities and developed other projects.",
        "Currently, Trying to master MongoDb fundamentals."
      ],
      ref: ref5,
      timeline: "February'23",
      view: "inView5",
      xValViewDate: 0,
      xValInitialDate:-50,
      direction: "left",
      xValViewText: 0,
      xValInitialText:-50,
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
      xValViewDate: 0,
      xValInitialDate: 15,
      direction: "right",
      xValViewText: 0,
      xValInitialText: 13,
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
      xValViewDate: 0,
      xValInitialDate: -50,
      direction: "left",
      xValViewText: 0,
      xValInitialText: -50,
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
      xValViewDate: 0,
      xValInitialDate: 15,
      direction: "right",
      xValViewText: 0,
      xValInitialText: 13,
      heading: "First project as Frontend developer:",
    }
  ];


  const expcardstyle ="flex-shrink-0 border-b-4 border-r-4 bg-gray-900 p-7 w-[350px]  rounded-xl leading-6";
  return (
    <>
      <div className=" px-12">
        <div className="flex justify-center mt-4 items-center flex-col">
          <motion.h1
            className={`${styles.heroHeadText}text-white mb-3 font-Montserrat`}
          >
            Experience
          </motion.h1>
          <br></br>

            {projectItems.map((item, index) => (
              <div className="mb-24" key={index}>
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
                </motion.div><br></br>

                <motion.div
                  className={`flex-shrink-0 border-b-4 border-${ item.direction === "right" ? "r" : "l" }-4 bg-gray-900 p-7 w-[280px] rounded-xl leading-6`}
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
                      <li className="text-white text-[13.5px]" key={idx}>
                        {ele}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
           

        </div>
    </>
  );
};

export default ExperienceMobile;
