import { FaBriefcase, FaUsers, FaPlus, FaTimesCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

export default function DashboardHome() {
  const { jobs, loading, user } = useGlobal();

  const activeJobs = jobs.filter((job) => job.job_status === 1);
  const inactiveJobs = jobs.filter((job) => job.job_status !== 1);

  return (
    <div className="md:max-w-7xl w-full p-0 mx-auto md:p-6 space-y-6">
      <h1 className="text-2xl font-semibold capitalize text-gray-800">
        Welcome, {user.name} 👋
      </h1>

      {/* Summary Box */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center gap-4 shadow">
          <FaBriefcase className="text-blue-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-600">Vacancies</p>
            <p className="text-xl font-bold">{jobs.length}</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center gap-4 shadow">
          <FaUsers className="text-green-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-600">Active</p>
            <p className="text-xl font-bold">{activeJobs.length}</p>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg flex items-center gap-4 shadow">
          <FaTimesCircle className="text-red-600 text-2xl" />
          <div>
            <p className="text-sm text-gray-600">Non-Active</p>
            <p className="text-xl font-bold">{inactiveJobs.length}</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-4 shadow">
          <FaPlus className="text-yellow-600 text-2xl" />
          <div>
            <Link
              to="/dashboard/list-job-vacancy/create"
              className="text-blue-600 font-bold underline text-sm"
            >
              Add New
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white md:p-6 p-2 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Latest Vacancies</h2>
        <div className="overflow-auto w-xs md:w-full">
          <table className="table table-zebra">
            <thead className="text-blue-800">
              <tr>
                <th>#</th>
                <th>Job</th>
                <th>Comany</th>
                <th>City</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                jobs
                  .slice()
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 5)
                  .map((job, index) => (
                    <tr key={job._id}>
                      <td>{index + 1}</td>
                      <td>{job.title}</td>
                      <td>{job.company_name}</td>
                      <td>{job.company_city}</td>
                      <td>
                        <span
                          className={`px-2 py-1 text-xs rounded-full font-semibold ${
                            job.job_status === 1
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {job.job_status === 1 ? "Active" : "Non-Active"}
                        </span>
                      </td>
                    </tr>
                  ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    Belum ada data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
