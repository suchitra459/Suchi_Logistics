import React, { useState } from "react";
import { FaBoxOpen, FaSearch, FaTruck } from "react-icons/fa";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (!trackingId) {
      alert("Please enter Tracking ID / AWB");
      return;
    }
    console.log("Tracking ID:", trackingId);
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      
      {/* Icon + Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FaTruck className="text-3xl text-blue-600" />
        <h1 className="text-3xl font-semibold text-gray-800">
          Track your Parcel
        </h1>
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        
        {/* Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500">
          
          <span className="px-3 text-gray-400">
            <FaBoxOpen />
          </span>

          <input
            type="text"
            placeholder="Enter Tracking ID / AWB"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-1 px-2 py-3 outline-none text-gray-700"
          />

          <button
            onClick={handleTrack}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaSearch />
            Track
          </button>
        </div>

        {/* Helper text */}
        <p className="text-sm text-gray-500 mt-3 text-center">
          Enter your AWB or Tracking ID to get real-time updates
        </p>
      </div>
    </div>
  );
};

export default Tracking;
