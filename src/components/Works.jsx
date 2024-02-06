import React from "react";
import react, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import { easeInOut, easeOut } from "framer-motion";
import mainlogo from "../assets/m-logo3.png";
import { Input } from "@nextui-org/react";

import { ListboxSection } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Works = () => {
  const { scrollYProgress } = useScroll();
  const imgarray = [
    "/images/jj1.png",
    "/images/patched.png",
    "/images/innergramss.png",
    "/images/ipadd.png",
    "/images/collcomss.png",
    "/images/myntraclone.png",
    "/images/tictactoe.png",
  ];
  const list = [
    {
      title: "Orange",
      img: "images/patched.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/collcomss.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/ipadd.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/innergramss.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/myntraclone.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/jj1.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/tictactoe.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.png",
      price: "$12.20",
    },
  ];
  return (
    <>
      {/* svg heading */}
      <div className="bg-pink-600 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#050816"
            fill-opacity="1.0"
            d="M0,96L40,117.3C80,139,160,181,240,192C320,203,400,181,480,154.7C560,128,640,96,720,106.7C800,117,880,171,960,176C1040,181,1120,139,1200,117.3C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="px-5 ">
        <div className="gap-12 grid grid-cols-2 sm:grid-cols-3">
          {list.map((item, index) => (
            <Card
              className=" border-[15px]  border-white "
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="hover:blur-sm overflow-visible p-0">
                <div className="relative group w-full h-full">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full bg-cover h-[220px] shadow-2xl"
                    src={item.img}
                  />
                  <Image
                    src="/images/projectshareicon.png"
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </CardBody>
              <CardFooter className="text-small justify-center">
                <b>{item.title}</b>
                {/* <p className="text-default-500">{item.price}</p> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
