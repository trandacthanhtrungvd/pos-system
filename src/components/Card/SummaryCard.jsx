import React from "react";
import { Up, Down } from "@icons";

const SummaryCard = ({ icon, iconColor, title, value, trend }) => {
  return (
    <div className="flex h-36 w-72 flex-col items-start justify-start gap-2 rounded-lg bg-base-dark-bg-2 p-4 mr-6">
      <div className="inline-flex items-center justify-center gap-3">
        <div
          className={`rounded-lg bg-base-dark-bg-1 p-[7px] ${
            "text-" + iconColor
          }`}
        >
          {icon}
        </div>
        <div
          className={`flex items-center justify-center gap-1.5 ${
            trend >= 0 ? "text-accents-green" : "text-accents-red"
          }`}
        >
          <div className="text-body-normal-regular leading-none">{trend}%</div>
          <div
            className={`rounded-full bg-opacity-25 p-0.5 ${
              trend >= 0 ? "bg-accents-green" : "bg-accents-red"
            }`}
          >
            {trend >= 0 ? <Up /> : <Down />}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="text-heading-h1 leading-[39.20px] text-white">
          {value}
        </div>
        <div className="text-sm font-medium leading-[18.20px] text-gray-400">
          {title}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
