// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@components/Form/TextField";
import { Trash } from "@icons";

const OrderedItem = ({ id, name, price, handleDelete }) => {
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");
  return (
    <div className="mt-4 flex w-full flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        {/* Name & Price */}
        <div className="flex basis-1/2 flex-col overflow-hidden whitespace-nowrap">
          <div className="text-body-normal-medium text-white">{name}</div>
          <div className="text-body-small-medium text-text-gray">{price}</div>
        </div>
        {/* Qty & Total Price */}
        <div className="flex basis-2/5 items-center justify-between">
          <div className="h-12 w-12">
            <TextField
              name={"qty"}
              value={qty}
              handleChange={(e) => {
                setQty(e.target.value);
              }}
            />
          </div>
          <div className="py-3">{qty * price}</div>
        </div>
      </div>
      <div className="flex flex-grow justify-between">
        <TextField
          name={"order-notes"}
          value={notes}
          placeholder={"Order Notes"}
          handleChange={(e) => {
            setNotes(e.target.value);
          }}
        />
        <button id={id} className="ml-4 rounded-lg border border-primary p-3 text-primary" onClick={handleDelete}>
          <Trash />
        </button>
      </div>
    </div>
  );
};

OrderedItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default OrderedItem;
