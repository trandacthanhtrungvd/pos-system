import React, { useState, useEffect, useContext } from "react";
import RoomCard from "@components/Card/RoomCard";
import { RoomsMenuContext } from "@/App";

const RoomsMenu = () => {
  const RoomsMenuData = useContext(RoomsMenuContext);
  const { roomsMenu } = RoomsMenuData;

  return (
    <div className="w-full overflow-y-auto no-scrollbar">
      {roomsMenu.map((item) => (
        <RoomCard
          key={item.id}
          id={"room-" + item.id}
          name={item.name + " Room"}
          price={item.price}
          description={item.description}
          roomImage={item.image_url}
          status={true}
        />
      ))}
    </div>
  );
};

export default RoomsMenu;
