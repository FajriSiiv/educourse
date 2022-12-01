import React from "react";
import ButtonStarted from "../Button";
import Image from "next/image";
import { FcWorkflow } from "react-icons/fc";

export default function Footer() {
  const linkFooter = [
    {
      title: "Quick Links",
      links: ["Courses", "Articles", "Notes", "Certificates"],
    },
    {
      title: "Others",
      links: ["Career", "Offer", "Privacy & Policy", "Return Policy"],
    },
    {
      title: "Community",
      links: ["Contact - 16910", "SMS - ECHelp to 12345", "Email Support"],
    },
  ];

  return (
    <div className="px-20 my-10">
      <div className="bg-[#151328] flex px-28 py-5 h-[300px] w-full rounded-[20px] text-white">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-5xl text-bold tracking-wide">Ready to join?</h2>
          <p className="py-4 text-secondary">
            You will receive exclusive offers on selective courses that can
            enhance your career prospects.
          </p>
          <ButtonStarted textProps="Register Now" />
        </div>
        <div className="w-1/2 ">
          <div className="relative w-full h-full grid place-content-center">
            <FcWorkflow className="w-60 h-60" />
          </div>
        </div>
      </div>
      <div className="my-20 flex gap-x-20">
        <div className="w-1/4">
          <h1 className="text-3xl font-semibold">
            Edu<span className="text-sky-600">course</span>
          </h1>
          <p className="my-5 leading-relaxed text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            explicabo ullam
          </p>
          <div className="flex gap-x-3">
            <ButtonStarted />
          </div>
        </div>
        <div className="w-3/4  grid grid-cols-3 gap-5 ">
          {linkFooter.map((link, i) => (
            <div key={i} className="flex flex-col gap-y-3">
              <p className="text-semibold text-lg">{link.title}</p>
              {link.links.map((eLink: any) => (
                <span key={eLink} className="text-secondary">
                  {eLink}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
