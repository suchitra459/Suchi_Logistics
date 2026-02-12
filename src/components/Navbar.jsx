import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-gradient-to-r from-[#07881e] via-[#1560b0] to-[#100881] shadow-md">
      
      <div className="w-full flex items-center justify-between h-full pl-2 pr-4 sm:pl-4 sm:pr-6 md:pl-6 md:pr-10">
  
        <div className="flex items-center ml-2 sm:ml-3 md:ml-10 mt-2">
          <img
            src="/images/logo3.png"
            alt="Suchi Courier"
            className="w-20 sm:w-24"
          />
        </div>

        <ul className="hidden md:flex items-center gap-4 lg:gap-10 text-gray-200 font-medium text-sm lg:text-base">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/Tracking" className="hover:text-white">Tracking</Link></li>
          <li><Link to="/Blogs" className="hover:text-white">Blogs</Link></li>
          <li><Link to="/Pricing" className="hover:text-white">Pricing</Link></li>
          <li><Link to="/About" className="hover:text-white">About</Link></li>
          <li><Link to="/ContactUs" className="hover:text-white">Contact</Link></li>

          <li className="ml-4">
            <Link
              to="/login"
              className="bg-black/40 text-white px-4 py-2 text-sm rounded-md hover:bg-black transition"
            >
              Register
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0b1d33] w-full px-6 py-6 space-y-4 text-white text-base shadow-lg">
          <Link className="block" to="/" onClick={closeMenu}>Home</Link>
          <Link className="block" to="/Tracking" onClick={closeMenu}>Tracking</Link>
          <Link className="block" to="/Blogs" onClick={closeMenu}>Blogs</Link>
          <Link className="block" to="/Pricing" onClick={closeMenu}>Pricing</Link>
          <Link className="block" to="/About" onClick={closeMenu}>About</Link>
          <Link className="block" to="/ContactUs" onClick={closeMenu}>Contact</Link>

          <Link
            to="/login"
            onClick={closeMenu}
            className="block w-full bg-blue-600 py-2 rounded-md text-center mt-3"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
