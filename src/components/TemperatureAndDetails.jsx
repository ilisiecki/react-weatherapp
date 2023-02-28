import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <>
      <div className="flex items-center justify-center py-5 text-3xl font-medium text-white">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-12 py-5 text-white md:gap-32">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-end text-sm font-light">
            <UilTemperature size={18} className="mr-1" />
            Real Fell:
            <span className="ml-1 font-medium">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex items-center justify-end text-sm font-light">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="ml-1 font-medium">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex items-center justify-end text-sm font-light">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="ml-1 font-medium">{`${speed}km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-x-2 py-5 text-sm text-white md:flex-row">
        <p className="shrink-0 font-light">
          <UilSun className="shrink-0" />
        </p>
        <p className="shrink-0 font-light">
          Rise:
          <span className="ml-1 font-medium">
            {formatToLocalTime(sunrise, timezone, "hh:mma")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSunset className="shrink-0" />
        <p className="font-light">
          Set:
          <span className="ml-1 font-medium">
            {formatToLocalTime(sunset, timezone, "hh:mma")}
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSun className="shrink-0" />
        <p className="font-light">
          High:
          <span className="ml-1 font-medium">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <UilSun className="shrink-0" />
        <p className="font-light">
          Low: <span className="ml-1 font-medium">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </>
  );
};

export default TemperatureAndDetails;
