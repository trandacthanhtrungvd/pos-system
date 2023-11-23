// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const ChoiceButton = ({ text, status = false }) => {
  const [chosen, setChosen] = useState(status);
  const statusFormat = {
    true: "bg-primary text-white border-primary",
    false: "bg-base-dark-bg-2 text-primary border-base-dark-line border-[1px] -outline-offset-1",
  };

  const handleClick = () => {
    setChosen(!chosen);
  };

  return (
    <button
      className={`inline-flex h-8 min-w-min items-center justify-center gap-2.5 rounded-lg px-3 py-[0.4375rem] font-semibold ${statusFormat[chosen]}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

ChoiceButton.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.bool,
};

export default ChoiceButton;
