import React from "react";

const MostOrderedDrink = ({ id, name = "Drink Name", orders = 20, img = "https://picsum.photos/150/150" }) => {
  return (
    <div className="flex">
      <img
        src={img}
        className="rounded-full mr-4"
        width="56"
        height="56"
        alt="drink-img"
      />
      <div>
        <p className="text-lg font-medium">{name}</p>
        <p className="text-text-light">{orders} orders</p>
      </div>
    </div>
  );
};

export default MostOrderedDrink;
