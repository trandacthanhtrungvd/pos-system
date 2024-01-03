import FeedbackStatus from "@components/Status/FeedbackStatus";
import React from "react";

const Feedback = ({ name, content, status, time }) => {
  return (
    <div className="my-4 flex w-full items-center rounded-lg bg-base-dark-bg-1 px-3 py-4">
      <div className="flex basis-3/12 items-center gap-4 overflow-hidden text-ellipsis whitespace-nowrap">
        <img
          className="h-8 w-8 rounded-full"
          src="https://picsum.photos/150/150"
          alt="avt"
        />
        {name}
      </div>
      <div className="basis-5/12 overflow-hidden text-ellipsis whitespace-nowrap">
        {content}
      </div>
      <div className="basis-2/12 text-center">
        <FeedbackStatus status={status} />
      </div>
      <div className="basis-2/12 text-right">{time}</div>
    </div>
  );
};

export default Feedback;
