"use client";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillStar } from "react-icons/ai";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Image from "next/image";
import Orang1 from "public/images/orang-1.webp";
import Orang2 from "public/images/orang-2.webp";

const SlideTesti = ({
  personImg,
  personName,
}: {
  personImg: any;
  personName: string;
}) => {
  return (
    <div className="h-[500px] w-full sm:h-fit sm:py-8">
      <div className="grid grid-cols-3 h-full gap-x-20">
        <div className="col-span-1 flex items-start justify-center md:hidden ">
          <div className="w-full h-5/6 relative ">
            <Image
              src={personImg}
              alt="contoh"
              className="object-cover h-full w-full rounded-2xl object-top"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-3 md:w-full">
          <h3 className="text-5xl font-semibold sm:text-2xl">{personName}</h3>
          <p className="py-7 text-secondary leading-loose w-5/6 md:w-full md:text-base sm:text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem a
            voluptas veniam, dolorum eligendi quo laboriosam. Odio, sapiente
            numquam fuga officiis exercitationem iste aut nobis ducimus rerum
            possimus doloribus, accusamus at harum animi voluptatum enim
            quibusdam tempore esse autem, odit sunt. Ut minus sapiente
            repudiandae. Eos recusandae omnis veniam impedit.
          </p>
          <div className="flex gap-x-2 items-center">
            <div className="flex items-center gap-x-2">
              <AiFillStar className="fill-yellow-400 w-6 h-6" />
              <AiFillStar className="fill-yellow-400 w-6 h-6" />
              <AiFillStar className="fill-yellow-400 w-6 h-6" />
              <AiFillStar className="fill-yellow-400 w-6 h-6" />
              <AiFillStar className="fill-yellow-400 w-6 h-6" />
            </div>
            <span className="text-xl font-semibold">5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  var settings = {
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const customeSlider = useRef<any>();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const ButtonNav = ({
    children,
    funClick,
  }: {
    children: any;
    funClick: () => void;
  }) => {
    return (
      <button
        onClick={funClick}
        className="p-3 rounded-full grid place-content-center bg-[#E3E7EB] hover:bg-primary group sm:p-1"
      >
        {children}
      </button>
    );
  };

  return (
    <div className="px-20 relative md:px-7 sm:px-3">
      <div className="absolute bottom-10 right-20 z-10 flex gap-x-3 sm:right-5 sm:bottom-3">
        <ButtonNav funClick={() => gotoPrev()}>
          <HiOutlineArrowNarrowLeft className="w-7 h-7 group-hover:text-white sm:w-4 sm:h-4" />
        </ButtonNav>
        <ButtonNav funClick={() => gotoNext()}>
          <HiOutlineArrowNarrowRight className="w-7 h-7 group-hover:text-white sm:w-4 sm:h-4" />
        </ButtonNav>
      </div>
      <Slider {...settings} ref={customeSlider}>
        <SlideTesti personName="Andreas Konlin" personImg={Orang1} />
        <SlideTesti personName="Luis .A" personImg={Orang2} />
        <SlideTesti personName="Peter Kous" personImg={Orang1} />
        <SlideTesti personName="Fajri Siiv" personImg={Orang2} />
      </Slider>
    </div>
  );
}
