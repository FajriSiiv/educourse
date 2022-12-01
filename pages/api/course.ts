// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type PropsCourse = {
  title: string;
  mentor: string;
  rate: number;
  number_student: number;
  number_buy: number;
  price_course: number;
  level: string;
};

const coursesJson: PropsCourse[] = [
  {
    title: "Learning ReactJS 2023",
    mentor: "M Fajri",
    number_student: 121235,
    number_buy: 23235,
    price_course: 160000,
    rate: 5,
    level: "Beginner",
  },
  {
    title: "ReactJS State Management (Redux,Zustand)",
    mentor: "Younke .K",
    number_student: 51235,
    number_buy: 52235,

    price_course: 200000,

    rate: 4,
    level: "Advance",
  },
  {
    title: "Learning VueJS (NUXT.js) 2023",
    mentor: "Siiv Fajri",
    number_student: 142235,
    number_buy: 8235,

    price_course: 100000,
    rate: 5,
    level: "Beginner",
  },
  {
    title: "Learning NodeJS (Beginner to Advance) 2023",
    mentor: "Sandika Galih",
    number_student: 102235,
    number_buy: 75235,

    price_course: 240000,
    rate: 5,
    level: "Advance",
  },
  {
    title: "Learning ReactJS 2023",
    mentor: "M Fajri",
    number_student: 121235,
    number_buy: 23235,
    price_course: 160000,
    rate: 5,
    level: "Beginner",
  },
  {
    title: "ReactJS State Management (Redux,Zustand)",
    mentor: "Younke .K",
    number_student: 51235,
    number_buy: 52235,

    price_course: 200000,

    rate: 4,
    level: "Advance",
  },
  {
    title: "Learning VueJS (NUXT.js) 2023",
    mentor: "Siiv Fajri",
    number_student: 142235,
    number_buy: 8235,

    price_course: 100000,
    rate: 5,
    level: "Beginner",
  },
  {
    title: "Learning NodeJS (Beginner to Advance) 2023",
    mentor: "Sandika Galih",
    number_student: 102235,
    number_buy: 75235,

    price_course: 240000,
    rate: 5,
    level: "Advance",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PropsCourse[]>
) {
  res.status(200).json(coursesJson);
}
