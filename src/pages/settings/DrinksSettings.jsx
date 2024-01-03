import React, { useContext } from "react";
import { DrinksMenuContext } from "@/App";
import EditDrinkCard from "@components/Card/EditDrinkCard";
import AddDrinkCard from '@components/Card/AddDrinkCard';


const DrinksSettings = () => {
  const DrinksMenuData = useContext(DrinksMenuContext);
  const { drinksMenu } = DrinksMenuData;
  return (
    <div className="w-full h-full p-6 grid grid-cols-5 gap-4 overflow-scroll no-scrollbar">
      <AddDrinkCard />
      {drinksMenu.map(drink => <EditDrinkCard key={drink.id} id={drink.id} name={drink.name} price={drink.price} image_url={drink.image_url}/>)}
    </div>
  );
};

export default DrinksSettings;
