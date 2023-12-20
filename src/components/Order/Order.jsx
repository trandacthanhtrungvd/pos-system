// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import CustomButton from "@components/Button/CustomButton.jsx";
import OrderedItem from "@components/Content/OrderedItem.jsx";
import { OrderContext } from "@/App.jsx";

const Order = () => {
  const OrderData = useContext(OrderContext);
  const { orderedItems, setOrderedItems } = OrderData;

  const handleDelete = (e) => {
    setOrderedItems((prev) => prev.filter((item) => item.id != e.target.id));
  };

  const handleQtyChange = (e) => {
    setOrderedItems((prev) => {
      return prev.map((item) => {
        if (item.id === e.target.id) {
          item.qty = e.target.value;
        }
        return item;
      });
    });
  };

  return (
    <div className="flex h-full w-[409px] flex-shrink-0 flex-col bg-base-dark-bg-2 p-6 font-barlow text-white">
      <div className="mb-4 text-heading-h2">Order #34562</div>
      <div className="mb-4 flex justify-between">
        <div className="basis-1/2">Item</div>
        <div className="flex basis-2/5 justify-between">
          <div className="ml-2">Qty</div>
          <div>Price</div>
        </div>
      </div>
      <hr />
      <div className="mb-4 overflow-auto no-scrollbar">
        {orderedItems.map((item, index) => (
          <OrderedItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <hr />
      <div className="mb-2 mt-2">Subtotal</div>
      <div className="mb-2">Discount</div>
      <div className="mb-2 flex justify-between">
        <div>Total</div>
        <div>
          {orderedItems.reduce((prev, curr) => {
            return prev + curr.price * curr.qty;
          }, 0)}
        </div>
      </div>
      <CustomButton
        text="Continue to Payment"
        type="fill"
        className={"w-full"}
      />
    </div>
  );
};

export default Order;
