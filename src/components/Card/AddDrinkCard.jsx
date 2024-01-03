import { Add, Edit, Trash } from "@icons";
import React, { useState } from "react";

const AddDrinkCard = () => {
  // type: details, edit?
  const [isDefault, setIsDefault] = useState(true);

  const [data, setData] = useState({
    name: "",
    price: 0,
    image_url: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  var defaultCard = (
    <div
      className="flex flex-col gap-4 h-[332px] cursor-pointer items-center justify-center rounded-lg border border-dashed border-primary bg-base-dark-bg-2 text-primary"
      onClick={() => setIsDefault((prev) => !prev)}
    >
      <Add />
      Add new drink
    </div>
  );

  var editCard = (
    <div className="flex h-[332px] flex-col rounded-lg border border-base-dark-line bg-base-dark-bg-2">
      <form className="flex flex-grow flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            className="border border-base-dark-line bg-base-dark-bg-2 pl-2"
            type="text"
            name="name"
            id="name"
            value={data.name}
            onInput={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price">Price</label>
          <input
            className="border border-base-dark-line bg-base-dark-bg-2 pl-2"
            type="number"
            name="price"
            id="price"
            value={data.price}
            onInput={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="image_url">Image</label>
          <input
            className="border border-base-dark-line bg-base-dark-bg-2 pl-2"
            type="text"
            name="image_url"
            id="image_url"
            value={data.image_url}
            onInput={handleInputChange}
          />
        </div>
      </form>
      <div className="flex">
        <button
          className="flex w-full justify-center gap-2 bg-accents-green bg-opacity-25 py-4 text-center text-accents-green"
          onClick={() => {
            // TODO: Handle add drink -> Send data to API
            // If updated successfully -> Show success dialog
            // fetch("#", {
            //   method: "POST",
            //   headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(data),
            // })
            //   .then((response) => response.json)
            //   .then(console.log(json))
            //   .catch((err) => console.log(err));

            // Change back to details
            setIsDefault(true);
          }}
        >
          <Edit />
          Add
        </button>
      </div>
    </div>
  );

  return isDefault ? defaultCard : editCard;
};

export default AddDrinkCard;
