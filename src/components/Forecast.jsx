import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

const Forecast = ({ title, items }) => {
  return (
    <>
      <div className="mt-6 flex items-center justify-center">
        <p className="font-medium uppercase text-white">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col items-center justify-between text-white md:flex-row">
        {items.map((item, index) => (
          <div className="flex flex-col items-center justify-center" key={index}>
            <p className="text-sm font-light">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="" className="my-1 w-12" />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
