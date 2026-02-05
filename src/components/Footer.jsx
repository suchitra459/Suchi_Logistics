import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
                   bg-gray-200 pt-16 pb-12"
      >
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <img
              src="/images/logo.png"
              alt="Suchi Courier"
              className="w-24 mb-4"
            />
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Suchi Courier delivers fast, reliable, and seamless logistics
              solutions, ensuring timely and secure shipments worldwide.
            </p>
            <button className="bg-gray-600 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700">
              About Us
            </button>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li className="flex gap-3">
                📍 BMC Bhawani Mall, Saheed Nagar Bhubaneswar, Odisha-751007.
              </li>
              <li className="flex gap-3">📞 +91-8240742313</li>
              <li className="flex gap-3">📞 +91-9040170727</li>
              <li className="flex gap-3">✉️ Email: info@SuchiCourier.site</li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Pick & Drop</li>
              <li>Packaging</li>
              <li>International & Domestic Services</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-800 mb-6">
              <li>FAQ</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Privacy & Policy</li>
              <li>Terms of Use</li>
              <li>Refund & Cancellation</li>
            </ul>

            <h4 className="font-semibold mb-3">Follow Us:</h4>
            <div className="flex gap-4 text-lg">
              <span className="cursor-pointer">ⓕ</span>
              <span className="cursor-pointer">🐦</span>
              <span className="cursor-pointer">📸</span>
              <span className="cursor-pointer">in</span>
              <span className="cursor-pointer">▶</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== BOTTOM BAR ===== */}
      <div
        className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
                   bg-black text-gray-300 text-sm"
      >
        <div className="max-w-7xl mx-auto px-10 py-4 flex flex-col md:flex-row justify-between gap-4">
          <p>
            Copyright © 2026{" "}
            <span className="text-white font-medium">
              Suchi Courier 
            </span>
            . All rights reserved
          </p>

          <div className="flex gap-3 flex-wrap">
            <span className="cursor-pointer hover:text-white">Home</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white">Contact Us</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white">About Us</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white">Terms Of Use</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
