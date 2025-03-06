import React from "react";
import { useState } from "react";
import linkedInIcon from "../graphics/icons/linkedIn-icon.svg";
import githubIcon from "../graphics/icons/github-icon.svg";
import emailIcon from "../graphics/icons/email-bg-icon.svg";
import instaIcon from "../graphics/icons/insta-icon.svg";
import { getRandomColor } from "../utils/randomColor";
import { NavBar } from "../utils/NavBar";
import { Footer } from "../utils/Footer";

export function Contact() {
  const [linkedInColor, setLinkedInColor] = useState("transparent");
  const [gitHubColor, setGitHubColor] = useState("transparent");
  const [emailColor, setEmailColor] = useState("transparent");
  const [instaColor, setInstaColor] = useState("transparent");

  return (
    <div className="main-container">
      <header>
        <NavBar bgColor="#8baac2" />
      </header>
      <div
        className="text-center fst-italic"
        style={{
          color: "#425c77",
          fontStyle: "oblique",
          marginTop: "10px",
        }}
      >
        <p className="mx-4">
          Feel free to reach out or explore my work through the links below!
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="row contact-container">
          <a
            className="btn contact-btn"
            href="https://www.linkedin.com/in/lydia-g-ritchie/"
            onMouseEnter={() => setLinkedInColor(getRandomColor())}
            onMouseLeave={() => setLinkedInColor("transparent")}
            style={{ backgroundColor: linkedInColor }}
          >
            <img
              className="mx-2"
              src={linkedInIcon}
              alt="LinkedIn Icon"
              width={20}
            />
            LinkedIn
          </a>

          <a
            className="btn contact-btn"
            href="https://github.com/lydiaritchie"
            onMouseEnter={() => setGitHubColor(getRandomColor())}
            onMouseLeave={() => setGitHubColor("transparent")}
            style={{ backgroundColor: gitHubColor }}
          >
            <img
              className="mx-2"
              src={githubIcon}
              alt="Github Icon"
              width={20}
            />
            GitHub
          </a>

          <a
            className="btn contact-btn"
            href="mailto:lydia.g.ritchie@gmail.com"
            onMouseEnter={() => setEmailColor(getRandomColor())}
            onMouseLeave={() => setEmailColor("transparent")}
            style={{ backgroundColor: emailColor }}
          >
            <img
              className="mx-2"
              src={emailIcon}
              alt="Email Icon"
              width={20}
            />
            lydia.g.ritchie@gmail.com
          </a>

          <a
            className="btn contact-btn"
            href="https://www.instagram.com/lydiaritchieart/"
            onMouseEnter={() => setInstaColor(getRandomColor())}
            onMouseLeave={() => setInstaColor("transparent")}
            style={{ backgroundColor: instaColor }}
          >
            <img
              className="mx-2"
              src={instaIcon}
              alt="Insta Icon"
              width={20}
            />
            @lydiaritchieart
          </a>
        </div>
      </div>
      <footer>
        <Footer bgColor="#8baac2" />
      </footer>
    </div>
  );
}
