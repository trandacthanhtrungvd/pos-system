import React, { useContext, useEffect, useState } from "react";
import DrinkCard from "@components/Card/DrinkCard";
import { OrderContext } from "@/App.jsx";

const DrinksMenu = () => {
  // Fetch API from server
  const [data, setData] = useState([]);

  const OrderData = useContext(OrderContext);
  const { orderedItems, setOrderedItems } = OrderData;

  const handleAddDrink = (e) => {
    console.log(e.target);
  }

  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="grid w-full grid-cols-3 overflow-y-auto no-scrollbar">
      {/* Drink Cards */}
      {data.map((item) => (
        <DrinkCard
          key={item.id}
          id={item.id}
          image={item.image_url}
          name={item.name}
          price={item.price}
          handleAddDrink={handleAddDrink}
        />
      ))}
    </div>
  );
};

export default DrinksMenu;
