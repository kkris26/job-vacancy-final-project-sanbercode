import React from "react";

const FormTextarea = ({ id, label, placeholder, action, value }) => {
  return (
    <div className="">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        className="textarea textarea-bordered w-full mt-2"
        placeholder={placeholder}
        required
        onChange={action}
        value={value}
      ></textarea>
    </div>
  );
};

export default FormTextarea;
