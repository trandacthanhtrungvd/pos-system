import React, { useContext, useEffect, useState } from "react";
import DrinkCard from "@components/Card/DrinkCard";
import { DrinksMenuContext } from "@/App";

const DrinksMenu = () => {
  const DrinksMenuData = useContext(DrinksMenuContext);
  const { drinksMenu } = DrinksMenuData;

  return (
    <div className="grid w-full grid-cols-3 overflow-y-auto no-scrollbar">
      {/* Drink Cards */}
      {drinksMenu.map((item) => (
        <DrinkCard
          key={item.id}
          id={"drink-" + item.id}
          image={item.image_url}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default DrinksMenu;
