import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div className="flex flex-col p-2 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full p-2 rounded-full bg-white shadow-lg sticky"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#e1f56d] lg:text-sm text-xs"
          placeholder="Cerca"
        />
        <button
          type="submit"
          className="bg-[#CBDA74] p-2 cursor-pointer mx-2 rounded-full hover:bg-[#afbd63]"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
