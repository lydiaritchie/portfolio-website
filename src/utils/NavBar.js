import React, { useState } from "react";
import githubIcon from "../graphics/icons/github-icon.svg";
import linkedInIcon from "../graphics/icons/linkedIn-icon.svg";
import emailIcon from "../graphics/icons/email-bg-icon.svg";
import instaIcon from "../graphics/icons/insta-icon.svg";
import lydiaRitchieVertical from "../graphics/personal-branding/lydia-ritchie-vertical.svg";

export function NavBar({ bgColor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-custom navbar-expand-sm navbar-light d-none d-sm-block">
        <div className="container-fluid px-4">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img
              src={lydiaRitchieVertical}
              width={60}
              alt="Lydia Ritchie Logo"
            />
          </a>

          {/* Centered Navigation Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-4">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item px-4">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>

          {/* Contact Buttons */}
          <div className="d-flex">
            <a
              className="contact-btn"
              href="https://www.linkedin.com/in/lydia-g-ritchie/"
              aria-label="LinkedIn Profile"
              title="Visit my LinkedIn profile"
            >
              <img
                className=""
                src={linkedInIcon}
                alt="LinkedIn Icon"
                width={20}
              />
            </a>
            <a
              className="contact-btn"
              href="https://github.com/lydiaritchie"
              aria-label="GitHub Profile"
              title="Visit my Github profile"
            >
              <img className="" src={githubIcon} alt="Github Icon" width={20} />
            </a>
            <a
              className="contact-btn"
              href="mailto:lydia.g.ritchie@gmail.com"
              aria-label="Email"
              title="Email me at lydia.g.ritchie@gmail.com"
            >
              <img className="" src={emailIcon} alt="Email Icon" width={20} />
            </a>
            <a
              className="contact-btn"
              href="https://www.instagram.com/lydiaritchieart/"
              aria-label="Instagram Profile"
              title="Visit my Instagram profile"
            >
              <img className="" src={instaIcon} alt="Insta Icon" width={20} />
            </a>
          </div>
        </div>
      </nav>

      <nav
        className="navbar navbar-expand-lg navbar-light d-sm-none d-flex row px-3"
        style={{ backgroundColor: bgColor }}
      >
        <button
          className="py-2 p-0 col-1"
          type="button"
          data-toggle="collapse"
          data-target="#smallNavBar"
          aria-controls="smallNavBar"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          style={{ backgroundColor: "transparent", border: "0px" }}
        >
          <span className="navbar-toggler-icon"  style={{ backgroundColor: "transparent", border: "0px" }}></span>
        </button>

        <div className="col-11" style={{backgroundColor: "",}}>
          <img className="" style={{width: "15%", backgroundColor: "",  marginLeft: "31vw", marginTop: "1vh"}} src={lydiaRitchieVertical} />
        </div>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="smallNavBar"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
