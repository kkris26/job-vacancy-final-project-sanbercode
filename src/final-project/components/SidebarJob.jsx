import React from "react";
import JobCard from "./JobCard";
import Heading from "./Heading";
import JobCardSkeleton from "./JobCardSkeleton";
import { useGlobal } from "../context/GlobalContext";

const SidebarJob = () => {
  const { jobs, loading } = useGlobal();
  return (
    <div className="flex md:w-xl flex-col gap-3">
      <Heading>Other Vacancies</Heading>
      {loading
        ? [...Array(3)].map((_, index) => <JobCardSkeleton key={index} />)
        : jobs
            .slice(0, 3)
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
  );
};

export default SidebarJob;
