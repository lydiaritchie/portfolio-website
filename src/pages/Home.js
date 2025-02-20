import React, { useState } from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { Footer } from "../utils/Footer";
import teapot from "../graphics/home-graphics/blue-teapot.png";
import { brew } from "../utils/api";
import deskComponent from "../graphics/DeskComponent.png";

export function Home() {
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
      window.open("about:inspect", "");
      console.log(brewState);
    } catch (error) {
      console.log(error);
      setBrewError(`${error.status}: ${error.message}`);
    }
  }
  return (
    <div>
      <header>
        <NavBar bgColor="#8baac2" />
      </header>
      <div
        className="main-container mx-0"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="desk-container mx-0" style={{ backgroundColor: "" }}>
          {/* <img className="teapot" onClick={handleTeapot} src={teapot} /> */}

          <DeskComponent className="desk-img"/>
          {/* <img className="desk-img" src={deskComponent} /> */}
        </div>
      
      </div>

      <footer>
        <Footer bgColor="#8baac2" />
      </footer>
    </div>
  );
}
