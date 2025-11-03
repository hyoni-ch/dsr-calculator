import React, { useState } from "react";
import NumberInput from "./components/NumberInput";
import CustomSelect from "./components/CustomSelect";
import RepaymentButtons from "./components/RepaymentButtons";
import LoanResult from "./components/LoanResult";

const loanTypes = ["주택담보대출"];
const dsrOptions = ["40%", "50%", "70%"];

export default function DsrCalculator() {
  const [income, setIncome] = useState("");
  const [months, setMonths] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanType, setLoanType] = useState(loanTypes[0]);
  const [dsr, setDsr] = useState(dsrOptions[0]);
  const [repaymentType, setRepaymentType] = useState("principalAndInterest");
  const [loanLimit, setLoanLimit] = useState(null);

  const calculateLoan = () => {
    if (!income || !months || !interestRate || !dsr) {
      alert("모든 칸을 입력해주세요!");
      return;
    }

    const n = parseInt(months);
    const monthlyIncome = (parseFloat(income) * 10000) / 12;
    const dsrPercent = parseInt(dsr);
    const monthlyLimit = (monthlyIncome * dsrPercent) / 100;
    const r = parseFloat(interestRate) / 100 / 12;

    let maxLoan = 0;

    if (repaymentType === "principalAndInterest") {
      maxLoan =
        (monthlyLimit * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    } else {
      // 원금균등분할상환 (정확 계산)
      let low = 0;
      let high = 10_000_000_000; // 충분히 큰 값
      while (high - low > 1) {
        // 1원 단위 정밀
        const mid = (low + high) / 2;
        let maxMonthly = 0;

        for (let i = 1; i <= n; i++) {
          const monthlyPayment = mid / n + (mid - (mid / n) * (i - 1)) * r;
          if (monthlyPayment > maxMonthly) maxMonthly = monthlyPayment;
        }

        if (maxMonthly > monthlyLimit) high = mid;
        else low = mid;
      }

      maxLoan = low;
    }

    setLoanLimit(Math.floor(maxLoan));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-colors duration-300 w-full max-w-md mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
        DSR 계산기
      </h1>

      <CustomSelect
        label="대출 종류"
        options={loanTypes}
        selected={loanType}
        setSelected={setLoanType}
      />
      <NumberInput
        label="연소득"
        value={income}
        setValue={setIncome}
        unit="만원"
      />
      <NumberInput
        label="대출기간"
        value={months}
        setValue={setMonths}
        unit="개월"
      />
      <NumberInput
        label="연금리"
        value={interestRate}
        setValue={setInterestRate}
        unit="%"
      />
      <CustomSelect
        label="DSR %"
        options={dsrOptions}
        selected={dsr}
        setSelected={setDsr}
      />

      <RepaymentButtons
        repaymentType={repaymentType}
        setRepaymentType={setRepaymentType}
      />

      <button
        onClick={calculateLoan}
        className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600 active:scale-95 transition transform"
      >
        최대 대출 한도 계산
      </button>

      <LoanResult loanLimit={loanLimit} />
    </div>
  );
}
