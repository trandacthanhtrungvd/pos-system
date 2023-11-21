// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const RoomStatus = ({ status }) => {
  const statusText = {
    a: "Available",
    na: "Not Available",
  };

  const statusFormat = {
    a: "bg-accents-green text-accents-green",
    na: "bg-accents-red text-accents-red",
  };

  return (
    <div className={`inline-flex h-6 w-28 items-center justify-center gap-2.5 rounded-3xl bg-opacity-25 px-3 py-1 font-['Barlow'] text-sm font-medium leading-tight ${statusFormat[status]}`}>
      {statusText[status]}
    </div>
  );
};

RoomStatus.propTypes = {
  status: PropTypes.oneOf(["a", "na"]),
};

export default RoomStatus;
