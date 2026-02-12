import React from "react";
import { Truck, Globe, Handshake } from "lucide-react";

const About = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative w-full h-[650px] md:h-[650px] mt-22">
        <img
          src="/images/Aboutus.jpg"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold text-blue-900">Suchi Courier</span>, a
            proud venture of{" "}
            <span className="font-semibold">
              Suchi Courier
            </span>
            , is a dedicated logistics platform committed to delivering speed,
            safety, and operational excellence across the supply chain.
            Officially registered in Bhubaneswar, Odisha in{" "}
            <span className="font-semibold">October 2026</span>, the platform was
            created with a clear vision: to introduce next-generation tracking
            and highly reliable transport solutions to businesses nationwide.
          </p>

          <p className="mt-4">
            At <span className="font-semibold">Suchi Courier</span>, we recognize
            that effective logistics is the backbone of commerce. We believe
            every shipment represents critical time and capital, and our
            dedicated technology and vast carrier network ensure that every
            movement—from warehousing to last-mile delivery—is executed with
            precision and transparency.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-blue-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
            <Truck className="mx-auto mb-4 text-blue-600" size={36} />
            <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To deliver the best logistics solutions with unparalleled customer
              service.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-green-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
            <Globe className="mx-auto mb-4 text-green-600" size={36} />
            <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              Connecting the world through fast, reliable, and efficient
              shipping services.
            </p>
          </div>

          {/* Values */}
          <div className="bg-yellow-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
            <Handshake className="mx-auto mb-4 text-yellow-600" size={36} />
            <h3 className="font-semibold text-lg mb-2">Our Values</h3>
            <p className="text-gray-600 text-sm">
              Integrity, innovation, and customer-first solutions in every
              delivery.
            </p>
          </div>

        </div>
      </section>
      {/* Our Services */}
<section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Our Services
    </h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
      Offering a wide range of logistics solutions tailored to your needs.
    </p>

    {/* Services Grid */}
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* International Shipping */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🌍</div>
        <h3 className="text-lg font-semibold mb-3">
          International Shipping
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Seamless global delivery with real-time tracking and guaranteed
          on-time arrivals across continents.
        </p>
      </div>

      {/* Smart Warehousing */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🏢</div>
        <h3 className="text-lg font-semibold mb-3">
          Smart Warehousing
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Modern, secure, and temperature-controlled storage solutions
          designed for efficiency and safety.
        </p>
      </div>

      {/* Air & Sea Cargo */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🚢</div>
        <h3 className="text-lg font-semibold mb-3">
          Air & Sea Cargo
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Flexible cargo transport options via air and sea, ensuring
          speed, safety, and cost-effectivenes.
        </p>
      </div>

      {/* Supply Chain Management */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">📦</div>
        <h3 className="text-lg font-semibold mb-3">
          Supply Chain Management
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          End-to-end logistics planning and freight coordination that
          optimizes routes and reduces delivery time.
        </p>
      </div>

    </div>
  </div>
</section>
{/* Meet Our Team */}
<section className="bg-blue-50 py-10 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      Meet Our Team
    </h2>

    <div className="flex justify-center">
      <div className="bg-white rounded-xl p-8 w-[260px] shadow-sm hover:shadow-md transition">
        <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center mb-4">
          <span className="text-4xl">👤</span>
        </div>
        <h3 className="font-semibold text-lg">Tejash Parekh</h3>
        <p className="text-gray-600 text-sm mt-1">
          CEO & Founder
        </p>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us */}
<section className="bg-white py-15 px-6">
  <div className="max-w-7xl mx-auto text-center">
    
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Why Choose Us
    </h2>

    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Trusted Reliability */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🤝</div>
        <h3 className="text-lg font-semibold mb-3">
          Trusted Reliability
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Count on us for consistent, dependable logistics solutions built on
          years of proven performance.
        </p>
      </div>

      {/* Secure Handling */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-lg font-semibold mb-3">
          Secure Handling
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Every shipment is managed with utmost care and advanced safety
          protocols to ensure complete protection.
        </p>
      </div>

      {/* On-Time */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">⏱️</div>
        <h3 className="text-lg font-semibold mb-3">
          On-Time Every Time
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We value your time — our optimized network ensures fast, accurate,
          and punctual deliveries, always.
        </p>
      </div>

      {/* Support */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
        <div className="text-4xl mb-4">🎧</div>
        <h3 className="text-lg font-semibold mb-3">
          Round-the-Clock Assistance
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our dedicated support team is available 24/7 to resolve queries and
          provide real-time shipment updates.
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default About;
