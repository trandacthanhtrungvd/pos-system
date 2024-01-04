// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Trash } from "@icons";
import TextField from "@components/Form/TextField";
import { OrderContext } from "@/App.jsx";

const OrderedRoom = ({ id, name, price, time, amount }) => {
  const OrderData = useContext(OrderContext);
  const { setOrderedRoom } = OrderData;

  const handleDelete = () => {
    setOrderedRoom({
      id: "",
      name: "",
      price: 0,
      time: Date(),
      amount: 0,
    });
  };

  return (
    <div className="mt-4 flex w-full flex-col justify-between">
      <div className="mb-4 flex items-center justify-between">
        {/* Name & Price */}
        <div className="flex basis-1/2 flex-col overflow-hidden whitespace-nowrap">
          <div className="text-body-large-medium text-white">{name}</div>
          <div className="text-body-normal-medium text-text-gray">{price}</div>
        </div>
        {/* Qty & Total Price */}
        <div className="flex basis-2/5 items-center justify-between">
          <div className="h-12 w-12">
            <TextField
              name={"qty"}
              value={qty}
              handleChange={handleQtyChange}
            />
          </div>
          <div className="py-3">{parseFloat(qty * price).toFixed(2)}</div>
        </div>
      </div>
      <div className="flex flex-grow justify-between">
        <div>{time}</div>
        <button
          id={id}
          className="ml-4 rounded-lg border border-primary p-3 text-primary"
          onClick={handleDelete}
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

OrderedRoom.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default OrderedRoom;
