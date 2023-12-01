import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import contactIcon from '../assets/contactIcon.png';


const About = () => {
  const isMobile = window.innerWidth <= 768;
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation runs once when the element enters the viewport
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Ensures the animation runs once when the element enters the viewport
  });
  return (
    <>
    <div className={isMobile?"p-5 bg-bgcolor":"p-0"}></div>
    
      <div className={`md:px-[95px] sm:px-[50px] bg-bgcolor`}>
      <motion.h1
        className={`${styles.heroHeadText}text-white mb-3 font-Montserrat`}
      >
        Overview
      </motion.h1>

      <div className=" overflow-x-hidden">
      <motion.p
        initial={{ x: -500 }}
        whileInView={{ x: inView ? 0 : -500 }}
        transition={{ delay: 0.3, duration: 1.6 }}
        ref={ref}
        className="leading-7 pb-3 font-Montserrat "
      >
        Hi, I'm Manya, your friendly neighborhood coder! 🌟<br></br>
        By day, I'm a diligent B.Tech student, delving into the magical realm of
        Computer Science.🧙‍♂️ <br></br>
        But by night, I transform into a ReactJS/Frontend sorcerer, weaving
        spells in the world of web development. 💻✨
      </motion.p>
      <motion.p
        initial={{ x: 400 }}
        whileInView={{ x: inView2 ? -10 : 400 }}
        transition={{ delay: 0.3, duration: 1.3 }}
        ref={ref2}
        className="leading-7 text-right pb-3 whitespace-pre-line font-Montserrat "
      >
        My dream? To become a MERN Stack Developer extraordinaire! I'm all about
        crafting eye-catching,<br></br>
        user-friendly web applications and solving problems🚀💻Bugs, you're in for
        a treat!<br></br>
       
      </motion.p>

      </div>

      
      <br></br>
      <motion.button
        className="px-7 py-4 flex select-none items-center gap-1 rounded-lg bg-gradient-to-tr from-purple-800 to-cyan-400  text-center align-middle font-sans text-[15px] font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
        type="button"
        data-ripple-light="true"
        whileHover={{scale:1.1}}

      >
       Let's Connect!
      </motion.button>
      </div>
      
    </>
  );
};

export default About;
