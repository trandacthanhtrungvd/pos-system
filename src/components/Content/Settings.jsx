import React from "react";
import { NavLink } from "react-router-dom";

const Settings = ({ to, icon, title, description, isActive }) => {
  return (
    <NavLink to={to} className="w-[275px] p-6 text-text-light flex">
      {icon}
      <div className="ml-2">
        <div className="text-body-normal-medium text-white">{title}</div>
        <div className="text-body-small-regular">{description}</div>
      </div>
    </NavLink>
  );
};

export default Settings;
