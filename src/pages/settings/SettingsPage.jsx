import React from "react";
import Settings from "@components/Content/Settings";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Room, Bell } from "@icons";

const SettingsPage = () => {
  return (
    <div className="flex w-full flex-col bg-base-dark-bg-1 p-6 font-barlow text-white">
      <div className="mb-6 text-heading-h1">Manage Products</div>
      <div className="flex h-full w-full flex-grow justify-between">
        <div className="mr-6 h-full w-[275px] flex-shrink-0 bg-base-dark-bg-2 rounded-lg">
          <Settings
            to={"./rooms"}
            icon={<Room />}
            title={"Rooms"}
            description={"Manage your rooms"}
          />
          <Settings
            to={"./drinks"}
            icon={<Bell />}
            title={"Drinks"}
            description={"Manage your drinks"}
          />
          <Settings />
        </div>
        <div className="rounded-lg w-full bg-base-dark-bg-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
