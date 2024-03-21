import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-y-auto md:overflow-hidden ">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow flex">{<Outlet />}</div>
    </div>
  );
};

export default Layout;
