import React from "react";
import CountUp from "react-countup";

export default function LoanResult({ loanLimit }) {
  if (loanLimit === null) return null;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded text-center text-xl sm:text-2xl font-semibold space-y-2">
      <div>
        최대 대출 한도:{" "}
        <CountUp end={loanLimit} duration={1.5} separator="," suffix="원" />
      </div>
    </div>
  );
}
