import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchFilterForm from "./SearchFilterForm";

const HeroJobVacancy = () => {
  // console.log(loading)
  return (
    <div className="h-100 flex w-full items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white max-w-2xl px-4">
        <p className="md:text-lg mb-6">
          Explore thousands of job vacancies from various leading companies
          throughout Indonesia. Realize your career starting here!
        </p>
        <div className="md:w-xs w-[250px] mx-auto">
          <SearchFilterForm type="form-only" />
        </div>
      </div>
    </div>
  );
};

export default HeroJobVacancy;
