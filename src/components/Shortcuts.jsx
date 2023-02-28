import React from "react";

const Shortcuts = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Jelenia Góra",
    },
    {
      id: 2,
      title: "Gubin",
    },
    {
      id: 3,
      title: "Zielona Góra",
    },
    {
      id: 5,
      title: "Miami",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-5 md:flex-row md:gap-20">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium text-white transition ease-in hover:scale-110 hover:text-gray-200"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default Shortcuts;
