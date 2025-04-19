import React from "react";
import { Link } from "react-router-dom";
import formatRupiah from "../utils/formatRupiah";
import { MdArrowOutward } from "react-icons/md";

const JobCard = ({
  title,
  job_tenure,
  id,
  image,
  company_name,
  salary_min,
  salary_max,
  company_city,
}) => {
  return (
    <>
        <div className="p-5 bg-white border border-gray-100 rounded-lg shadow-xs">
          <Link to={`/job-vacancy/${id}`}>
            <h5 className="inline transition duration-200 text-xl font-bold tracking-tight text-gray-900 hover:text-blue-800">
              {title}
            </h5>
          </Link>
          <div className="flex items-center gap-2 mb-3 mt-2">
            <p className="text-xs bg-neutral-50 px-2 py-1 rounded font-bold text-green-500">
              {job_tenure}
            </p>
            <p className=" text-xs text-neutral-500">
              Salary {formatRupiah(salary_min)} - {formatRupiah(salary_max)}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <ul className="list p-0 bg-base-100 rounded-box">
              <li className="list-row p-0 gap-2 items-center">
                <div>
                  <img
                    className="size-10 rounded-box object-contain border border-neutral-100"
                    src={image}
                  />
                </div>
                <div>
                  <div className="text-xs">{company_name}</div>
                  <div className="text-xs opacity-60">{company_city}</div>
                </div>
              </li>
            </ul>

            <Link
              to={`/job-vacancy/${id}`}
              className="flex transition-all border duration-300 ease-in-out h-8 w-8 pl-0.5 justify-center rounded-full items-center text-xl font-medium text-center text-neutral-600 hover:border-blue-800  hover:bg-blue-800 hover:text-white"
            >
              <MdArrowOutward />
            </Link>
          </div>
        </div>
    </>
  );
};

export default JobCard;
