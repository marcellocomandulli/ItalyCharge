import React from "react";
import { useState } from "react";

export default function Cards({ stations }) {
  return (
    <>
      <ul className="my-6 md:grid md:grid-cols-4">
        {stations.map((station) => (
          <li
            key={station.ID}
            className="max-w-sm bg-white border mb-5 p-5 content-between md:m-2 border-gray-200 rounded-lg shadow-lg"
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {station.AddressInfo.Title}
            </h5>

            <div className="mb-3 font-normal text-gray-700">
              <span>{station.AddressInfo.Town}</span> <br />
              <span>{station.AddressInfo.AddressLine1}</span> <br />
              {station.UsageCost && (
                <span className="font-medium text-xl">{station.UsageCost}</span>
              )}
            </div>

            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${station.AddressInfo.Latitude},${station.AddressInfo.Longitude}`,
                  "_blank"
                )
              }
              className="px-3 py-2 flex items-center text-sm font-medium text-left text-white bg-[#CBDA74] rounded-lg"
            >
              Apri Maps{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
