import React from "react";

export default function RepaymentButtons({ repaymentType, setRepaymentType }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        className={`flex-1 py-2 rounded ${
          repaymentType === "principalAndInterest"
            ? "bg-indigo-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setRepaymentType("principalAndInterest")}
      >
        원리금균등분할상환
      </button>
      <button
        className={`flex-1 py-2 rounded ${
          repaymentType === "principal"
            ? "bg-indigo-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setRepaymentType("principal")}
      >
        원금균등분할상환
      </button>
    </div>
  );
}
