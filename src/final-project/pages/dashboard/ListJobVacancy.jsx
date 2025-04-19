import React, { useState } from "react";
import { useGlobal } from "../../context/GlobalContext";
import axios from "axios";
import JobFilter from "../../components/JobFilter";
import SearchFilterForm from "../../components/SearchFilterForm";
import JobTable from "./JobTable";
import Cookies from "js-cookie";

const ListJobVacancy = () => {
  const {
    setJobs,
    logout,
    jobs,
    loading,
    setFilters,
    filteredJobs,
    searchQuery,
  } = useGlobal();
  const [jobToDelete, setJobToDelete] = useState(null);
  const [jobToDeleteName, setJobToDeleteName] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleDelete = (id, title) => {
    setJobToDelete(id);
    setJobToDeleteName(title);

    document.getElementById("my_modal_1").showModal();
  };

  // console.log(jobToDelete);

  const confirmDelete = () => {
    if (!jobToDelete) return;
    axios
      .delete(
        "https://final-project-api-alpha.vercel.app/api/jobs/" + jobToDelete,
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then(() => {
        setJobs((prev) => prev.filter((item) => item._id !== jobToDelete));
        setIsError(false);
        // console.log("click delete");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((err) => {
        if (err.status === 401) {
          // console.log(err);
          setIsError(true);
          setErrorMessage(err.response.data.msg);
          document.getElementById("error-modal").showModal();
        }
      });
  };

  const handleClose = () => {
    isError ? logout() : navigate("/dashboard/list-job-vacancy");
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  // console.log(jobs);
  return (
    <div className="overflow-x-auto bg-white shadow-md p-4 rounded-md w-xs md:w-full mx-auto">
      {showToast && !isError ? (
        <div className="toast toast-end z-10">
          <div className="alert alert-success text-white">
            <p>
              Success Deleted{" "}
              <span className="font-bold">{jobToDeleteName}</span>
            </p>
          </div>
        </div>
      ) : (
        <dialog id="error-modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Warning !</h3>
            <p className="pt-2 text-sm">{errorMessage && errorMessage}</p>

            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => handleClose()}
                  className="btn rounded-md bg-blue-600 hover:bg-blue-800 text-white"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Warning!</h3>
          <p className="pt-2 text-sm">
            Are you sure want to delete {""}{" "}
            <span className="font-bold">
              {jobToDeleteName && jobToDeleteName}
            </span>
            {"  "} ?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={confirmDelete}
                className="btn bg-error text-white mr-2"
              >
                Yes
              </button>
              <button onClick={() => setJobToDelete(null)} className="btn">
                No
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="flex items-center gap-4 mb-6">
        <form className="bg-white mt-3 border-neutral-100 border p-6 rounded-xl shadow-sm w-full mx-auto flex gap-4 justify-between  md:flex-row flex-col">
          <div className="w-full">
            <label htmlFor="" className="text-neutral-700 font-medium text-sm">
              Search
            </label>
            <SearchFilterForm />
          </div>
          <JobFilter onFilter={handleFilter} />
        </form>
      </div>

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
      <JobTable action={handleDelete} />
    </div>
  );
};

export default ListJobVacancy;
