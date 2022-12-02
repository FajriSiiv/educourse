"use client";
import React from "react";

import ImageJumbotron from "public/images/sosmed.webp";
import Image from "next/image";
import ButtonStarted from "../Button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

const backJumbo = {
  hidden: { height: 0 },
  visible: {
    height: "80%",
    transition: {
      duration: 2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Jumbotron() {
  return (
    <div className="h-[100vh] max-h-[800px] w-full relative">
      <motion.div className="w-full flex justify-center items-center h-full px-20 md:px-10 sm:px-3">
        <motion.div
          className="md:w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={item}
            className="text-[4rem] font-semibold tracking-wide leading-tight w-5/6 md:w-full sm:text-3xl md:text-5xl "
          >
            Explore New Skills By Top Teachers
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg w-4/5 my-4 text-secondary md:text-base sm:text-sm"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A corrupti
            tempore omnis natus cupiditate accusantium
          </motion.p>
          <ButtonStarted variant={item} />
        </motion.div>
        <div className="md:hidden">
          <motion.div className="relative w-full h-full border-4 border-white rounded-xl">
            <Image
              src={ImageJumbotron}
              alt="Jumbotron Images"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={backJumbo}
        initial="hidden"
        animate="visible"
        className="absolute right-0 bottom-0 w-2/6 h-[650px] bg-primary -z-10 md:hidden"
      ></motion.div>
    </div>
  );
}
