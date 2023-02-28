import React from "react";
import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <>
      <div className="my-6 flex items-center justify-center text-center">
        <p className="text-2xl font-extralight text-white">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="my-3 flex items-center justify-center text-center">
        <p className="text-2xl font-medium text-white">{`${name}, ${country}`}</p>
      </div>
    </>
  );
};

export default TimeAndLocation;
