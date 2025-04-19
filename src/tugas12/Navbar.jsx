import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="flex self-start text-xl font-semibold whitespace-nowrap text-gray-900">
          Kelas React
        </span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                         md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium 
                         md:border-0 md:bg-white"
          >
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Tugas6
              </Link>
            </li>
            <li>
              <Link
                to="/tugas7"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Tugas7
              </Link>
            </li>
            <li>
              <Link
                to="/tugas8"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Tugas8
              </Link>
            </li>
            <li>
              <Link
                to="/tugas9"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Tugas9
              </Link>
            </li>
            <li>
              <Link
                to="/tugas10"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Tugas10
              </Link>
            </li>
            <li>
              <Link
                to="/tugas11"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Tugas11
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
