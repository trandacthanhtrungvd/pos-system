// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import SideBarButton from "./SideBarButton";

import {
  Bell,
  Dashboard,
  Notification,
  Promos,
  Room,
  Settings,
  Logout,
} from "../../assets/icons/index.js";

const SideBar = () => {
  const [activeButton, setActiveButton] = useState();
  const iconList = [
    { id: "bell", icon: <Bell /> },
    { id: "room", icon: <Room /> },
    { id: "promos", icon: <Promos /> },
    { id: "dashboard", icon: <Dashboard /> },
    { id: "notification", icon: <Notification /> },
    { id: "settings", icon: <Settings /> },
  ];
  const logoSvg = (
    <svg
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6667 0.333313H5.33337C2.57671 0.333313 0.333374 2.57665 0.333374 5.33331V10.0516C0.333374 11.8066 0.970041 13.4016 2.00004 14.6283V30.3333C2.00004 30.7753 2.17564 31.1993 2.4882 31.5118C2.80076 31.8244 3.22468 32 3.66671 32H17C17.4421 32 17.866 31.8244 18.1786 31.5118C18.4911 31.1993 18.6667 30.7753 18.6667 30.3333V22H25.3334V30.3333C25.3334 30.7753 25.509 31.1993 25.8215 31.5118C26.1341 31.8244 26.558 32 27 32H30.3334C30.7754 32 31.1993 31.8244 31.5119 31.5118C31.8244 31.1993 32 30.7753 32 30.3333V14.6266C33.03 13.4016 33.6667 11.8066 33.6667 10.05V5.33331C33.6667 2.57665 31.4234 0.333313 28.6667 0.333313ZM30.3334 5.33331V10.0516C30.3334 11.9516 28.9184 13.5716 27.1817 13.6633L27 13.6666C25.1617 13.6666 23.6667 12.1716 23.6667 10.3333V3.66665H28.6667C29.5867 3.66665 30.3334 4.41498 30.3334 5.33331ZM13.6667 10.3333V3.66665H20.3334V10.3333C20.3334 12.1716 18.8384 13.6666 17 13.6666C15.1617 13.6666 13.6667 12.1716 13.6667 10.3333ZM3.66671 5.33331C3.66671 4.41498 4.41337 3.66665 5.33337 3.66665H10.3334V10.3333C10.3334 12.1716 8.83837 13.6666 7.00004 13.6666L6.81837 13.6616C5.08171 13.5716 3.66671 11.9516 3.66671 10.0516V5.33331ZM13.6667 23.6666H7.00004V18.6666H13.6667V23.6666Z"
        fill="url(#paint0_linear_192_1372)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_192_1372"
          x1="17"
          y1="0.333313"
          x2="17"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA9769" />
          <stop offset="1" stopColor="#EA6969" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="flex h-screen w-[6.5rem] flex-col items-center justify-between bg-base-dark-bg-2">
      <div className="mb-4 mt-6 rounded-xl bg-[rgba(235,150,106,0.26)] p-2">
        {logoSvg}
      </div>
      <div className="flex-grow self-end">
        {iconList.map((item) => (
          <SideBarButton
            key={item.id}
            icon={item.icon}
            isActive={activeButton === item.id}
            onClick={() => setActiveButton(item.id)}
          />
        ))}
      </div>
      <div>
        {/* TODO: Onclick => Handle custom onClick for logout button */}
        <button className="mb-6 p-4 text-primary">
          <Logout />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
