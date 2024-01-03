import React, { useState } from "react";
import { Coin, Customer, Order } from "@icons";
import SummaryCard from "@components/Card/SummaryCard";
import Feedback from "@components/Content/Feedback";
import MostOrderedDrink from "@components/Content/MostOrderedDrink";
import ChoiceButton from "@components/Button/ChoiceButton";

const DashboardPage = () => {
  const [hiddenAnswered, setHiddenAnswered] = useState(false);
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateString =
    days[date.getDay()] + ", " + date.toUTCString().slice(5, 16);

  // TODO: Fetch API to get feedback data
  const feedbacks = [
    {
      name: "Curtis Peters",
      content:
        "fierce lot porch hospital oldest clay muscle mix wrong book widely taste nervous canal experiment seeing drove flow hurry suggest first halfway bad but",
      status: "pending",
      time: "13:03",
    },
    {
      name: "Olga McDonald",
      content:
        "picture organized rocky type bet prevent birth iron tears usually vegetable molecular impossible breath hand straight passage eager learn part camera football lost may",
      status: "pending",
      time: "13:03",
    },
    {
      name: "Arthur Gross",
      content:
        "suddenly simply but excited rod do terrible engine dozen almost recognize appearance faster chose steam beautiful poet lie hall promised left gave congress take",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Hannah Jacobs",
      content:
        "bee everything heavy studying salmon heart clothing exactly wear similar eager newspaper chair break mathematics explore blood meal visit electric conversation pressure bark wonderful",
      status: "pending",
      time: "13:03",
    },
    {
      name: "Tom Ray",
      content:
        "five pole hunt upper raw tears history color straw plane beauty successful leave valuable corn somehow direction different include act dropped capital what coming",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Lawrence Mann",
      content:
        "storm own then neighborhood according wool alive fence fifteen merely turn article in manufacturing citizen aside strong allow stood quiet being pick clothing seat",
      status: "pending",
      time: "13:03",
    },
    {
      name: "Lulu Hampton",
      content:
        "event story difficult additional fort smooth moment fence remarkable mother ago coal chest terrible only visit took continent where white main us mice primitive",
      status: "pending",
      time: "13:03",
    },
    {
      name: "Marie Gilbert",
      content:
        "plain thee engine bit prove mix lucky thumb worry rough market noon of sunlight suit correct poetry hit six then cent sense group poet",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Bradley Simpson",
      content:
        "fireplace bee function silent sheet busy limited remarkable upward natural stream eleven find night magic tone sitting stopped order meat shine remove differ prevent",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Dorothy Becker",
      content:
        "shadow satellites nor bat wish tongue shoot chart successful symbol lucky fire middle bag image verb value young stared moving solid various dance widely",
      status: "pending",
      time: "13:03",
    },
    {
      name: "Elva Valdez",
      content:
        "necessary talk any swing afternoon successful plan becoming seed corn night waste sink quick full slightly by explain cell favorite studying rule sent lake",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Mae Massey",
      content:
        "rush raw movement grade clothing escape prevent difficulty average pretty silver curious trunk capital fine detail knew wagon fight bear express mission know took",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Josephine Barnes",
      content:
        "present lose individual color of date double studied riding basic soil flight proud leg military discussion value office student factor death experiment behavior pour",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Florence McCarthy",
      content:
        "no born inside captain desk setting lamp wolf enough she today feathers therefore highway struggle knowledge roll stronger lovely fast rays number settlers church",
      status: "pending",
      time: "13:03",
    },
    {
      name: "Gordon Delgado",
      content:
        "back machine bee river circus fall courage brush modern happened bite importance ship tired himself use corn official guide art anybody hospital touch additional",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Jason Cooper",
      content:
        "health tie education force dish needs men ants tea differ few peace mountain through motor paper bent close black subject window glass home practice",
      status: "answered",
      time: "13:03",
    },
    {
      name: "Max Olson",
      content:
        "per fish native obtain sky atomic greater force cave imagine child please wash on lunch felt bottle feet then population how tube coast wooden",
      status: "pending",
      time: "13:03",
    },
  ];

  return (
    <div className="flex w-full justify-between gap-6 bg-base-dark-bg-1 p-6 font-barlow text-white">
      <div className="flex w-3/4 flex-col gap-6">
        <div className="flex flex-col justify-between gap-4">
          <p className="text-heading-h1">Dashboard</p>
          <p className="text-body-large-regular">{dateString}</p>
          <hr className="border-base-dark-line" />
        </div>
        <div className="flex">
          <SummaryCard
            icon={<Coin />}
            iconColor={"accents-purple"}
            title={"Total Revenue"}
            value={"$10,243.00"}
            trend={"+12.80"}
          />
          <SummaryCard
            icon={<Order />}
            iconColor={"accents-orange"}
            title={"Total Order"}
            value={"23,456"}
            trend={"-12.40"}
          />
          <SummaryCard
            icon={<Customer />}
            iconColor={"accents-blue"}
            title={"Total Customer"}
            value={"1,234"}
            trend={"+2.40"}
          />
        </div>
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-base-dark-bg-2 py-6">
          <div className="flex items-baseline justify-between px-6">
            <div className="mb-4 text-heading-h2">Recent Feedbacks</div>
            <div>
              <ChoiceButton
                text="Hide answered"
                status={hiddenAnswered}
                handleClick={() => {
                  setHiddenAnswered((prev) => !prev);
                }}
              />
            </div>
          </div>
          <div className="flex px-6 text-xl">
            <div className="basis-3/12">Customer</div>
            <div className="basis-5/12">Content</div>
            <div className="basis-2/12 text-center">Status</div>
            <div className="basis-2/12 text-right">Time</div>
          </div>
          <hr className="my-4 border-base-dark-line" />
          <div className="overflow-auto px-3 no-scrollbar">
            {feedbacks.map((feedback, index) => {
              if (hiddenAnswered && feedback.status == "answered") {
                return <></>;
              } else {
                return (
                  <Feedback
                    key={index}
                    name={feedback.name}
                    status={feedback.status}
                    content={feedback.content}
                    time={feedback.time}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="flex h-full w-1/4 flex-col justify-between gap-4">
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-base-dark-bg-2 p-6">
          <div className="text-heading-h2">Most Ordered Drinks</div>
          <hr className="my-4 border-base-dark-line" />
          <div className="flex flex-col gap-6 overflow-auto no-scrollbar">
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
          </div>
        </div>
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-base-dark-bg-2 p-6">
          <div className="text-heading-h2">Most Ordered Rooms</div>
          <hr className="my-4 border-base-dark-line" />
          <div className="flex flex-col gap-6 overflow-auto no-scrollbar">
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
            <MostOrderedDrink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
