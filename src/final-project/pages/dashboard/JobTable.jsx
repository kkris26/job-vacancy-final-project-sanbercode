import React from "react";
import DataTable from "react-data-table-component";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

import { AiFillEdit } from "react-icons/ai";

const JobTable = ({ action }) => {
  const { filteredJobs, loading } = useGlobal();
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "Job",
      selector: (row) => row.title,
      sortable: true,
      sortFunction: (a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    },
    {
      name: "Company",
      selector: (row) => row.company_name,
      sortable: true,
      sortFunction: (a, b) =>
        a.company_name
          .toLowerCase()
          .localeCompare(b.company_name.toLowerCase()),
    },
    {
      name: "City",
      selector: (row) => row.company_city,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>
        row.job_status === 1 ? (
          <p className="text-green-600">Active</p>
        ) : (
          <p className="text-red-600">Non-Active</p>
        ),
    },
    {
      name: "Icon",
      cell: (row) => (
        <img
          src={row.company_image_url}
          alt={row.company_name}
          className="w-8 h-8 object-contain rounded-xl"
        />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2 text-lg md:w-full w-xs">
          <Link to={`/dashboard/list-job-vacancy/edit/${row._id}`}>
            <AiFillEdit className="text-green-700" />
          </Link>
          <MdDeleteForever
            className="text-red-500 cursor-pointer"
            onClick={() => action(row._id, row.title)}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={filteredJobs}
      progressPending={loading}
      noDataComponent="Data not found"
      pagination
      highlightOnHover
      striped
      responsive
      dense
    />
  );
};

export default JobTable;
