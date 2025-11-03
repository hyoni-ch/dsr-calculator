import React from "react";

const IncomeInput = ({ income, setIncome }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">연소득 (만원)</label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
};

export default IncomeInput;
