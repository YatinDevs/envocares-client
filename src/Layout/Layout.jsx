import Footer from "@/pages/Home/Footer";
import Navbar from "@/pages/Home/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="relative ">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;
