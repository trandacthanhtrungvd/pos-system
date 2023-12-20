// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import SearchBox from "@components/Form/SearchBox";
import Order from "@components/Order/Order";
import { OrderContext } from "@/App.jsx";

const MenuPage = ({ name = "Thanh Trung" }) => {
  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dateString = days[date.getDay()] + ", " + date.toUTCString().slice(5, 16);

  const OrderData = useContext(OrderContext);
  const { orderedItems, setOrderedItems } = OrderData;
  console.log(orderedItems);

  return (
    <>
      <div className="flex flex-1 flex-col bg-base-dark-bg-1 px-8 pt-8 font-barlow tracking-wide text-white">
        {/* Stuffs */}
        <div className="mb-6 flex h-[122px] flex-col justify-between">
          {/* Name & Search */}
          <div className="flex h-16 items-center justify-between">
            {/* Name */}
            <div className="flex h-full flex-col justify-between">
              <p className="text-heading-h1">{name}</p>
              <p className="text-body-large-regular">{dateString}</p>
            </div>
            {/* Search Box */}
            <SearchBox />
          </div>
        </div>
        {/* Menu */}
        <Outlet />
      </div>
      <div>
        <Order />
      </div>
    </>
  );
};

MenuPage.propTypes = {
  name: PropTypes.string,
};

export default MenuPage;
