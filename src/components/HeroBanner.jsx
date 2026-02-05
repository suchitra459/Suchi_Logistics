import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1586528116493-7c2b56e39acc?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1920&q=80",
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
    <section className="relative w-screen h-[420px] md:h-[550px] overflow-hidden">
      
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
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            LOGIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
