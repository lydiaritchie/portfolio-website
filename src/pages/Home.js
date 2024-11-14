import React from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { Footer } from "../utils/Footer";
import { ReactComponent as LydiaRitchieHorizontal } from "../graphics/personal-branding/lydia-ritchie-horizontal.svg";

export function Home() {
  return (
    <div>
      <header>
        <NavBar bgColor="#8baac2" />
      </header>
      <div className="main-container">
        <div
          className="d-flex row justify-content-center name-horizontal"
          style={{ background: "", marginBottom: "-15px", marginTop: "5px" }}
        >
          <LydiaRitchieHorizontal className="" style={{ width: "90%" }} />

          <div
            className="d-flex justify-content-center"
            style={{
              color: "#425c77",
              marginTop: "10px",
              marginBottom: "5px",
              fontSize: "4vw",
            }}
          >
            Software Engineer, Designer, Artist
          </div>
        </div>

        <div className="desk-container">
          <div className="desk" style={{ backgroundColor: "" }}>
            <DeskComponent />
          </div>
        </div>
      </div>
      <footer>
        <Footer bgColor="#8baac2"/>
      </footer>
    </div>
  );
}
/*<LydiaRitchieVertical className="d-none d-sm-block"
          style={{ width: "50%", paddingTop: "10px"}} />*/
