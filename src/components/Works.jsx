import React from "react";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll} from "framer-motion";

import { useInView } from "react-intersection-observer";
import { easeInOut, easeOut } from "framer-motion";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

const Works = () => {
  const { scrollYProgress } = useScroll();
  const list = [
    {
      title: "Patched",
      img: "images/patched.png",
      techstack: "ReactJs , CSS , Axios API , Material UI ",
      link:"https://dev.patched.tech/"
    },
    {
      title: "Innergram",
      img: "/images/innergramss.png",
      techstack: "Typescript , DSA , ReactJs, NextUI , Tailwind ",
      link:"https://innergram.vercel.app/"
    },
    
    {
      title: "IP Address tracker",
      img: "/images/ipadd.png",
      techstack: "ReactJs , Geolocation API , Leaflet Map , Tailwind  ",
      link:"https://ipaddtracker.vercel.app/"
    },
   
    {
      title: "Myntra Clone (HomePage)",
      img: "/images/myntraclone.png",
      techstack: "HTML , Tailwind , Javascript ",
      link:"https://github.com/DownOnCoffee/myntraClone"
    
    },
    {
      title: "Digital Adhivakta",
      img: "/images/jj1.png",
      techstack: "NextJs , Tailwind , NextUI ",
      link:"https://youtu.be/ksM58tGsaIw?si=vcphKefEgu_Zfgp1"
    },
    {
      title: "Scheduly",
      img: "/images/schedulyss.png",
      techstack: "ReactJs , Typescript , CSS ",
      link:"https://to-do-list-sooty-six.vercel.app/"
    },
    {
      title: "CollCom ",
      img: "/images/collcomss.png",
      techstack: "Javascript , HTML , Tailwind",
      link:"https://github.com/DownOnCoffee/collcomfe"
    },
    
    {
      title: "Advice Generator App",
      img: "/images/advicess.png",
      techstack: "ReactJs , Tailwind , Axios API",
      link:"https://adviceforu.vercel.app/"

    },
    {
      title: "TicTacToe",
      img: "/images/tictactoe.png",
      techstack: "ReactJs , CSS ",
      link:"https://tictactoe-two-tau.vercel.app/"
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      {/* svg heading */}
      <div className="mt-10 bg-pink-600 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#050816"
            fill-opacity="1.0"
            d="M0,96L40,117.3C80,139,160,181,240,192C320,203,400,181,480,154.7C560,128,640,96,720,106.7C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        <motion.h1
          className={`font-black sm:text-[43px] xs:text-[50px]  lg:leading-[90px]  text-white lg:text-[80px] text-center font-Montserrat`}
        >
          My Works
        </motion.h1>
       

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill="#050816"
            fill-opacity="1.0"
            d="M0,96L40,117.3C80,139,160,181,240,192C320,203,400,181,480,154.7C560,128,640,96,720,106.7C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        
      </div>
      

      <motion.div className="bg-[#050816]">
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 px-5">
          {list.map((item, index) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 100, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, easeInOut, delay: index / 5 }}
              className="max-w-[470px]"
            >
              <Link to ={item.link}>
              
              <Card
                className=""
                shadow="md"
                key={index}
                isPressable
               
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="hover:blur-sm overflow-visible p-0">
                  
                    <Image
                      shadow="sm"
                      radius="lg"
                      alt={item.title}
                      className=" object-cover h-[220px] shadow-2xl w-full"
                      src={item.img}
                    ></Image>
                    <p className="absolute top-1/2 left-1/2 ">tap</p>
                    {/* <Button className=" absolute top-50 right-50 transition-all duration-300 bg-black text-white opacity-0 hover:opacity-100">
                      share
                    </Button> */}
                  
                </CardBody>
                <CardFooter className="text-small justify-center flex flex-col">
                  <b>{item.title}</b>
                  <small className="text-default-500">{item.techstack}</small>
                </CardFooter>
              </Card>
              </Link>
             
            </motion.div>
          ))}
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#050816"
            fill-opacity="1.0"
            d="M0,96L40,117.3C80,139,160,181,240,192C320,203,400,181,480,154.7C560,128,640,96,720,106.7C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg> */}
      </motion.div>
    </>
  );
};

export default Works;
