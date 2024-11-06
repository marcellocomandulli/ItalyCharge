import React, { useState } from "react";
import About from "./About";
import AroundMe from "./AroundMe";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 flex justify-center items-center">
        <div className="relative bottom-20">
          <div
            className={`flex flex-col items-center transition-all duration-500 ${
              showButtons
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link to={"/"}>
              <button className="bg-[#CBDA74] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center my-2 transition duration-300 md:h-16 md:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </button>
            </Link>

            <Link to={"/src/components/AroundMe.jsx"}>
              <button className="bg-[#CBDA74] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center my-2 transition duration-300 md:h-16 md:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </button>
            </Link>

            <Link to={"/src/components/About.jsx"}>
              <button className="bg-[#CBDA74] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center my-2 transition duration-300 md:h-16 md:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="bg-[#CBDA74] flex justify-center items-center fixed bottom-0 right-0 mb-4 mr-4 text-white w-14 h-14 p-3 rounded-full shadow-lg md:h-16 md:w-16 transition"
        >
          {showButtons ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
