import React from "react";

import { TfiRulerPencil } from "react-icons/tfi";
import { FaAward } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import Sponsor from "public/images/stripe.webp";
import Image from "next/image";

type Props = {
  backg: string;
  children: any;
  title: string;
};

const CardGoals = ({ backg, children, title }: Props) => {
  return (
    <div className="flex flex-col items-start w-1/3 border-2 rounded-xl px-4 py-6 gap-y-5 bg-white">
      <div
        className={`w-20 h-20  rounded-lg grid place-content-center`}
        style={{
          background: `${backg}`,
        }}
      >
        {children}
      </div>
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="leading-relaxed text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ex
        consequuntur facilis officiis aspernatur. Fuga, eligendi quod!
      </p>
    </div>
  );
};

export default function Goals() {
  return (
    <div className="px-20 py-16">
      <div className="text-center">
        <h2 className="text-5xl font-semibold">Achive Your Goals With Us</h2>
        <p className="w-2/3 text-lg font-light mx-auto my-7 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          libero? Odit dolore neque cupiditate. Eos at commodi odit cumque
          iusto, quia, mollitia veniam natus illum perspiciatis quam et officiis
          similique.
        </p>
      </div>
      <div className="flex justify-between gap-x-7">
        <CardGoals backg="#C7F7F9" title="Learn the latest skills">
          <TfiRulerPencil className="w-10 h-10" />
        </CardGoals>
        <CardGoals backg="#C8FBCE" title="Get ready for Career">
          <BiAtom className="w-10 h-10" />
        </CardGoals>
        <CardGoals backg="#FBC1B9" title="Earn a Certificate">
          <FaAward className="w-10 h-10" />
        </CardGoals>
      </div>
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
