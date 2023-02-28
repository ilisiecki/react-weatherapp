import React, { useState } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

const SearchBar = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
      setCity("");
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched successfully");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsClick = (event) => {
    const selectedUnit = event.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="my-7 flex flex-col items-center justify-center md:flex-row">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <input
          value={city}
          type="text"
          placeholder="search..."
          className="w-full p-2 text-xl font-light capitalize shadow-xl placeholder:lowercase focus:outline-none"
          onChange={handleChange}
          onKeyUp={handleKeyPress}
        />
        <div className="flex flex-row gap-3 pl-5 pt-7 md:pt-0">
          <UilSearch
            size={25}
            className="cursor-pointer text-white transition ease-out hover:scale-125 hover:text-gray-200"
            onClick={handleSearchClick}
          />
          <UilMapMarker
            size={25}
            className="cursor-pointer text-white transition ease-out hover:scale-125 hover:text-gray-200"
            onClick={handleLocationClick}
          />
          <button
            name="metric"
            className="text-xl font-light text-white transition ease-out hover:scale-125 hover:text-gray-200"
            onClick={handleUnitsClick}
          >
            °C
          </button>
          <p className="mx-1 text-xl text-white">|</p>
          <button
            name="imperial"
            className="text-xl font-light text-white transition ease-out hover:scale-125 hover:text-gray-200"
            onClick={handleUnitsClick}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
