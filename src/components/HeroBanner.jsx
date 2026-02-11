import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/images/herobanner1.jpg",
  "/images/herobanner2.jpg",
  "/images/herobanner3.jpg",
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-[500px] md:h-[700px] overflow-hidden mt-2"> 
      
      {/* Background Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
          OPTIMIZE YOUR BUSINESS WITH OUR LOGISTICS EXPERTISE
        </h1>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
            DISCOVER MORE
          </button>
          <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-600 transition">
            LOGIN
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
