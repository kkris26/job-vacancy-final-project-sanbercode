import React from "react";

const FormInput = ({
  id,
  label,
  placeholder,
  type = "text",
  action,
  value,
}) => {
  return (
    <div className="">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="input input-bordered w-full mt-2"
        placeholder={placeholder}
        onChange={action}
        required
        value={value}
      />
    </div>
  );
};

export default FormInput;
