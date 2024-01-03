// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import RoomStatus from "@components/Status/RoomStatus.jsx";
import { OrderContext } from "@/App";

const RoomCard = ({
  id,
  name,
  description,
  price,
  roomImage,
  status = true,
  className,
}) => {
  const OrderData = useContext(OrderContext);
  const { setOrderedItems } = OrderData;
  const handleAddClick = () => {
    setOrderedItems((prev) => {
      let curr = [];
      let found = false;
      prev.forEach((item) => {
        if (item.id == id) {
          ++item.qty;
          found = true;
        }
        curr.push(item);
      });
      if (!found) {
        curr.push({ id, name, price, qty: 1, notes: "" });
      }
      return curr;
    });
  };
  return (
    <div
      className={twMerge(
        "mb-4 flex min-h-fit w-full min-w-fit items-center justify-between rounded-2xl bg-base-dark-bg-2 p-6 font-barlow text-white",
        className,
      )}
    >
      <img
        className="mr-4 h-28 w-40 rounded-lg"
        src={roomImage}
        alt="room-image"
      />
      <div className="flex h-full flex-col self-start">
        <p className="mb-2 text-xl font-semibold">{name}</p>
        <p className="max-w-md text-body-large-regular">{description}</p>
      </div>
      <RoomStatus status={status} />
      <div className="ml-6 text-body-large-regular">{price} VND/hr</div>
      <button
        onClick={handleAddClick}
        className="ml-4 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white"
      >
        Thêm
      </button>
    </div>
  );
};

RoomCard.propTypes = {
  roomImage: PropTypes.string,
  status: PropTypes.bool,
  className: PropTypes.string,
};

export default RoomCard;
