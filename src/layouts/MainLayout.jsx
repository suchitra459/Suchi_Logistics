import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import LetsConnect from "../components/LetsConnect";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    <LetsConnect />

      <Footer />
    </>
  );
};

export default MainLayout;
