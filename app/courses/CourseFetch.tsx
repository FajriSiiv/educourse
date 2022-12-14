"use client";
import React, { use, useEffect, useState } from "react";
import MapCourse from "./MapCourse";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="p-1 w-fit rounded-full bg-primary relative">
      <AiOutlineLoading className=" animate-spin w-14 h-14 fill-white" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full"></div>
    </div>
  );
};

export default function CourseFetch() {
  const [dataCourse, setDataCourse] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch("/api/course");
        const data = await res.json();
        setLoading(false);
        setDataCourse(data);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    dataFetch();
  }, []);

  return (
    <div>
      <h1 className="py-10 text-5xl font-semibold text-center">
        Course Beginner to Advance
      </h1>
      <div className="flex place-content-center">{loading && <Loading />}</div>
      <div className="">
        {dataCourse ? <MapCourse dataLooping={dataCourse} /> : null}
      </div>
    </div>
  );
}
