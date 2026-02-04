import React, { useState } from "react";

const Pricing = () => {
  const [boxes, setBoxes] = useState([
    { weight: 0, unit: "g", l: 0, b: 0, h: 0, count: 1 },
  ]);

  const addBox = () => {
    setBoxes([
      ...boxes,
      { weight: 0, unit: "g", l: 0, b: 0, h: 0, count: 1 },
    ]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  const updateBox = (index, field, value) => {
    const updated = [...boxes];
    updated[index][field] = value;
    setBoxes(updated);
  };

  return (
    <div className="min-h-screen bg-[#f2fff7] py-22 px-15">
      <div className="max-w-5xl mx-auto bg-[#f2fff7]">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Calculate Your Shipping Price
        </h2>

        {/* Top Inputs */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-sm">Shipping Method</label>
            <select className="input">
              <option>Surface</option>
              <option>Air</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Status</label>
            <select className="input">
              <option>Forward</option>
              <option>Reverse</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Origin Pincode</label>
            <input className="input" placeholder="Ex. 813210" />
          </div>

          <div>
            <label className="text-sm">Destination Pincode</label>
            <input className="input" placeholder="Ex. 845401" />
          </div>

          <div>
            <label className="text-sm">COD Amount</label>
            <input className="input" defaultValue="0" />
          </div>

          <div>
            <label className="text-sm">Payment Mode</label>
            <select className="input">
              <option>COD</option>
              <option>Prepaid</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Shipment Type</label>
            <select className="input">
              <option>B2C</option>
              <option>B2B</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Invoice Amount</label>
            <input className="input" defaultValue="0" />
          </div>
        </div>

        {/* Boxes */}
        {boxes.map((box, index) => (
          <div
            key={index}
            className="relative bg-gray-200 rounded-lg p-4 mb-4"
          >
            {/* Remove Button */}
            {boxes.length > 1 && (
              <button
                onClick={() => removeBox(index)}
                className="absolute top-2 right-2 text-red-500 text-lg"
              >
                ✕
              </button>
            )}

            <div className="grid md:grid-cols-6 gap-3">
              <div>
                <label className="text-xs">Weight</label>
                <input
                  className="input"
                  value={box.weight}
                  onChange={(e) =>
                    updateBox(index, "weight", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-xs">W unit</label>
                <select
                  className="input"
                  value={box.unit}
                  onChange={(e) =>
                    updateBox(index, "unit", e.target.value)
                  }
                >
                  <option>g</option>
                  <option>kg</option>
                </select>
              </div>

              <div>
                <label className="text-xs">L (cm)</label>
                <input
                  className="input"
                  value={box.l}
                  onChange={(e) =>
                    updateBox(index, "l", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-xs">B (cm)</label>
                <input
                  className="input"
                  value={box.b}
                  onChange={(e) =>
                    updateBox(index, "b", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-xs">H (cm)</label>
                <input
                  className="input"
                  value={box.h}
                  onChange={(e) =>
                    updateBox(index, "h", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-xs">Count</label>
                <input
                  className="input"
                  value={box.count}
                  onChange={(e) =>
                    updateBox(index, "count", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={addBox}
            className="px-6 py-2 border border-green-500 text-green-600 rounded-full"
          >
            Add More Boxes
          </button>

          <button className="px-6 py-2 bg-green-600 text-white rounded-full">
            Submit and Compare
          </button>
        </div>
      </div>

      {/* Tailwind Input Helper */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 8px 10px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            background: white;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default Pricing;
