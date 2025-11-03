import React from "react";

const LoanTypeSelect = () => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">대출 종류</label>
      <select
        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
        disabled
      >
        <option>주택담보대출</option>
      </select>
    </div>
  );
};

export default LoanTypeSelect;
