import React, { useState } from "react";
import teapot from "./home-graphics/blue-teapot.png";
import { brew } from "../utils/api";
import teapotError from "../graphics/home-graphics/418-error-msg.png";
import deskImg from "../graphics/DeskComponentSubtitle.png";

function DeskComponent() {
  const [brewState, setBrewState] = useState("");
  const [brewError, setBrewError] = useState("");

  async function handleTeapot() {
    if (brewError !== "") {
      setBrewError("");
      return;
    }
    try {
      const fetchedBrewResult = await brew("teapot");
      const brewResult = JSON.stringify(fetchedBrewResult);
      setBrewState(brewResult);
      // window.open("about:inspect", "");
      console.log(brewState);
    } catch (error) {
      // console.log(error);
      setBrewError(`${error.status}: ${error.message}`);
    }
  }
  return (
    <div className="desk-component" style={{backgroundColor: ""}}>
      <svg
        id="DeskComponent"
        data-name="DeskComponent"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="600 0 5000 4000"
        className="desk"
        height="100%"
        style={{backgroundColor: ""}}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="1">
            <stop offset="0%" stopColor="#8baac2" stopOpacity="0" />
            <stop offset="60%" stopColor="#8baac2" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Generator: Adobe Illustrator 29.0.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 186) */}

        <image href={deskImg} />

        {brewError ? (
          <image
            transform="translate(2700 850) scale(0.745)"
            href={teapotError}
          />
        ) : (
          <div></div>
        )}

        <image
          className="teapot"
          onClick={handleTeapot}
          transform="translate(4600 1430) scale(0.5)"
          href={teapot}
        />


      </svg>
    </div>
  );
}

export default DeskComponent;
