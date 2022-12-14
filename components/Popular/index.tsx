"use client";
import React, { useEffect, useState } from "react";

import ImgeCourse from "public/images/web.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

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

const CardPopular = () => {
  return (
    <motion.div
      variants={item}
      className="w-1/3 flex flex-col rounded-xl relative bg-white md:w-full"
    >
      <div className="absolute right-2 top-3 bg-red-500 rounded-md z-10 text-white tracking-wider text-sm px-4 py-1.5">
        <p>Beginner</p>
      </div>
      <div className="w-full h-1/2 ">
        <div className="relative">
          <Image
            src={ImgeCourse}
            alt="Contoh Image"
            className=" w-full h-60 object-cover object-top rounded-t-xl"
          />
        </div>
      </div>
      <div className="px-5 py-3 sm:p-1">
        <h3 className="text-2xl font-semibold py-3 leading-relaxed sm:text-lg">
          Web Development - Creating CRUD
        </h3>
        <div className="flex pb-3 items-center justify-between">
          <div className="flex items-center gap-x-2">
            <span className="flex items-center gap-x-1 italic text-xl sm:text-sm">
              4.5{" "}
              <AiFillStar className="fill-yellow-300 w-6 h-6 sm:w-3 sm:h-3" />
            </span>
            <span className="text-xl text-secondary sm:text-sm">(110.412)</span>
          </div>
          <span className="text-xl sm:text-sm">34.605 Student</span>
        </div>
        <hr />
        <div className="flex justify-between items-center pt-3 text-lg">
          <div className="flex items-center gap-x-2">
            <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
            <span className="tracking-wide sm:text-base">Fajri</span>
          </div>
          <span className="text-primary font-semibold sm:text-base">
            Rp160.000
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Popular() {
  const [cardPopular, setcardPopular] = useState<any>();

  useEffect(() => {
    setcardPopular(CardPopular);
  }, []);

  return (
    <div className="h-full py-20 px-20 md:px-7 sm:px-4">
      <h2 className="text-5xl font-semibold mb-20 text-center sm:text-lg">
        Our Most Popular Courses
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="flex gap-x-7 md:flex-col md:gap-8"
      >
        {cardPopular}
        {cardPopular}
        {cardPopular}
      </motion.div>
      <div className="mt-10 grid place-content-center">
        <Link
          href={"/courses"}
          className="bg-transparent py-3 px-10 rounded-lg border-2 border-primary font-semibold text-primary tracking-wide text-xl"
        >
          Explore All
        </Link>
      </div>
    </div>
  );
}
