import React from "react";

import ImageJumbotron from "public/images/sosmed.webp";
import Image from "next/image";
import ButtonStarted from "../Button";

export default function Jumbotron() {
  return (
    <div className="h-[100vh] max-h-[800px] w-full  relative">
      <div className="w-full flex justify-center items-center h-full px-20">
        <div className="">
          <h2 className="text-[4rem] font-semibold tracking-wide leading-tight w-5/6">
            Explore New Skills By Top Teachers
          </h2>
          <p className="text-lg w-4/5 my-4 text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A corrupti
            tempore omnis natus cupiditate accusantium
          </p>
          <ButtonStarted />
        </div>
        <div className="">
          <div className="relative w-full h-full border-4 border-white rounded-xl">
            <Image
              src={ImageJumbotron}
              alt="Jumbotron Images"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-2/5 h-[100vh] max-h-[800px] bg-primary -z-10"></div>
    </div>
  );
}
