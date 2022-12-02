import Link from "next/link";
import React from "react";

export default function Header() {
  const linkHeader = [
    {
      nama: "home",
      tujuan: "/",
    },
    {
      nama: "Course",
      tujuan: "/courses",
    },
    {
      nama: "Mentors",
      tujuan: "/",
    },
    {
      nama: "Testimonial",
      tujuan: "/",
    },
  ];

  return (
    <div className="px-20 py-4 flex justify-between items-center absolute top-0 left-0 w-[100vw] max-w-[1440px] z-50 md:px-10">
      <h1 className="text-3xl font-semibold">
        Edu<span className="text-sky-600">course</span>
      </h1>
      <div className="flex gap-x-10 text-primary md:hidden">
        {linkHeader.map((link: any, i: number) => (
          <Link
            href={link.tujuan}
            key={i}
            className="hover:text-black cursor-pointer capitalize"
          >
            {link.nama}
          </Link>
        ))}
      </div>
    </div>
  );
}
