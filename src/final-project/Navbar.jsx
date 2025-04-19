import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "./context/GlobalContext";
import Logo from "./logo/Logo";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const { isLoggedIn } = useGlobal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0); // Kalau discroll dari posisi 0
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleRotate = () => {
    console.log("click");
    setRotated(!rotated);
  };
  // console.log(isLoggedIn)
  return (
    <div
      className={`navbar px-3 flex justify-center  z-10 fixed border-none transition duration-300 ease-in-out  ${
        isScrolled
          ? "text-black-600 bg-white shadow-md"
          : "text-white bg-transparent"
      } `}
    >
      <div className="flex md:w-7xl w-full justify-between">
        <div className="navbar-start flex-row-reverse flex justify-between w-full md:w-xs">
          <div className="dropdown" onClick={toggleRotate}>
            <div tabIndex={0} role="button" className=" lg:hidden">
              <IoIosMenu
                className={`text-4xl rotated ease-in-out ${
                  isScrolled
                    ? "text-blue-600 bg-white"
                    : "text-white bg-transparent"
                } ${rotated ? "rotate-[-90deg]" : ""}`}
              />
            </div>

            <ul
              tabIndex={0}
              className={` ${
                rotated ? "flex" : "hidden"
              } absolute top-8 menu ml-[-180px] menu-sm  bg-base-100 rounded-box z-1 mt-3 w-52 p-3 shadow px-4`}
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 px-0 text-sm text-gray-900 rounded-sm focus:p-2  hover:text-blue-600 hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>
              <li className="text-blue-700">
                <Link
                  to="job-vacancy"
                  className="block py-2 px-0  text-sm bg-transparent text-gray-900 focus:p-2  rounded-sm hover:text-blue-600 hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Job Vacancy
                </Link>
              </li>
              <li className=" pt-2 pb-1 border-neutral-300 border-t font-bold text-blue-600 hover:text-blue-800  ">
                {isLoggedIn ? (
                  <Link
                    to="/dashboard"
                    className={` px-0 text-md   text-sm focus:px-2  rounded-sm transition-all duration-300 hover:bg-transparent `}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className={` px-0 text-md  text-sm focus:px-2  rounded-sm transition-all duration-300 hover:bg-transparent `}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <Link to="/">
            <div
              className={`flex items-center ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              <Logo width="30" height="30" />
              <span className=" text-2xl">
                Job<span className=" font-bold">Xcel</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="job-vacancy">Job Vacancy</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex w-full md:w-xs">
          {isLoggedIn ? (
            <Link
              to="/dashboard"
              className={`btn btn-sm text-neutral-600 text-md rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-800 hover:border-blue-800 "
                  : "hover:bg-transparent hover:text-white"
              } `}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className={`btn btn-sm text-neutral-600 text-md rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-800 hover:border-blue-800 "
                  : "hover:bg-transparent hover:text-white"
              } `}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
