import React, { useEffect, useState } from "react";
import FormInput from "./component/FormInput";
import FormTextarea from "./component/FormTextArea";
import FormSelect from "./component/FormSelect";
import axios from "axios";
import { useGlobal } from "../../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const FormJobVacancy = () => {
  const { idJobs } = useParams();
  const navigate = useNavigate();
  // console.log(idJobs);
  const { setJobs, jobs, logout } = useGlobal();
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const intitialForm = {
    _id: "",
    title: "",
    job_type: "",
    job_description: "",
    job_qualification: "",
    job_tenure: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
    job_status: 1,
  };
  const [input, setInput] = useState(intitialForm);
  const jobStatusOptions = [
    { label: "Active", value: 1 },
    { label: "Non-Active", value: 0 },
  ];

  useEffect(() => {
    if (idJobs) {
      axios
        .get(`https://final-project-api-alpha.vercel.app/api/jobs/${idJobs}`)
        .then((res) => {
          setInput({
            _id: res.data._id,
            title: res.data.title,
            job_type: res.data.job_type,
            job_description: res.data.job_description,
            job_qualification: res.data.job_qualification,
            job_tenure: res.data.job_tenure,
            company_name: res.data.company_name,
            company_image_url: res.data.company_image_url,
            company_city: res.data.company_city,
            salary_min: res.data.salary_min,
            salary_max: res.data.salary_max,
            job_status: res.data.job_status,
          });
          // console.log("Curent ID " + res.data._id);
        });
    } else {
      setInput(intitialForm);
    }
  }, [idJobs]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]:
        type === "number" || name === "job_status" ? Number(value) : value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault;
    if (input._id) {
      axios
        .put(
          "https://final-project-api-alpha.vercel.app/api/jobs/" + input._id,
          input,
          {
            headers: {
              Authorization: "Bearer " + Cookies.get("token"),
            },
          }
        )
        .then((res) => {
          setJobs((prev) =>
            prev.map((item) => (item._id === input._id ? res.data : item))
          );
          setInput(intitialForm);
          setIsError(false);
          document.getElementById("my_modal_1").showModal();
        })
        .catch((err) => {
          if (err.status === 401) {
            // console.log(err);
            setIsError(true);
            setErrorMessage(err.response.data.msg);
            document.getElementById("my_modal_1").showModal();
          }
        });
    } else {
      axios
        .post("https://final-project-api-alpha.vercel.app/api/jobs", input, {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        })
        .then((res) => {
          setJobs((prev) => [...prev, res.data]);
          setInput(intitialForm);
          setIsError(false);
          document.getElementById("my_modal_1").showModal();
        })
        .catch((err) => {
          if (err.status === 401) {
            // console.log(err);
            setIsError(true);
            setErrorMessage(err.response.data.msg);
            document.getElementById("my_modal_1").showModal();
          }
        });
    }
  };

  const handleClose = () => {
    isError ? logout() : navigate("/dashboard/list-job-vacancy");
  };

  const currentJob = jobs.find((item) => item._id === idJobs);
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {isError ? "Warning !" : "Congratulations!"}
          </h3>
          {isError ? (
            <p className="pt-2 text-sm">{errorMessage && errorMessage}</p>
          ) : (
            <p className="pt-2 text-sm">
              {idJobs
                ? "New Data Successfully Updated"
                : "New Data Successfully Added"}
            </p>
          )}

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
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {idJobs && currentJob
          ? `Edit Job Vacancy ${currentJob.title} - ${currentJob.company_name}`
          : "Make a Job Offer"}
      </h2>

      <form action={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormInput
            id="title"
            label="Title"
            placeholder="Frontend Developer"
            action={handleChange}
            value={input.title}
          />
          <FormInput
            id="job_type"
            label="Job Type"
            placeholder="onSite/work from home/hybrid"
            action={handleChange}
            value={input.job_type}
          />

          <FormTextarea
            id="job_description"
            label="Job Description"
            placeholder="Melakukan implementasi tampilan web dll"
            action={handleChange}
            value={input.job_description}
          />

          <FormTextarea
            id="job_qualification"
            label="Job Qualification"
            placeholder="Harus bisa React dll"
            action={handleChange}
            value={input.job_qualification}
          />

          <FormInput
            id="job_tenure"
            label="Job Tenure"
            placeholder="Kontrak, magang dll"
            action={handleChange}
            value={input.job_tenure}
          />

          <FormInput
            id="company_name"
            label="Company Name"
            placeholder="Google"
            action={handleChange}
            value={input.company_name}
          />

          <FormInput
            id="company_image_url"
            label="Company Image URL"
            placeholder="https://www.example.com/image.jpg"
            action={handleChange}
            value={input.company_image_url}
          />

          <FormInput
            id="company_city"
            label="Company City"
            placeholder="Jakarta"
            action={handleChange}
            value={input.company_city}
          />

          <FormInput
            id="salary_min"
            label="Salary Min"
            placeholder="9000000"
            type="number"
            action={handleChange}
            value={input.salary_min}
          />

          <FormInput
            id="salary_max"
            label="Salary Max"
            placeholder="10000000"
            type="number"
            action={handleChange}
            value={input.salary_max}
          />
        </div>

        <FormSelect
          id="job_status"
          label="Job Status"
          options={jobStatusOptions}
          action={handleChange}
          value={input.job_status}
          type="number"
        />

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="btn btn-primary px-6 py-2 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormJobVacancy;
