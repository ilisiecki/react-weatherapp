import React, { useEffect, useState } from "react";
import Forecast from "./components/Forecast.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Shortcuts from "./components/Shortcuts.jsx";
import TemperatureAndDetails from "./components/TemperatureAndDetails.jsx";
import TimeAndLocation from "./components/TimeAndLocation.jsx";
import getFormattedWeatherData from "./services/weatherService.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "Jelenia Góra" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      toast.info("Fetching weather for " + query.q);
      try {
        await getFormattedWeatherData({ ...query, units }).then((data) => {
          toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);
          setWeather(data);
        });
      } catch (e) {
        toast.error("City '" + query.q + "' not found");
      }
    };
    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div
        className={
          "mx-auto mt-0 h-fit max-w-screen-lg rounded-md bg-gradient-to-t from-zinc-400 to-zinc-700 py-5 px-32 pb-10 shadow-lg shadow-white lg:mt-5"
        }
      >
        <Shortcuts setQuery={setQuery} />
        <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title={"Hourly forecast"} items={weather.hourly} />
            <Forecast title={"Daily forecast"} items={weather.daily} />
          </>
        )}
      </div>
      <ToastContainer autoClose={1000} theme="colored" newestOnTop={true} />
    </>
  );
}

export default App;
