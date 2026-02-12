import React from "react";

const RefundCancellation = () => {
  return (
    <section className="w-full bg-gray-50 py-20 mt-10">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-600 mt-3">
            This policy explains when a shipment can be cancelled and the
            conditions under which refunds or adjustments may be provided.
          </p>
        </div>

        <div className="space-y-8">

          {/* Section 1 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              1. Order Cancellation
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Shipment requests can be cancelled before the pickup is completed.
              Once the parcel has been collected or dispatched, cancellation may
              not be possible.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              2. When Refunds Are Approved
            </h2>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
              <li>Pickup request cancelled before courier assignment</li>
              <li>Duplicate payment or billing error</li>
              <li>Service unavailable due to operational limitations</li>
              <li>Shipment not processed from our end</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              3. Non-Refund Situations
            </h2>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
              <li>Shipment already picked up or in transit</li>
              <li>Incorrect address or details provided by the customer</li>
              <li>Delivery delays caused by weather, traffic, or external factors</li>
              <li>Package held by customs or regulatory authorities</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              4. Refund Processing
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Approved refunds are processed within <strong>5–7 working days</strong>.
              The amount will be credited to the original payment method used at
              the time of booking.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              5. Lost or Damaged Parcels
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              In case of loss or damage, customers must report the issue within
              48 hours of delivery. Compensation, if applicable, will be based on:
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-sm mt-2 space-y-2">
              <li>Declared shipment value</li>
              <li>Supporting proof such as invoice or photos</li>
              <li>Investigation outcome by logistics partners</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              6. Policy Updates
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Suchi Courier reserves the right to modify this policy at any time.
              Updated terms will be published on this page and will take effect
              immediately.
            </p>
          </div>

          {/* Contact Box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">
              Need Help?
            </h2>
            <p className="text-gray-600 text-sm">
              For cancellation or refund requests, contact our support team:
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

export default RefundCancellation;
