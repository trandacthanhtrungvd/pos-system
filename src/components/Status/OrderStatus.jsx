// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';

const OrderStatus = ({ status }) => {
  const statusText = {
    completed: "Completed",
    preparing: "Preparing",
    pending: "Pending",
  };

  const defaultFormat =
    "inline-flex h-6 w-24 items-center justify-center gap-2.5 rounded-3xl bg-opacity-25 px-3 py-1 font-['Barlow'] text-sm font-medium leading-tight ";

  const statusFormat = {
    completed: "bg-accents-green text-accents-green",
    preparing: "bg-accents-purple text-accents-purple",
    pending: "bg-accents-orange text-accents-orange",
  };

  const format = defaultFormat.concat(statusFormat[status]);
  console.log(format);

  return (
    <div className={defaultFormat.concat(statusFormat[status])}>
      {statusText[status]}
    </div>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.oneOf(['completed', 'preparing', 'pending'])
};

export default OrderStatus;
