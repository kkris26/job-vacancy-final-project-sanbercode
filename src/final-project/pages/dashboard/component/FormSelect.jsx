import React from "react";

const FormSelect = ({ id, label, options, action, type , value}) => {
  return (
    <div className="">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        onChange={action}
        name={id}
        type={type}
        value={value}
        className="select select-bordered w-full mt-2"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
