"use client";

import React from "react";

import { TfiRulerPencil } from "react-icons/tfi";
import { FaAward } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import Sponsor from "public/images/stripe.webp";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  backg: string;
  children: any;
  title: string;
};

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

const CardGoals = ({ backg, children, title }: Props) => {
  return (
    <motion.div
      variants={item}
      className="flex flex-col items-start w-1/3 border-2 rounded-xl px-4 py-6 gap-y-5 bg-white md:w-[45%] md:max-w-full sm:w-full"
    >
      <div
        className={`w-20 h-20  rounded-lg grid place-content-center md:w-16 md:h-16`}
        style={{
          background: `${backg}`,
        }}
      >
        {children}
      </div>
      <h3 className="font-semibold text-2xl md:text-xl">{title}</h3>
      <p className="leading-relaxed text-secondary md:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ex
        consequuntur facilis officiis aspernatur. Fuga, eligendi quod!
      </p>
    </motion.div>
  );
};

export default function Goals() {
  return (
    <div className="px-20 py-16 md:px-7 sm:px-3">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <motion.h2
          variants={item}
          className="text-5xl font-semibold md:text-3xl sm:text-lg"
        >
          Achive Your Goals With Us
        </motion.h2>
        <motion.p
          variants={item}
          className="w-2/3 text-lg font-light mx-auto my-7 leading-loose md:text-base md:leading-normal md:my-4 sm:text-xs sm:w-full"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          libero? Odit dolore neque cupiditate. Eos at commodi odit cumque
          iusto, quia, mollitia veniam natus illum perspiciatis quam et officiis
          similique.
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-between gap-x-7 md:gap-3 md:flex-wrap md:justify-center"
      >
        <CardGoals backg="#C7F7F9" title="Learn the latest skills">
          <TfiRulerPencil className="w-10 h-10" />
        </CardGoals>
        <CardGoals backg="#C8FBCE" title="Get ready for Career">
          <BiAtom className="w-10 h-10" />
        </CardGoals>
        <CardGoals backg="#FBC1B9" title="Earn a Certificate">
          <FaAward className="w-10 h-10" />
        </CardGoals>
      </motion.div>
      <div className="mt-10 py-10 grid grid-cols-5 place-items-center">
        <div className="relative">
          <Image src={Sponsor} alt="sponsor" />
        </div>
        <div className="relative">
          <Image src={Sponsor} alt="sponsor" />
        </div>
        <div className="relative">
          <Image src={Sponsor} alt="sponsor" />
        </div>
        <div className="relative">
          <Image src={Sponsor} alt="sponsor" />
        </div>
        <div className="relative">
          <Image src={Sponsor} alt="sponsor" />
        </div>
      </div>
    </div>
  );
}
