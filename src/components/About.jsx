import { React, useState } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import contactIcon from "../assets/contactIcon.png";
import ReactCardFlip from "react-card-flip";
import expbadge from "../assets/expbadge.png"
import filedownloadicon from "../assets/filedownloadicon.png"
import projectlogo from "../assets/projectlogo.png"
// import resumefile from ".././public/resume.pdf";


const About = () => {
  
  const isMobile = window.innerWidth <= 768;
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation runs once when the element enters the viewport
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Ensures the animation runs once when the element enters the viewport
  });
  const overviewPara=" Hi, I'm Manya, your friendly neighborhood coder! 🌟 I'm a college student pursuing B.Tech in Computer Science, spending my days diving into algorithms and data structures. At night, I switch to work on Full stack development and learning the ins and outs of the MERN stack. Alongside, I'm an AWS learner, exploring cloud computing technologies to complement my web development expertise.  Seamlessly merging software development principles with web design, I eagerly explore the diverse landscape of programming.💻🌟 I'm on the lookout for software development roles so hit me up ! ;)";

  const handledownload=()=>{
    
    const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'ManyaRaghuvanshi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  return (
    <>
      {/* <div className={isMobile?"p-5 bg-bgcolor":"p-0"}></div> */}

      <div className={`md:px-[95px] sm:px-[50px]`}>
        <motion.h1
          className={`${styles.heroHeadText}text-white mb-3 font-Montserrat lg:text-left text-center`}
        >
          Overview
        </motion.h1>

        {/* column 1 */}
        <div className=" overflow-x-hidden overflow-y-hidden flex lg:flex-row flex-col gap-20 items-center">
          <div className="flex lg:w-[40%] w-full lg:text-left text-center">
            <motion.p
              initial={{ x: -200}}
              whileInView={{ x: inView ? 0 : -200 }}
              transition={{ delay: 0.3, duration: 1.3 }}
              ref={ref}
              className=" text-white leading-7 pb-3 font-Montserrat md:text-[15px] text-sm "
            >{overviewPara}
            </motion.p>
          </div>

          {/* column 2 */}
          <motion.div
            
            className="leading-7 text-right pb-3 whitespace-pre-line font-Montserrat "
          >
            <div className="flex lg:flex-row flex-col items-center gap-6">

              {/* flipping cards below */}

              {/* experience card */}
              <motion.div id="card"
              initial={{ rotate:-20 }}
              whileInView={{rotate:0 }}
              transition={{ delay: 0, duration: 0.7 }}
              className="lg:w-[224px] h-[250px] w-[200px]"
              ref={ref2}
                style={{
                  border: "3px solid white",
                  borderRadius: "8px", // rounded-lg equivalent
                  background: "#5064C6",
                  display: "flex",
                  justifyContent: "center",
                  transition: 'transform 0.8s',
                }}
              >
                <div className=" flex flex-col gap-2 items-center mt-10 filter fill-transparent ">
                  <img src={expbadge}></img>
                  <h2 className=" text-white font-mono text-2xl font-semibold">Experience</h2>
                  <p className="  font-Montserrat text-lg text-white text-center font-semibold">1 year</p>
                </div>
              </motion.div>

              {/* projects card */}
              <motion.div id="card"
              initial={{ rotate:-20 }}
              whileInView={{rotate:0 }}
              transition={{ delay: 0, duration: 0.7 }}
              className="lg:w-[224px] h-[250px] w-[200px]"
              ref={ref2}
                style={{
                  border: "3px solid white",
                  borderRadius: "8px", // rounded-lg equivalent
                  background: "#5064C6",
                  display: "flex",
                  justifyContent: "center",
                  transition: 'transform 0.8s',
                }}
              >
                <div className=" flex flex-col gap-2  items-center filter mt-12 fill-transparent px-3 ">
                  <img className="w-10" src={projectlogo}></img>
                  <h2 className="font-mono text-2xl font-semibold text-white ">Projects</h2>
                  <p className="font-Montserrat  text-[14px] text-white text-center font-semibold leading-6">Engaged in <span className="text-blue-900 font-bold text-[16px]"> 13 </span> projects<br></br>Successfully completed <span className="text-blue-900 font-bold text-[16px]"> 11 </span>  of them!</p>
                  
                </div>
              </motion.div>

              {/* resume download card */}
              <motion.div id="card"
              initial={{ rotate:-20 }}
              whileInView={{rotate:0 }}
              transition={{ delay: 0, duration: 0.7 }}
              className="hover:cursor-pointer hover:border-black lg:w-[224px] h-[250px] w-[200px]"
              ref={ref2}
                style={{
                  border: "3px solid white",
                  borderRadius: "8px", // rounded-lg equivalent
                  background: "#5064C6",
                  display: "flex",
                  justifyContent: "center",
                  transition: 'transform 0.8s',

                }}
              >
                <div className=" flex flex-col gap-2  items-center filter mt-12 fill-transparent px-3 " onClick={handledownload}>
                  <img className="w-10" src={filedownloadicon}></img>
                  <h2 className="font-mono text-2xl text-white  font-semibold">Download CV</h2>
                  {/* <p className="font-Montserrat  text-[14px] text-white text-center font-semibold leading-6"></p> */}
                  
                </div>
              </motion.div>
              

            </div>
          </motion.div>
        </div>

        <br></br>
        <div className="max-[770px]:pb-10 flex justify-center md:justify-start">
        <motion.button
          className="px-7 py-4 flex select-none gap-1 rounded-lg bg-gradient-to-tr from-purple-800 to-cyan-400  text-center  font-sans text-[15px] font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
          type="button"
          onClick={()=>{window.scrollTo(0,4800)}}
          data-ripple-light="true"
          whileHover={{ scale: 1.1 }}
        >
          Let's Connect!
        </motion.button>

        </div>
        
      </div>
    </>
  );
};

export default About;