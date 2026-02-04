import React from "react";

const LetsConnect = () => {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
                 bg-[#1f3c88] py-20 text-center"
    >
      <h2 className="text-3xl font-bold text-white mb-4">
        Let&apos;s Connect!
      </h2>

      <p className="text-white text-sm md:text-base mb-8">
        We are always ready to assist you with your logistics needs.
        Contact us today!
      </p>

      <button
        className="bg-white text-[#1f3c88] px-8 py-2 rounded-full
                   font-medium hover:bg-gray-100 transition"
      >
        Get in Touch
      </button>
    </section>
  );
};

export default LetsConnect;
