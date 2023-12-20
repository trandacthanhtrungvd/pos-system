// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import RoomStatus from "@components/Status/RoomStatus.jsx";
import { twMerge } from "tailwind-merge";

const RoomCard = ({
  roomImage = "https://picsum.photos/250/200",
  status = true,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "flex min-h-fit w-full min-w-fit items-center justify-between rounded-2xl bg-base-dark-bg-2 p-6 font-barlow text-white",
        className,
      )}
    >
      <img className="mr-4 rounded-lg" src={roomImage} alt="room-image" />
      <div className="flex h-full flex-grow flex-col self-start">
        <p className="mb-2 text-body-large-semiboldko">Study Room 1</p>
        <p className="text-body-small-regular">
          Some description of the room <br />
          Facilities <br />
          Tables, Chairs <br />
          Projectors <br />
          TVs...
        </p>
      </div>
      <RoomStatus status={status} />
      <div className="ml-6">50.000 VND/hr</div>
    </div>
  );
};

RoomCard.propTypes = {
  roomImage: PropTypes.string,
  status: PropTypes.bool,
  className: PropTypes.string,
};

export default RoomCard;
