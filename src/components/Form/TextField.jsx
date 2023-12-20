import React from "react";

const TextField = ({ name, placeholder, value, handleChange }) => {
  return (
    <input
      id={name}
      name={name}
      type="text"
      className="w-full rounded-lg border border-base-dark-line bg-base-form-bg py-3 pl-3 font-barlow text-body-normal-regular text-text-gray"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextField;
