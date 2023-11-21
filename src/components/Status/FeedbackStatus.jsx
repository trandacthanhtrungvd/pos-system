// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const FeedbackStatus = ({ status }) => {
  const statusText = {
    answered: "Answered",
    pending: "Pending",
  };

  const defaultFormat =
    "inline-flex h-6 w-24 items-center justify-center gap-2.5 rounded-3xl bg-opacity-25 px-3 py-1 font-['Barlow'] text-sm font-medium leading-tight ";

  const statusFormat = {
    answered: "bg-accents-green text-accents-green",
    pending: "bg-accents-orange text-accents-orange",
  };

  const format = defaultFormat.concat(statusFormat[status]);
  console.log(format);

  return (
    <div className={defaultFormat.concat(statusFormat[status])}>
      {statusText[status]}
    </div>
  );
};

FeedbackStatus.propTypes = {
  status: PropTypes.oneOf(['answered', 'pending'])
};

export default FeedbackStatus;
