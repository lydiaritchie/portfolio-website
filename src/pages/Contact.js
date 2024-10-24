import React from "react";
import { useState } from "react";
import linkedInIcon from "../graphics/linkedIn-icon.svg";
import githubIcon from "../graphics/github-icon.svg";
import emailIcon from "../graphics/email-bg-icon.svg";
import instaIcon from "../graphics/insta-icon.svg";
import { getRandomColor } from "../utils/randomColor";

export function Contact() {
  const [linkedInColor, setLinkedInColor] = useState("transparent");
  const [gitHubColor, setGitHubColor] = useState("transparent");
  const [emailColor, setEmailColor] = useState("transparent");
  const [instaColor, setInstaColor] = useState("transparent");

  return (
    <div>
      <h1 className="text-center fst-italic" style={{marginTop: "15px"}} >Contact</h1>
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
              width={30}
            />
            LinkedIn
          </a>

          <a
            className="btn contact-btn"
            href="https://github.com/lydiaritchie"
            onMouseEnter={() => setGitHubColor(getRandomColor())}
            onMouseLeave={() => setGitHubColor("transparent")}
            style={{ backgroundColor: gitHubColor}}
          >
            <img
              className="mx-2"
              src={githubIcon}
              alt="LinkedIn Icon"
              width={30}
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
              alt="LinkedIn Icon"
              width={30}
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
              alt="LinkedIn Icon"
              width={30}
            />
            @lydiaritchieart
          </a>
        </div>
      </div>
    </div>
  );
}
