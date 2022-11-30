"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="px-20">
      <Slider {...settings}>
        <div className="h-[400px] w-full">
          <div className="grid grid-cols-3 h-full gap-x-20">
            <div className="col-span-1 bg-blue-50">1</div>
            <div className="col-span-2">2</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
