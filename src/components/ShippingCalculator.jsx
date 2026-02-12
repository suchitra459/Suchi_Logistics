import React, { useState } from "react";

const ShippingCalculator = () => {
  const [boxes, setBoxes] = useState([
    { weight: 0, unit: "g", l: 0, b: 0, h: 0, count: 1 },
  ]);

  // Add new box
  const addBox = () => {
    setBoxes([
      ...boxes,
      { weight: 0, unit: "g", l: 0, b: 0, h: 0, count: 1 },
    ]);
  };

  // Remove box
  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  // Update box values
  const handleBoxChange = (index, field, value) => {
    const updated = [...boxes];
    updated[index][field] = value;
    setBoxes(updated);
  };

  return (
    <section className="w-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-3xl font-semibold text-center mb-16">
          <span className="inline-block w-10 h-[2px] bg-blue-500 mr-3 align-middle"></span>
          Calculate Your Shipping Price
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT FORM */}
          <div>
            {/* Top Inputs */}
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

            {/* BOX SECTION */}
            <div className="mt-10 space-y-6">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="relative bg-gray-100 p-5 rounded-xl shadow-sm"
                >
                  {/* Remove Button */}
                  {boxes.length > 1 && (
                    <button
                      onClick={() => removeBox(index)}
                      className="absolute top-2 right-3 text-red-500 font-bold"
                    >
                      ✕
                    </button>
                  )}

                  {/* Separate Input Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {/* Weight */}
                    <div className="bg-white p-3 rounded-lg shadow">
                      <label className="text-xs text-gray-500">Weight</label>
                      <input
                        type="number"
                        className="w-full mt-1 outline-none"
                        value={box.weight}
                        onChange={(e) =>
                          handleBoxChange(index, "weight", e.target.value)
                        }
                      />
                    </div>

                    {/* Unit */}
                    <div className="bg-white p-3 rounded-lg shadow">
                      <label className="text-xs text-gray-500">Unit</label>
                      <select
                        className="w-full mt-1 outline-none bg-white"
                        value={box.unit}
                        onChange={(e) =>
                          handleBoxChange(index, "unit", e.target.value)
                        }
                      >
                        <option>g</option>
                        <option>kg</option>
                      </select>
                    </div>

                    {/* Length */}
                    <div className="bg-white p-3 rounded-lg shadow">
                      <label className="text-xs text-gray-500">L (cm)</label>
                      <input
                        type="number"
                        className="w-full mt-1 outline-none"
                        value={box.l}
                        onChange={(e) =>
                          handleBoxChange(index, "l", e.target.value)
                        }
                      />
                    </div>

                    {/* Breadth */}
                    <div className="bg-white p-3 rounded-lg shadow">
                      <label className="text-xs text-gray-500">B (cm)</label>
                      <input
                        type="number"
                        className="w-full mt-1 outline-none"
                        value={box.b}
                        onChange={(e) =>
                          handleBoxChange(index, "b", e.target.value)
                        }
                      />
                    </div>

                    {/* Height */}
                    <div className="bg-white p-3 rounded-lg shadow">
                      <label className="text-xs text-gray-500">H (cm)</label>
                      <input
                        type="number"
                        className="w-full mt-1 outline-none"
                        value={box.h}
                        onChange={(e) =>
                          handleBoxChange(index, "h", e.target.value)
                        }
                      />
                    </div>

                    {/* Count */}
                    <div className="bg-white p-3 rounded-lg shadow">
                      <label className="text-xs text-gray-500">Count</label>
                      <input
                        type="number"
                        className="w-full mt-1 outline-none"
                        value={box.count}
                        onChange={(e) =>
                          handleBoxChange(index, "count", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={addBox}
                className="border border-blue-800 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50"
              >
                Add More Boxes
              </button>

              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
                Submit and Compare
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/calculation.png"
              alt="Shipping Illustration"
              className="max-w-md w-full transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingCalculator;
