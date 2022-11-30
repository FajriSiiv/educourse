import React from "react";

const CardMentor = () => {
  return (
    <div className="w-[22%] p-3 bg-white rounded-xl">
      <div className="w-full h-52 bg-red-500 rounded-xl"></div>
      <div className="text-center py-5">
        <h3 className="text-xl font-semibold">Usman Khalid</h3>
        <p>Designer</p>
      </div>
    </div>
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
      <div className="flex place-content-between flex-wrap w-full mt-10 gap-7">
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
      </div>
    </div>
  );
}
