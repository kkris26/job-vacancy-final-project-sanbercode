import React from "react";
import Logo from "./logo/Logo";

const Footer = () => {
  return (
    <div className=" px-4 md:px0 mt-15 md:mt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <footer className="footer  md:w-7xl text-white m-auto sm:footer-horizontal py-10">
        <aside >
        <Logo />
          <p>
            JobXcel Industries Ltd.
            <br />
            Providing reliable tech since 2020
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="text-center py-4 text-sm text-white border-t border-white-100">
        &copy; {new Date().getFullYear()} JobXcel Industries Ltd. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
