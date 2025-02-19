import React from "react";
import { NavBar } from "../utils/NavBar";
import DeskComponent from "../graphics/DeskComponent";
import { Footer } from "../utils/Footer";
import { ReactComponent as LydiaRitchieHorizontal } from "../graphics/personal-branding/lydia-ritchie-horizontal.svg";
import lydiaHeadshot from "../graphics/personal-branding/lydia-headshot.jpg";
import illustratorIcon from "../graphics/icons/illustrator-icon.svg";
import indesignIcon from "../graphics/icons/indesign-icon.svg";
import lightroomIcon from "../graphics/icons/lightroom-icon.svg";
import photoshopIcon from "../graphics/icons/photoshop-icon.svg";
import premiereIcon from "../graphics/icons/premiere-icon.svg";
import deskComponent from "../graphics/DeskComponent.png";

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
      

        <div className="desk-container mx-0">
          <img className="desk-img" src={deskComponent} />
        </div>
        <div
          className="subtitle"
        >
          Software Engineer, Designer, Artist
        </div>
      </div>

      <footer>
        <Footer bgColor="#8baac2" />
      </footer>
    </div>
  );
}
