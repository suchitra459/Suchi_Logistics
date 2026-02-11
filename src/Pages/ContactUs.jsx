import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full">
      {/* ===== Hero Section ===== */}
      <div
        className="h-[750px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/contact.jpg')",
        }}
      >
        <h1 className="text-white text-4xl font-semibold">Contact Us</h1>
      </div>

      {/* ===== Main Section ===== */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* ===== Contact Form ===== */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Get In Touch!!</h2>

            <form className="space-y-2">
              <div>
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input"
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input"
                />
              </div>

              <div>
                <label className="text-sm">Phone</label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="input"
                />
              </div>

              <div>
                <label className="text-sm">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input"
                />
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="bg-blue-50 p-10 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              Contact Information
            </h2>
            <p className="text-sm mb-6">
              Feel free to reach out to us!
            </p>

            <div className="space-y-4 text-sm">
              <p className="flex gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                BMC Bhawani Mall, Saheed Nagar, Bhubaneswar,
                Odisha-751007.
              </p>

              <p className="flex gap-3">
                <FaPhoneAlt className="text-blue-500 mt-1" />
                +91-1234567890
              </p>

              <p className="flex gap-3">
                <FaWhatsapp className="text-blue-500 mt-1" />
                +91-1234567890
              </p>

              <p className="flex gap-3">
                <FaEnvelope className="text-blue-500 mt-1" />
                info@SuchiCourier.site
              </p>
            </div>

            {/* ===== Social Icons ===== */}
            <div className="mt-6">
              <p className="font-semibold mb-3">Follow Us On:</p>
              <div className="flex gap-6 text-blue-500">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind input helper */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 10px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            outline: none;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;
