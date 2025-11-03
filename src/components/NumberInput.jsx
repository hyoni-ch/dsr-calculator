import React from "react";

export default function NumberInput({
  label,
  value,
  setValue,
  unit,
  placeholder,
}) {
  return (
    <div className="mb-4">
      {/* 라벨 색상을 진한 회색으로 변경 */}
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 pr-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder || "0"}
            className="block w-full bg-white py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          {/* 단위 표시 고정 너비, 오른쪽 정렬 */}
          <span className="ml-2 w-12 text-right text-gray-500 select-none">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
