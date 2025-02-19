import React from "react";
import { NavBar } from "../utils/NavBar";
import { Footer } from "../utils/Footer";
import lydiaHeadshot from "../graphics/personal-branding/lydia-headshot.jpg";
import illustratorIcon from "../graphics/icons/illustrator-icon.svg";
import indesignIcon from "../graphics/icons/indesign-icon.svg";
import lightroomIcon from "../graphics/icons/lightroom-icon.svg";
import photoshopIcon from "../graphics/icons/photoshop-icon.svg";
import premiereIcon from "../graphics/icons/premiere-icon.svg";


export function About() {

    return (
        <div className="main-container"> 
        <header>
            <NavBar />
        </header>
       
        <div className="about d-flex row">
          {/* Beginning of about-col-1 */}
          <div className="about-col-1 col-12 col-md-8">
            {/* Beginning of about-section-1 */}
            <div className="about-section-1">
              <img
                className="headshot"
                alt="Lydia Ritchie headshot"
                src={lydiaHeadshot}
              />

              <div className="about-intro">
                My name is Lydia, and I am a full-stack engineer with a strong
                foundation in graphic design, illustration, video production,
                and pottery. My experience is largely project based, I am
                strongly self driven, and have demonstrated creative problem
                solving skills. My background in art provides me with a good eye
                for design and artistic creativity. I was born and raised in
                Thailand!
              </div>
            </div>
            {/* ^ End of about-section-1 */}

            {/* Start of skills section */}
            <div className="skills-section">
              <h6 className="heading-bold mb-2 tech-title">Technical Skills</h6>
              <div className="d-flex tech-skills-container">
                <div className="tech-skills">React</div>
                <div className="tech-skills">HTML</div>
                <div className="tech-skills">CSS</div>
                <div className="tech-skills">RESTful API</div>
                <div className="tech-skills">Node.JS</div>
                <div className="tech-skills">Express</div>
                <div className="tech-skills">PostgreSQL</div>
                <div className="tech-skills">Bootstrap</div>
              </div>

              <div className="adobe-icon-container">
                <img
                  className="adobe-icon"
                  src={illustratorIcon}
                  alt="Adobe Illustrator icon"
                />
                <img
                  className="adobe-icon"
                  src={photoshopIcon}
                  alt="Adobe Photoshop icon"
                />
                <img
                  className="adobe-icon"
                  src={indesignIcon}
                  alt="Adobe InDesign icon"
                />
                <img
                  className="adobe-icon"
                  src={lightroomIcon}
                  alt="Adobe Lightroom icon"
                />
                <img
                  className="adobe-icon"
                  src={premiereIcon}
                  alt="Adobe Premiere Pro icon"
                />
              </div>
            </div>

            {/* ^ End of skills section */}
          </div>

          {/* Start of col-2 */}
          <div className="about-col-2 col-12 col-md-4">
            {/* Beginning of education-section */}
            <div className="education-section">
              {/* Education start */}
              <div>
                <h6 className="heading-bold mb-3">Education</h6>

                <div className="d-flex justify-content-between">
                  <div className="col-5 year-title">2024 </div>
                  <div className="col-7">
                    Chegg Skills, Software Engineering Trainee
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <div className="col-5 year-title">2019 - 2023</div>
                  <div className="col-7">BA, Studio Art, Wheaton College</div>
                </div>
              </div>
              {/* ^ Education end */}

              {/* Experience start */}
              <div className="mt-4">
                <h6 className="heading-bold mb-3" style={{ color: "" }}>
                  Experience
                </h6>

                <div className="d-flex justify-content-between">
                  <div className="col-5 year-title">2023 - Present </div>
                  <div className="col-7">
                    Media Production Lead, Illustrator -{" "}
                    <a className="inline-link" href="https://isdsi.org/">
                      ISDSI
                    </a>{" "}
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <div className="col-5 year-title">2023 - Present</div>
                  <div className="col-7">
                    Media Production Lead, Graphic Designer -{" "}
                    <a
                      className="inline-link"
                      href="https://www.cfcnxfitness.com/"
                    >
                      Crossfit Chiang Mai
                    </a>{" "}
                  </div>
                </div>
              </div>
              {/* ^ Education end */}
            </div>
            {/* ^ End of education-section */}
          </div>
          {/* ^ End of col-2 */}
        </div>
        <footer> 
            < Footer bgColor="#8baac2"/>
        </footer>
        </div>
    )
}