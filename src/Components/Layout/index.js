import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="w-full bg-slate-400 h-14 text-white flex items-center justify-center text-lg font-bold">Hello anh em</div>
      <Link to="/home">Home</Link>
      <p></p>
      <Link to="/about">About</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
