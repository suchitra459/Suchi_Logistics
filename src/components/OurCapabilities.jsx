import React from "react";

const OurCapabilities = () => {
  return (
    <section className="w-screen bg-white py-20">
      {/* ===== TOP: CAPABILITIES ===== */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Our Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold mb-3">
              International Shipping
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless global delivery with real-time tracking and guaranteed
              on-time arrivals across continents.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-lg font-semibold mb-3">
              Smart Warehousing
            </h3>
            <p className="text-gray-600 text-sm">
              Modern, secure, and temperature-controlled storage solutions
              designed for efficiency and safety.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">🚢</div>
            <h3 className="text-lg font-semibold mb-3">
              Air & Sea Cargo
            </h3>
            <p className="text-gray-600 text-sm">
              Flexible cargo transport options via air and sea, ensuring speed,
              safety, and cost-effectiveness.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-semibold mb-3">
              Supply Chain Management
            </h3>
            <p className="text-gray-600 text-sm">
              End-to-end logistics planning and freight coordination that
              optimizes routes and reduces delivery time.
            </p>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM: MISSION / VISION / VALUES ===== */}
      <div className="w-full bg-green-50 mt-24 py-15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div>
            <h3 className="text-green-600 font-semibold mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              To redefine logistics through innovation, speed, and service
              excellence — empowering businesses and individuals to move goods
              across the globe with confidence and reliability.
            </p>

            <h3 className="text-green-600 font-semibold mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 mb-6">
              To become the most trusted global logistics partner by integrating
              technology, sustainability, and customer-centric practices in
              every step of our operations.
            </p>

            <h3 className="text-green-600 font-semibold mb-2">
              Our Values
            </h3>
            <p className="text-gray-700">
              We believe in integrity, transparency, and continuous improvement.
              Every shipment is handled with accountability and care, ensuring
              lasting trust with every client we serve.
            </p>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/logistics1.jpg"
              alt="Logistics"
              className="rounded-lg object-cover h-44 w-full"
            />
            <img
              src="/images/logistics2.jpg"
              alt="Warehouse"
              className="rounded-lg object-cover h-44 w-full"
            />
            <img
              src="/images/logistics3.jpg"
              alt="Storage"
              className="rounded-lg object-cover h-44 w-full col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCapabilities;
