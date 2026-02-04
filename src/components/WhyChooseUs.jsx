import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-screen bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-green-500">Us</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-3xl">
              🤝
            </div>
            <h3 className="font-semibold text-lg mb-3">
              Trusted Reliability
            </h3>
            <p className="text-gray-600 text-sm">
              Count on us for consistent, dependable logistics solutions built
              on years of proven performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-3xl">
              📦
            </div>
            <h3 className="font-semibold text-lg mb-3">
              Secure Handling
            </h3>
            <p className="text-gray-600 text-sm">
              Every shipment is managed with utmost care and advanced safety
              protocols to ensure complete protection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-3xl">
              🚚
            </div>
            <h3 className="font-semibold text-lg mb-3">
              On-Time Every Time
            </h3>
            <p className="text-gray-600 text-sm">
              We value your time — our optimized network ensures fast,
              accurate, and punctual deliveries, always.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-3xl">
              🎧
            </div>
            <h3 className="font-semibold text-lg mb-3">
              Round-the-Clock Assistance
            </h3>
            <p className="text-gray-600 text-sm">
              Our dedicated support team is available 24/7 to resolve queries
              and provide real-time shipment updates.
            </p>
          </div>

        </div>

        {/* Bottom Stats */}
        <h3 className="text-center text-3xl font-bold text-green-500 mb-12">
          First Track Superiority
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          <div className="bg-gray-100 rounded-xl py-8 text-center shadow-sm">
            <h4 className="text-3xl font-bold text-black">10K+</h4>
            <p className="text-gray-700 mt-2">Trusted Clients</p>
          </div>

          <div className="bg-gray-100 rounded-xl py-8 text-center shadow-sm">
            <h4 className="text-3xl font-bold text-black">20K+</h4>
            <p className="text-gray-700 mt-2">Orders Delivered</p>
          </div>

          <div className="bg-gray-100 rounded-xl py-8 text-center shadow-sm">
            <h4 className="text-3xl font-bold text-black">25+</h4>
            <p className="text-gray-700 mt-2">Sellers</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
