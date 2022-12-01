"use client";
import React from "react";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const CardMentor = () => {
  return (
    <motion.div variants={item} className="w-[22%] p-3 bg-white rounded-xl">
      <div className="w-full h-52 bg-red-500 rounded-xl"></div>
      <div className="text-center py-5">
        <h3 className="text-xl font-semibold">Usman Khalid</h3>
        <p>Designer</p>
      </div>
    </motion.div>
  );
};

export default function Mentor() {
  return (
    <div className="px-20 pb-20">
      <div className="grid grid-cols-2 justify-between items-center">
        <h2 className="text-5xl leading-normal font-semibold">
          Our Experience & Professional Mentors
        </h2>
        <p className="text-lg text-secondary leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          cupiditate consectetur? Porro error quae nulla impedit voluptate
          cupiditate omnis nostrum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Mollitia dolorum laudantium quibusdam ex aut.
          Officia.
        </p>
      </div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={container}
        viewport={{ once: true, amount: 0.8 }}
        className="flex place-content-between flex-wrap w-full mt-10 gap-7"
      >
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
      </motion.div>
    </div>
  );
}
