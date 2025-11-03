import React from "react";

const InterestRateInput = ({ rate, setRate }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">연 금리 (%)</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        step="0.01"
        placeholder="0"
        className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
      />
    </div>
  );
};

export default InterestRateInput;
