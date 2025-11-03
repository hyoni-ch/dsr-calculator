import React from "react";

const LoanPeriodInput = ({ months, setMonths }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">대출기간 (개월)</label>
      <input
        type="number"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
};

export default LoanPeriodInput;
