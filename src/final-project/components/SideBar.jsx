import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";
import Logo from "../logo/Logo";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const { user, logout, isLoggedIn } = useGlobal();
  const [showToast, setShowToast] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const location = useLocation();

  let dashboardTitle = "Dashbodard";
  if (location.pathname.includes("profile")) {
    dashboardTitle = "Profile";
  } else if (location.pathname.includes("list-job-vacancy")) {
    dashboardTitle = "Job Vacancies";
  } else if (location.pathname.includes("change-password")) {
    dashboardTitle = "Change Password";
  }

  useEffect(() => {
    if (isLoggedIn) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }, []);

  // console.log(isLoggedIn);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {showToast && (
        <div className="toast toast-bottom toast-end z-10">
          <div className="alert alert-success text-white">
            <span>Login Successfully</span>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-md p-4 fixed top-0 left-0 w-full z-40 flex justify-between items-center">
        <button
          onClick={toggleMobileSidebar}
          className="text-gray-600 focus:outline-none"
        >
          {isMobileSidebarOpen ? (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M18.27 16.27a1 1 0 01-1.41 1.41l-4.82-4.82-4.82 4.82a1 1 0 01-1.41-1.41l4.82-4.82-4.82-4.82a1 1 0 011.41-1.41l4.82 4.82 4.82-4.82a1 1 0 011.41 1.41l-4.82 4.82 4.82 4.82z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <div className="flex items-center">
          {" "}
          <Logo width="30" height="30" />
          <span className=" text-2xl">
            Job<span className=" font-bold">Xcel</span>
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md fixed top-0 left-0 h-full transition-all duration-300 z-50 ${
          isSidebarCollapsed ? "w-16" : "w-54"
        } md:w-54 ${
          isMobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 flex flex-col justify-between h-screen w-full">
          <div>
            <div className="border-b pb-4 border-gray-200">
              <div className="flex items-center justify-between mb-6  pt-6">
                <Link
                  to="/dashboard"
                  className={`text-2xl font-semibold text-blue-600 ${
                    isSidebarCollapsed ? "block text-center" : ""
                  }`}
                >
                  {isSidebarCollapsed ? (
                    <svg
                      className="h-8 w-8 fill-current text-blue-600 mx-auto"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3zM5 5h10v2H5V5zm2 4h6v2H7V9zm2 4h4v2H9v-2z" />
                    </svg>
                  ) : (
                    <div className="flex items-center">
                      {" "}
                      <Logo width="30" height="30" />
                      <span className=" text-2xl">
                        Job<span className=" font-bold">Xcel</span>
                      </span>
                    </div>
                  )}
                </Link>
                <button
                  onClick={toggleMobileSidebar}
                  className="text-gray-500 focus:outline-none md:hidden"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M18.27 16.27a1 1 0 01-1.41 1.41l-4.82-4.82-4.82 4.82a1 1 0 01-1.41-1.41l4.82-4.82-4.82-4.82a1 1 0 011.41-1.41l4.82 4.82 4.82-4.82a1 1 0 011.41 1.41l-4.82 4.82 4.82 4.82z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <nav>
                <ul>
                  {[
                    { path: "/dashboard", label: "Dashboard" },
                    {
                      path: "/dashboard/list-job-vacancy",
                      label: "List Data Table",
                    },
                    {
                      path: "/dashboard/list-job-vacancy/form",
                      label: "Data Form",
                    },
                    { path: "/dashboard/profile", label: "Profile" },
                    {
                      path: "/dashboard/change-password",
                      label: "Change Password",
                    },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        className={`flex items-center p-3 text-gray-700 text-sm rounded-md hover:bg-gray-100 ${
                          isSidebarCollapsed ? "justify-center" : ""
                        }`}
                      >
                        <span
                          className={`${isSidebarCollapsed ? "hidden" : ""}`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="mt-3 w-full">
              <Link to="/" className=" p-3 text-blue-500 hover:text-blue-800">
                Homepage
              </Link>
            </div>
          </div>
          <div className="mt-8  ">
            <button
              onClick={logout}
              className={`flex justify-between items-center p-3 text-red-600 rounded-md hover:bg-red-50 w-full cursor-pointer ${
                isSidebarCollapsed ? "justify-center" : ""
              }`}
            >
              <span
                className={` text-center ${isSidebarCollapsed ? "hidden" : ""}`}
              >
                Logout
              </span>
              <IoLogOutOutline className="text-lg" />
            </button>
          </div>
        </div>
      </aside>

      <div
        className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "md:ml-16" : "md:ml-54"
        }`}
      >
        <header className="bg-white shadow-md p-4 rounded-md mb-4 flex justify-between items-center md:mt-0 mt-15">
          <h1 className="text-xl font-semibold text-gray-800">
            {" "}
            {dashboardTitle}
          </h1>
          <div
            className={`flex items-center ${
              isSidebarCollapsed ? "justify-center" : ""
            }`}
          >
            {isSidebarCollapsed ? (
              <svg
                className="h-8 w-8 rounded-full bg-gray-300 text-gray-600 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 4a4 4 0 00-4 4c0 1.79.91 3.37 2.34 4.29.08.05.16.09.24.12a1 1 0 01.71.29l.71.71a1 1 0 001.42 0l.71-.71a1 1 0 01.71-.29c1.43-.92 2.34-2.5 2.34-4.29a4 4 0 00-4-4zm0 10c-2.76 0-5 2.24-5 5v1h10v-1c0-2.76-2.24-5-5-5z" />
              </svg>
            ) : (
              <Link
                to="/dashboard/profile"
                className=" transition-all duration-300 flex items-center gap-1 hover:bg-gray-100 px-4 py-2 rounded-full"
              >
                <span className="font-semibold capitalize text-gray-800">
                  {user && user.name}
                </span>
                <div className="h-8 w-8 border-2 border-blue-700 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center overflow-hidden">
                  <img
                    src={user && user.image_url}
                    className="h-full object-cover"
                  />
                </div>
              </Link>
            )}
          </div>
        </header>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default SideBar;
