// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const FeedbackStatus = ({ status }) => {
  const statusText = {
    answered: "Answered",
    pending: "Pending",
  };

  const statusFormat = {
    answered: "bg-accents-green text-accents-green",
    pending: "bg-accents-orange text-accents-orange",
  };

  return (
    <div className={`inline-flex h-6 w-24 items-center justify-center gap-2.5 rounded-3xl bg-opacity-25 px-3 py-1 font-barlow text-body-normal-medium ${statusFormat[status]}`}>
      {statusText[status]}
    </div>
  );
};

FeedbackStatus.propTypes = {
  status: PropTypes.oneOf(['answered', 'pending'])
};

export default FeedbackStatus;
