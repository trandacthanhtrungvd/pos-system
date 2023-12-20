// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const ConfirmButton = ({ text, type, className, handleClick }) => {
  const typeFormat = {
    fill: "bg-primary text-white drop-shadow-[0_8px_24px_rgba(234,124,105,0.3)]",
    line: "text-primary border-[1px] border-primary -outline-offset-1",
  };

  return (
    <button
      className={`h-12 w-40 rounded-lg px-[0.875rem] py-[0.875rem] font-barlow text-button-normal-semibold ${typeFormat[type]} ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

ConfirmButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["fill", "line"]).isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ConfirmButton;
