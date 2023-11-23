// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const SideBarButton = ({ icon, isActive, onClick }) => {
  const statusFormat = {
    true: "rounded-lg bg-primary text-white drop-shadow-[0_8px_24px_rgba(234,124,105,0.32)]",
    false: "text-primary",
  };

  const bgTop = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 8C12.5 4 12 0 12 0V12H0C0 12 4.5 12 8.5 8Z" />
    </svg>
  );

  const bgBottom = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.01001 3.51001C4.01001 -0.48999 0.0100098 0.0100098 0.0100098 0.0100098H12.01V12.01C12.01 12.01 12.01 7.51001 8.01001 3.51001Z" />
    </svg>
  );

  return (
    <button
      className={`flex items-end h-[6.375rem] w-[5.75rem] flex-col`}
      onClick={onClick}
    >
      <div className={`${isActive ? "text-base-dark-bg-1" : "text-base-dark-bg-2"}`}>{bgTop}</div>
      <div
        className={`flex h-20 w-[5.75rem] items-center rounded-l-[10px] ${
          isActive ? "bg-base-dark-bg-1" : "bg-base-dark-bg-2"
        }`}
      >
        <div className={`ml-3 p-4 ${statusFormat[isActive]}`}>{icon}</div>
      </div>
      <div className={`${isActive ? "text-base-dark-bg-1" : "text-base-dark-bg-2"}`}>{bgBottom}</div>
    </button>
  );
};

SideBarButton.propTypes = {
  icon: PropTypes.element.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SideBarButton;
