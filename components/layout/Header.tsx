import React from "react";

export default function Header() {
  return (
    <div className="px-20 py-4 flex justify-between items-center absolute top-0 left-0 w-[100vw] max-w-[1440px] z-50">
      <h1 className="text-3xl font-semibold">
        Edu<span className="text-sky-600">course</span>
      </h1>
      <div className="flex gap-x-10 text-white ">
        <span className="hover:text-black cursor-pointer">Home</span>
        <span className="hover:text-black cursor-pointer">Course</span>
        <span className="hover:text-black cursor-pointer">Mentors</span>
        <span className="hover:text-black cursor-pointer">Testimonial</span>
      </div>
    </div>
  );
}
