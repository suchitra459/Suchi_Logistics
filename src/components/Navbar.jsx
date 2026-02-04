import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#44bf4f] to-[#2f843a]">
      <div className="flex items-center justify-between px-6 md:px-20 py-2">

        <div className="flex items-center gap-3 text-white font-semibold">
           <img
              src="/images/logo.png"
              alt="Suchi Courier"
              className="w-24 mb-4"
            />
          
        </div>

        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
         <Link to="/">Home</Link>
        <Link to="/Tracking">Tracking</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/About">About</Link>
        <Link to="/ContactUs">Contact Us</Link>
        </ul>
        

        <button className="hidden md:block bg-black/40 text-white px-5 py-2 rounded-md hover:bg-black">
          SignIn
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0b1d33] px-6 py-4 space-y-4 text-white">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Sectors</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">About </div>
          <div className="cursor-pointer">Contact Us</div>

          <button className="w-full bg-blue-600 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

