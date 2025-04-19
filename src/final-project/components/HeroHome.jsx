import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="h-screen flex w-full items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Start Find <span className="text-yellow-300">Your Dream Job Now</span>
        </h1>
        <p className="md:text-lg mb-6">
          Explore thousands of job vacancies from various leading companies
          throughout Indonesia. Realize your career starting here!
        </p>
        <Link
          to="/job-vacancy"
          className="btn text-neutral-600 border rounded-full text-md transition-all duration-300 hover:bg-transparent hover:text-white font-medium px-6"
        >
          Search for Vacancies <MdArrowOutward className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default HeroHome;
