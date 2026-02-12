import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-gray-50 py-20 mt-10">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mt-3">
            Your privacy is important to us. This page explains how Suchi Courier
            collects, uses, and protects your information.
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">

          {/* Section 1 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              1. Personal Information
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              When you use our services, we may collect basic details such as your
              name, phone number, email address, pickup and delivery location,
              and shipment details. This information helps us provide accurate and
              efficient courier services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
              <li>To process and deliver your shipments</li>
              <li>To provide tracking updates and notifications</li>
              <li>To improve our website and customer experience</li>
              <li>To respond to your queries and support requests</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              3. Data Security
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use secure systems and standard safety practices to protect your
              data from unauthorized access, misuse, or loss. Your information is
              stored safely and only accessible to authorized personnel.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              4. Third-Party Sharing
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We do not sell your personal information. Your data may be shared
              only with trusted logistics partners or service providers when
              necessary to complete delivery or comply with legal requirements.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              5. Cookies & Website Usage
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our website may use cookies to improve performance and provide a
              better browsing experience. These cookies help us understand user
              behavior and enhance website functionality.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              6. Your Rights
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              You can request to update or remove your personal information at
              any time. For any privacy-related request, please contact our
              support team.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              7. Policy Updates
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              This policy may be updated occasionally to reflect changes in our
              services or legal requirements. We recommend reviewing this page
              periodically.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Need Help?
            </h2>
            <p className="text-gray-600 text-sm">
              If you have questions about our Privacy Policy, contact us at:
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

export default PrivacyPolicy;
