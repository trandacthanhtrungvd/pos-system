// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Check } from "../../assets/icons";

const PaymentMethod = ({ icon, text, status = false }) => {
  const [chosen, setChosen] = useState(status);
  const statusFormat = {
    true: "text-white border-text-light",
    false: "text-text-light border-base-dark-line",
  };

  const handleClick = () => {
    setChosen(!chosen);
  };

  return (
    <button
      className={`relative leading-tight flex h-16 w-[6.3125rem] flex-col items-center justify-center gap-[0.125rem] rounded-lg border-[1px] -outline-offset-1 bg-base-dark-bg-2 font-barlow text-body-normal-medium ${statusFormat[chosen]}`}
      onClick={handleClick}
    >
      <Check
        className={`absolute right-[0.375rem] top-[0.375rem] text-primary ${
          chosen ? "" : "hidden"
        }`}
      />
      {icon}
      <div>{text}</div>
    </button>
  );
};

PaymentMethod.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  status: PropTypes.bool,
};

export default PaymentMethod;
