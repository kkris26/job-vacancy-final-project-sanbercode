import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <section className="h-screen w-full flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div
        className=" bg-cover bg-center md:flex-1 md:flex hidden "
        style={{ backgroundImage: "url(https://picsum.photos/800/1200)" }}
      ></div>

      <div className="flex-1 flex justify-center items-center p-4">
        <main>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default LayoutAuth;
