import React from "react";
import Goals from "../components/Goals";
import Jumbotron from "../components/Jumbotron";
import Mentor from "../components/Mentor";
import Popular from "../components/Popular";
import Testimonial from "../components/Testimonial";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="">
      <Jumbotron />
      <div className="bg-gray-50">
        <Goals />
        <Popular />
        <Mentor />
        <Testimonial />
      </div>
    </div>
  );
}
