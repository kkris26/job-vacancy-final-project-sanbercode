import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeroDetailsJob from "./components/HeroDetailsJob";
import JobInformation from "./components/JobInformation";
import SidebarJob from "./components/SidebarJob";

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState([]);
  const [loadingDetails, setLoadingDetails] = useState(true);
  useEffect(() => {
    axios
      .get(`https://final-project-api-alpha.vercel.app/api/jobs/${jobId}`)
      .then((res) => {
        setJobData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingDetails(false);
      });
  }, [jobId]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  return (
    <>
      <HeroDetailsJob />
      <div className="flex px-4 md:px-0 md:w-7xl flex-col md:flex-row mx-auto mt-10 gap-10 md:gap-5">
        <JobInformation jobData={jobData} loadingDetails={loadingDetails} />
        <SidebarJob/>
      </div>
    </>
  );
};

export default JobDetails;
