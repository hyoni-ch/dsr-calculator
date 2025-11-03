import React from "react";

const DsrSelect = ({ dsr, setDsr }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">DSR (%)</label>
      <select
        value={dsr}
        onChange={(e) => setDsr(parseInt(e.target.value))}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option value={40}>40%</option>
        <option value={50}>50%</option>
        <option value={70}>70%</option>
      </select>
    </div>
  );
};

export default DsrSelect;
