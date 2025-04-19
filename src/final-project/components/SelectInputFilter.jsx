import React from "react";
import formatRupiah from "../utils/formatRupiah";

const SelectInputFilter = ({ label, value, options, onChange }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2 w-full md:text-sm text-xs">
      <label className="label">
        <span className="text-neutral-700 font-medium ">{label}</span>
      </label>
      <select
        className="select md:text-sm text-xs select-bordered border border-neutral-200 w-full rounded-full focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">
          {label === "Minimum Salary" ? "No" : "All"} {label}
        </option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {label === "Minimum Salary" ? formatRupiah(item) : item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInputFilter;
