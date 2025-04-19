import React from "react";
import TitleJobDetails from "./TitleJobDetails";
import DescriptionJobDetails from "./DescriptionJobDetails";
import Heading from "./Heading";
import formatRupiah from "../utils/formatRupiah";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const JobInformation = ({ jobData, loadingDetails }) => {
  return (
    <div className=" w-full">
      <Heading >Job Information</Heading>
      {loadingDetails ? (
        <div className="shadow-md mt-3 flex flex-col gap-4 border border-neutral-100 mx-auto bg-white p-6 rounded-lg animate-pulse">
          <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between border-b border-neutral-100 pb-5">
            <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <ul className="list p-0 bg-base-100 rounded-box mt-3">
            <li className="list-row p-0 gap-2 items-center flex">
              <div className="size-15 rounded-box bg-gray-200"></div>
              <div>
                <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            </li>
          </ul>

          <div className="mt-2 gap-6 flex flex-col">
            <div>
              <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="h-10 w-full bg-gray-300 rounded-full mt-4"></div>
        </div>
      ) : (
        <div className="shadow-md mt-3 flex flex-col gap-4 border border-neutral-100 mx-auto bg-white p-6 rounded-lg">
          <div className="flex md:flex-row md:gap-0 gap-3 flex-col justify-between border-b-1 border-neutral-100 pb-5">
            <h1 className="md:text-2xl text-xl font-bold text-gray-800">
              {jobData.title}
            </h1>
            <div className="flex gap-2 items-center">
              <p
                className={`${
                  jobData.job_status ? "bg-green-600" : "bg-red-700"
                }  text-white py-1 px-3 md:text-sm text-xs inline-block rounded-full`}
              >
                {jobData.job_status ? "Active" : "Non-Active"}
              </p>
              <p className="bg-indigo-600 text-white py-1 px-3 md:text-sm text-xs inline-block rounded-full">
                {jobData.job_type}
              </p>
              <p className="bg-orange-500 text-white py-1 px-3  md:text-sm text-xs inline-block rounded-full">
                {jobData.job_tenure}
              </p>
            </div>
          </div>

          <ul className="list p-0 bg-base-100 rounded-box mt-3">
            <li className="list-row p-0 gap-2 items-center">
              <div>
                <img
                  className="size-15 p-1 rounded-box object-contain border border-neutral-100"
                  src={jobData.company_image_url}
                />
              </div>
              <div>
                <div className="md:text-lg text-md font-bold">{jobData.company_name}</div>
                <div className="text-md opacity-60">{jobData.company_city}</div>
              </div>
            </li>
          </ul>
          <div className="mt-2 gap-6 flex flex-col">
            <div>
              <TitleJobDetails>Job Description</TitleJobDetails>
              <DescriptionJobDetails>
                {jobData.job_description}
              </DescriptionJobDetails>
            </div>
            <div>
              <TitleJobDetails>Qualification</TitleJobDetails>
              <DescriptionJobDetails>
                {jobData.job_qualification}
              </DescriptionJobDetails>
            </div>
            <div>
              <TitleJobDetails>Salary</TitleJobDetails>
              <DescriptionJobDetails>
                {formatRupiah(jobData.salary_min)} -{" "}
                {formatRupiah(jobData.salary_max)} /month
              </DescriptionJobDetails>
            </div>
          </div>
          <a
            href="https://sanbercode.com/"
            disabled={!jobData.job_status}
            className="btn bg-blue-600 mt-6 rounded-full text-white hover:bg-blue-800"
          >
            Apply Now <FaArrowRightLong />
          </a>
        </div>
      )}
    </div>
  );
};

export default JobInformation;
