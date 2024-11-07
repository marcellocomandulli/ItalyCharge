import React from "react";
import Navbar from "../../../Navbar";
import { Helmet } from "react-helmet";

export default function AroundMe() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Around Me - ItalyCharge</title>
      </Helmet>

      <iframe
        src="https://map.openchargemap.io/?mode=embedded&latitude=41.891776&longitude=12.489899"
        allow="geolocation"
        className="w-screen h-screen"
      ></iframe>

      <nav>
        <Navbar />
      </nav>
    </>
  );
}
