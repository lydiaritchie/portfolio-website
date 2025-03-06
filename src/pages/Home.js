import React from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { Footer } from "../utils/Footer";

export function Home() {

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
