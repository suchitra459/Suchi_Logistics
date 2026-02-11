import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full bg-blue-50 py-16">
      <div className="w-full px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-14">
          What Our Clients Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md px-8 py-10 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-sky-200 flex items-center justify-center text-2xl">
                👨
              </div>
            </div>

            <p className="text-gray-600 italic mb-6">
              “Suchi Courier Express has been an absolute pleasure to work with.
              Professional, reliable, and timely!”
            </p>

            <p className="font-semibold text-black">- Sheetal</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md px-8 py-10 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-sky-200 flex items-center justify-center text-2xl">
                👩
              </div>
            </div>

            <p className="text-gray-600 italic mb-6">
              “Their global shipping services have helped expand my business.
              Truly world-class.”
            </p>

            <p className="font-semibold text-black">- Suchitra</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md px-8 py-10 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-sky-200 flex items-center justify-center text-2xl">
                👨‍💼
              </div>
            </div>

            <p className="text-gray-600 italic mb-6">
              “Fast delivery and excellent customer support. I trust Suchi Courier
              for all my shipments.”
            </p>

            <p className="font-semibold text-black">- Rahul</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
