import React, { useState } from "react";

const ShippingCalculator = () => {
  const [boxes, setBoxes] = useState([
    { weight: "", unit: "g", l: "", b: "", h: "", count: "" },
  ]);

  const addBox = () => {
    setBoxes([
      ...boxes,
      { weight: "", unit: "g", l: "", b: "", h: "", count: "" },
    ]);
  };

  const handleBoxChange = (index, field, value) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[index][field] = value;
    setBoxes(updatedBoxes);
  };

  return (
    <>
      {/* ================= CALCULATOR SECTION ================= */}
      <section className="w-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-16">
            <span className="inline-block w-10 h-[2px] bg-green-500 mr-3 align-middle"></span>
            Calculate Your Shipping Price
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT FORM */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Shipping Method</label>
                  <select className="w-full mt-2 border rounded-md px-3 py-2">
                    <option>Surface</option>
                    <option>Air</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select className="w-full mt-2 border rounded-md px-3 py-2">
                    <option>Forward</option>
                    <option>Reverse</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Origin Pincode</label>
                  <input
                    type="text"
                    placeholder="Ex. 813210"
                    className="w-full mt-2 border rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Destination Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. 845401"
                    className="w-full mt-2 border rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">COD Amount</label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full mt-2 border rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Payment Mode</label>
                  <select className="w-full mt-2 border rounded-md px-3 py-2">
                    <option>COD</option>
                    <option>Prepaid</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Shipment Type</label>
                  <select className="w-full mt-2 border rounded-md px-3 py-2">
                    <option>B2C</option>
                    <option>B2B</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Invoice Amount</label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full mt-2 border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              {/* BOX DETAILS */}
              <div className="mt-8 space-y-4">
                {boxes.map((box, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-lg p-4 grid grid-cols-2 md:grid-cols-6 gap-4"
                  >
                    <input
                      placeholder="Weight"
                      className="px-3 py-2 rounded"
                      value={box.weight}
                      onChange={(e) =>
                        handleBoxChange(index, "weight", e.target.value)
                      }
                    />

                    <select
                      className="px-3 py-2 rounded"
                      value={box.unit}
                      onChange={(e) =>
                        handleBoxChange(index, "unit", e.target.value)
                      }
                    >
                      <option>g</option>
                      <option>kg</option>
                    </select>

                    <input
                      placeholder="L (cm)"
                      className="px-3 py-2 rounded"
                      value={box.l}
                      onChange={(e) =>
                        handleBoxChange(index, "l", e.target.value)
                      }
                    />

                    <input
                      placeholder="B (cm)"
                      className="px-3 py-2 rounded"
                      value={box.b}
                      onChange={(e) =>
                        handleBoxChange(index, "b", e.target.value)
                      }
                    />

                    <input
                      placeholder="H (cm)"
                      className="px-3 py-2 rounded"
                      value={box.h}
                      onChange={(e) =>
                        handleBoxChange(index, "h", e.target.value)
                      }
                    />

                    <input
                      placeholder="Count"
                      className="px-3 py-2 rounded"
                      value={box.count}
                      onChange={(e) =>
                        handleBoxChange(index, "count", e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={addBox}
                  className="border border-green-500 text-green-600 px-6 py-2 rounded-full hover:bg-green-50"
                >
                  Add More Boxes
                </button>

                <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                  Submit and Compare
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/images/shipping-illustration.png"
                alt="Shipping Illustration"
                className="max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="w-screen bg-[#6b80c9] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Suchi Courier
          </h2>

          <p className="text-white/90 mb-10">
            Subscribe to our newsletter and get the latest updates on logistics
            and shipping.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-80 px-5 py-3 rounded-md text-gray-700 outline-none"
            />

            <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-md text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingCalculator;
