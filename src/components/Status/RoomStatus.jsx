// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const RoomStatus = ({ status }) => {
  const statusText = {
    true: "Available",
    false: "Not Available",
  };

  const statusFormat = {
    true: "bg-accents-green text-accents-green",
    false: "bg-accents-red text-accents-red",
  };

  return (
    <div
      className={`inline-flex h-6 w-28 items-center justify-center gap-2.5 rounded-3xl bg-opacity-25 px-3 py-1 font-barlow text-body-normal-medium ${statusFormat[status]}`}
    >
      {statusText[status]}
    </div>
  );
};

RoomStatus.propTypes = {
  status: PropTypes.bool,
};

export default RoomStatus;
