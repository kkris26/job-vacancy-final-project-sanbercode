import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import JobCard from "./components/JobCard";
import HeroHome from "./components/HeroHome";

import JobCardSkeleton from "./components/JobCardSkeleton";
import { useGlobal } from "./context/GlobalContext";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  const { jobs, loading } = useGlobal();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <HeroHome />
      <div className=" px-4 flex flex-col items-center mt-10 md:mt-20">
        {/* <Heading size="text-4xl">Job Terbaru</Heading> */}
        <div className=" m-auto w-full md:w-7xl grid md:grid-cols-3 gap-2 md:gap-5 0">
          {loading
            ? [...Array(9)].map((_, index) => <JobCardSkeleton key={index} />)
            : jobs
                .slice(0, 12)
                .map((item) => (
                  <JobCard
                    key={item._id}
                    title={item.title}
                    job_description={item.job_description}
                    job_type={item.job_type}
                    id={item._id}
                    image={item.company_image_url}
                    company_name={item.company_name}
                    salary_min={item.salary_min}
                    salary_max={item.salary_max}
                    job_tenure={item.job_tenure}
                    company_city={item.company_city}
                  />
                ))}
        </div>
        <Link to="/job-vacancy">
          <button className="btn flex bg-transparent transition-all border border-neutral-600 duration-300 ease-in-out justify-center rounded-full items-center text-md font-medium text-center text-neutral-600 hover:border-blue-800  hover:bg-blue-800 hover:text-white mx-auto md:mt-10 mt-5">
            View All
            <MdArrowOutward className="text-lg" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
