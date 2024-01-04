// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import CustomButton from "@components/Button/CustomButton.jsx";
import OrderedItem from "@components/Content/OrderedItem.jsx";
import { OrderContext } from "@/App.jsx";

const Order = () => {
  const OrderData = useContext(OrderContext);
  const { orderedDrinks } = OrderData;

  return (
    <div className="flex h-full w-[409px] flex-shrink-0 flex-col bg-base-dark-bg-2 p-6 font-barlow text-white">
      <div className="mb-4 text-heading-h2">Order #34562</div>
      <div className="mb-4 flex justify-between">
        <div className="basis-1/2">Tên</div>
        <div className="flex basis-2/5 justify-between">
          <div className="ml-2">Số lượng</div>
          <div>Giá</div>
        </div>
      </div>
      <hr />
      <div className="mb-4 overflow-auto no-scrollbar">
        {orderedDrinks.map((item, index) => (
          <OrderedItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
            notes={item.notes}
          />
        ))}
      </div>
      <hr />
      <div className="my-2 flex justify-between">
        <div>Tổng</div>
        <div>
          {parseFloat(orderedDrinks.reduce((prev, curr) => {
            return prev + curr.price * curr.qty;
          }, 0)).toFixed(2)}
        </div>
      </div>
      <CustomButton
        text="Thanh toán"
        type="fill"
        className={"w-full"}
      />
    </div>
  );
};

export default Order;
