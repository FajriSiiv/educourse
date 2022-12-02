"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import ImgeCourse from "public/images/web.webp";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  dataLooping: any;
}

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

export default function MapCourse({ dataLooping }: Props) {
  let RpIndo = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      className="flex flex-wrap gap-x-5 gap-y-10 place-content-between "
    >
      {dataLooping.map((course: any, i: number) => (
        <motion.div
          variants={item}
          key={i}
          className="w-[30%] flex flex-col rounded-xl relative bg-white border-2 md:w-[45%] sm:w-full"
        >
          <div className="absolute right-2 top-3 bg-red-500 rounded-md z-10 text-white tracking-wider text-sm px-4 py-1.5">
            <p>{course.level}</p>
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
          <div className="px-5 py-3 md:px-1">
            <h3 className="text-2xl font-semibold py-3 leading-relaxed min-h-[100px]">
              {course.title.slice(0, 30) + "..."}
            </h3>
            <div className="flex pb-3 items-center justify-between">
              <div className="flex items-center gap-x-2">
                <span className="flex items-center gap-x-1 italic text-xl">
                  {course.rate}{" "}
                  <AiFillStar className="fill-yellow-300 w-6 h-6" />
                </span>
                <span className="text-xl text-secondary md:text-sm">
                  ({course.number_buy})
                </span>
              </div>
              <span className="text-xl md:text-sm">
                {course.number_student} Student
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center pt-3 text-lg md:text-sm">
              <div className="flex items-center gap-x-2">
                <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
                <span className="tracking-wide text-sm">{course.mentor}</span>
              </div>
              <span className="text-primary font-semibold md:text-sm  ">
                {RpIndo.format(course.price_course)}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
