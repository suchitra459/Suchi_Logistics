import React from "react";

const TermsOfUse = () => {
  return (
    <section className="w-full bg-gray-50 py-20 mt-10">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 mt-3">
            Please read these terms carefully before using Suchi Courier
            services. By accessing our website or booking a shipment, you agree
            to the conditions below.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">

          {/* Section 1 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              1. Service Agreement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Suchi Courier provides domestic and international delivery,
              pickup, and logistics support. Our services are available to
              individuals, businesses, and registered users through our
              platform.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              2. Customer Responsibilities
            </h2>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
              <li>Provide correct pickup and delivery information</li>
              <li>Ensure packages are properly packed and labeled</li>
              <li>Declare accurate weight, value, and contents</li>
              <li>Follow all applicable shipping regulations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              3. Restricted Items
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              The following items are not allowed for shipment:
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-sm mt-2 space-y-2">
              <li>Hazardous or explosive materials</li>
              <li>Illegal or prohibited goods</li>
              <li>Perishable items without proper packaging</li>
              <li>Valuables such as cash, jewelry, or important documents</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              4. Delivery & Delays
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Estimated delivery times are provided for reference only.
              Unexpected conditions such as weather, traffic, operational
              issues, or regulatory checks may cause delays beyond our control.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              5. Liability Policy
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Suchi Courier takes care to handle shipments safely. However, we
              are not responsible for losses caused by improper packaging,
              incorrect information provided by the customer, or events beyond
              our operational control.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              6. Account Usage
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Users are responsible for maintaining the confidentiality of their
              account details. Any activity performed using your account will be
              considered authorized by you.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              7. Changes to Terms
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may update these terms from time to time to reflect service or
              policy changes. Continued use of our platform indicates your
              acceptance of the updated terms.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Contact Support
            </h2>
            <p className="text-gray-600 text-sm">
              For questions about our Terms & Conditions, please contact:
            </p>
            <p className="text-blue-600 font-medium mt-2">
              support@suchicourier.com
            </p>
          </div>

        </div>

      
      </div>
    </section>
  );
};

export default TermsOfUse;
