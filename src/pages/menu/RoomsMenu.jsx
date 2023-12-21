import React, { useState, useEffect } from "react";
import RoomCard from "@components/Card/RoomCard";

const RoomsMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fake-coffee-api.vercel.app/api")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="w-full overflow-y-auto no-scrollbar">
      {data.map((item) => (
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
