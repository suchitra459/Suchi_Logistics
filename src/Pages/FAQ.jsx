import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Suchi Courier provide?",
      answer:
        "We offer domestic and international delivery, express shipping, packaging, and doorstep pickup services.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment using the Tracking page by entering your AWB or tracking ID.",
    },
    {
      question: "What is the delivery time?",
      answer:
        "Local deliveries take 1–3 days, domestic shipments 3–7 days, and international deliveries depend on destination.",
    },
    {
      question: "How do I schedule a pickup?",
      answer:
        "You can schedule a pickup through our website or contact our customer support team.",
    },
    {
      question: "How are shipping charges calculated?",
      answer:
        "Shipping rates depend on weight, dimensions, destination, and service type selected.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-green-50 mt-10">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                {/* Arrow */}
                <span
                  className={`text-2xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45 text-blue-600" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
