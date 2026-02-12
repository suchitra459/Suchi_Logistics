import React from "react";

const logos = [
  "/images/bluedart.jpg", // Blue arrow logo
  "/images/pay.png",
  "/images/Zoho.png",
  "/images/Delivery.jpg",
  "/images/Gati.png",

];

const TrustedPartners = () => {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
                 bg-gray-200 py-16 overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Trusted Partners
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-scroll">
          
          {/* First set */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[180px] bg-white rounded-xl shadow-md flex items-center justify-center p-6"
            >
              <img
                src={logo}
                alt="partner"
                className="max-h-14 object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="min-w-[180px] bg-white rounded-xl shadow-md flex items-center justify-center p-6"
            >
              <img
                src={logo}
                alt="partner"
                className="max-h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TrustedPartners;
