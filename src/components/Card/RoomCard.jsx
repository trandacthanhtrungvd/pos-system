// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import RoomStatus from "@components/Status/RoomStatus.jsx";
import { OrderContext } from "@/App";
import { Datepicker, Modal, Button } from "flowbite-react";

const RoomCard = ({
  id,
  name,
  description,
  price,
  roomImage,
  status = true,
  className,
}) => {
  const [data, setData] = useState({
    start_hour: null,
    duration: null,
  });
  const [available, setAvailable] = useState(true);
  const OrderData = useContext(OrderContext);
  const { setOrderedRoom } = OrderData;
  const handleAddClick = () => {
    // TODO: Add time & amount
    setOrderedRoom({
      id: id,
      name: name,
      price: price,
    });
  };

  useEffect(() => {
    console.log(data.start_hour);
    console.log(naHours);
    let start_hour = Number(data.start_hour);
    console.log(naHours.includes(start_hour));
    if (start_hour) {
      if (naHours.includes(start_hour)) {
        setAvailable(false);
        return;
      }

      if (data.duration) {
        for (let i = 0; i < data.duration; ++i) {
          if (naHours.includes(i + start_hour)) {
            setAvailable(false);
            return;
          }
        }
        setAvailable(true);
      } else {
        setAvailable(true);
      }
    } else {
      setAvailable(true);
    }
  }, [data]);

  // TODO: Fetch API in order to get booking data each time the input date was changed
  const bookings = [
    {
      start_hour: 0,
      duration: 5,
    },
    {
      start_hour: 7,
      duration: 3,
    },
  ];
  let naHours = [];
  bookings.forEach((booking) => {
    for (let i = 0; i < booking.duration; ++i) {
      naHours.push(booking.start_hour + i);
    }
  });

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div
        className={twMerge(
          "mb-4  min-h-fit w-full min-w-fit rounded-2xl bg-base-dark-bg-2 p-6 font-barlow",
          className,
        )}
      >
        <div className="flex items-center justify-between text-white">
          <img
            className="mr-4 h-28 w-40 rounded-lg"
            src={roomImage}
            alt="room-image"
          />
          <div className="flex h-full flex-col self-start">
            <p className="mb-2 text-xl font-semibold">{name}</p>
            <p className="max-w-md text-body-large-regular">{description}</p>
          </div>
          <RoomStatus status={status} />
          <div className="ml-6 text-body-large-regular">{price} VND/hr</div>
          <button className="ml-4 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white">
            Thêm
          </button>
        </div>
        <div className="flex items-center justify-start gap-4">
          <input
            type="date"
            name="day"
            id="day"
            className="rounded-lg border-2 border-base-dark-line bg-base-dark-bg-2 px-2 py-1 text-white"
            min={today}
          />
          <input
            type="number"
            name="start_hour"
            id="start_hour"
            className="rounded-lg border-2 border-base-dark-line bg-base-dark-bg-2 px-2 py-1"
            placeholder="Thời gian"
            onChange={handleOnInputChange}
          />
          <input
            type="number"
            name="duration"
            id="duration"
            className="rounded-lg border-2 border-base-dark-line bg-base-dark-bg-2 px-2 py-1"
            placeholder="Thời lượng (giờ)"
            onChange={handleOnInputChange}
          />
          <div className="text-accents-red">
            {available ? "" : "Phòng đã được đặt vào giờ này"}
          </div>
        </div>
        <div className="mt-2 flex">
          {Array.from({ length: 24 }, (_, i) => {
            let statusFormat = naHours.includes(i)
              ? "border border-accents-red text-accents-red bg-accents-red z-10"
              : "border border-accents-green text-accents-green bg-accents-green";
            return (
              <div
                key={i}
                className={`relative -ml-[1px] flex items-center border border-base-dark-line bg-opacity-25 p-2
                  ${statusFormat}
                  ${i === 0 ? "rounded-l-lg" : ""} 
                  ${i === 23 ? "rounded-r-lg" : ""}
                `}
              >
                <div className="w-1/6">{`${i}:00`}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

RoomCard.propTypes = {
  roomImage: PropTypes.string,
  status: PropTypes.bool,
  className: PropTypes.string,
};

export default RoomCard;
