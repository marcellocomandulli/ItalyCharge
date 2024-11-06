import React from "react";
import Navbar from "./Navbar";

export default function AroundMe() {
  return (
    <>
      <iframe
        src="https://map.openchargemap.io/?mode=embedded"
        allow="geolocation"
        className="w-screen h-screen"
      ></iframe>

      <nav>
        <Navbar />
      </nav>
    </>
  );
}
