import React, { useEffect } from "react";

import HeroJobVacancy from "./components/HeroJobVacancy";
import JobCard from "./components/JobCard";
import JobFilter from "./components/JobFilter";
import JobCardSkeleton from "./components/JobCardSkeleton";
import { useGlobal } from "./context/GlobalContext";
import Heading from "./components/Heading";

const JobVacancy = () => {
  const { loading, searchQuery, setFilters, filteredJobs } = useGlobal();

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroJobVacancy />

      <div className="flex px-4 md:px-0 md:w-7xl mx-auto gap-6 md:mt-20 mt-10 min-h-140 flex-col md:flex-row">
        <div className="md:w-md">
          <Heading>Job Filters</Heading>
          <form className="bg-white mt-3 border-neutral-100 border p-4 md:p-6 rounded-xl shadow-xs w-full md:max-w-xl mx-auto flex md:flex-col gap-2 md:gap-4">
            <JobFilter onFilter={handleFilter} className="sticky top-0 z-10" />
          </form>
        </div>
        <div className="flex flex-col  md:w-7xl ">
          {searchQuery ? (
            <p className="mb-4 text-gray-600 text-sm">
              Showing {filteredJobs.length} results for search{" "}
              <strong>"{searchQuery}"</strong>
            </p>
          ) : (
            <p className="mb-4 text-gray-600 text-sm">
              {loading
                ? "Getting Data ...."
                : `Showing ${filteredJobs.length} ${
                    filteredJobs.length > 1 ? "Jobs" : "Job"
                  }`}
            </p>
          )}
          {!loading && filteredJobs == 0 && <p>Data not found</p>}
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {loading
              ? [...Array(8)].map((_, index) => <JobCardSkeleton key={index} />)
              : filteredJobs.map((item) => (
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
        </div>
      </div>
    </>
  );
};

export default JobVacancy;
