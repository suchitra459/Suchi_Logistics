import React from "react";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer
        className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
        bg-blue-50 pt-16 pb-12"
      >
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* LOGO SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaTruck className="text-blue-600 text-4xl" />
              <h2 className="text-xl font-bold text-gray-800">
                Suchi Courier
              </h2>
            </div>

            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Suchi Courier delivers fast, reliable, and seamless logistics
              solutions, ensuring timely and secure shipments worldwide.
            </p>

            <Link
              to="/About"
              className="bg-gray-600 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700"
            >
              About Us
            </Link>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>📍Angul, Odisha, India.</li>
              <li>📞 +91-1234567890</li>
              <li>📞 +91-1234567890</li>
              <li>✉️ info@SuchiCourier.site</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Pick & Drop</li>
              <li>Packaging</li>
              <li>International & Domestic Services</li>
            </ul>
          </div>

          {/* QUICK LINKS + SOCIAL */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-800 mb-6">
              <li> <Link to="/FAQ">FAQ</Link></li>
              <li> <Link to="/About">About Us</Link></li>
              <li> <Link to="/Blogs">Blog</Link></li>
              <li> <Link to="/Privacypolicy">Privacy & Policy</Link></li>
              <li> <Link to="/Termofuse">Terms of Use</Link></li>
              <li> <Link to="/Refund">Refund & Cancellation</Link></li>
            </ul>

            <h4 className="font-semibold mb-3">Follow Us:</h4>

            {/* Social Icons (Same as image) */}
            <div className="flex items-center gap-6 text-xl text-black">
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition" />
              <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
            </div>
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div
        className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
        bg-black text-gray-300 text-sm"
      >
        <div className="max-w-7xl mx-auto px-10 py-4 flex flex-col md:flex-row justify-between gap-4">
          <p>
            Copyright©2026{" "}
            <span className="text-white font-medium">
              Suchi Courier
            </span>
            . All rights reserved
          </p>

          <div className="flex gap-3 flex-wrap">
            <span className="cursor-pointer hover:text-white"> <Link to="/">Home</Link></span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white"> <Link to="/ContactUs">Contact Us</Link></span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white"> <Link to="/About">About Us</Link></span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white"> <Link to="/Privacypolicy">Privacy Policy</Link></span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white"> <Link to="/Termofuse">Terms Of Use</Link></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
