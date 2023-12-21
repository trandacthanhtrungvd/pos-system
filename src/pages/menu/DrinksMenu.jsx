import React, { useEffect, useState } from "react";
import DrinkCard from "@components/Card/DrinkCard";

const DrinksMenu = () => {
  // Fetch API from server
  const [data, setData] = useState([]);

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
