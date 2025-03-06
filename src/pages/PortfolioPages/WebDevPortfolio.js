import React from "react";
import { CardImg } from "react-bootstrap";
import WebDevData from "../../utils/data/WebDevData";

function WebDevPortfolio() {
  return (
    <div className="main-container mt-3">
      <div
        className="web-dev-subtitle justify-content-center"
        style={{
          marginBottom: "16px",
          marginTop: "-10px",
        }}
      >
        <div className="d-flex justify-content-center">
          Please allow time for websites to load :)
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          For this website:
          <a
            className="link-btns"
            href="https://github.com/lydiaritchie/portfolio-website"
            style={{
              marginLeft: "5px",
              padding: "0",
              backgroundColor: "#a4c6df",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <div className="grid row g-3">
        {WebDevData.map((project, index) => (
          <div className="col-12 col-sm-6" key={project.title}>
            <div className="card web-dev-card">
              <div className="card-body">
              <div class="loader"></div>
                <CardImg src={project.image} onLoad={(e) => {
                        // Hide loader when image is loaded
                        e.target.parentElement.querySelector(".loader").style.display = "none";
                      }}/>
                <h5 className="card-title heading-bold mt-2">{project.title}</h5>
                <div className="link-container">
                  <a
                    className="link-btns"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    Website
                  </a>
                  <a
                    className="link-btns"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                  >
                    Github
                  </a>
                </div>
                <div className="web-dev-subtitle">{project.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebDevPortfolio;
