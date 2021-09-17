import React, { Component } from "react";
import "./Main.css";
import UofTlogo from "../images/Utoronto_coa.svg.png";

import resume from "../images/SamyakMehta_Resume.pdf";
import Card from "../components/Card";

import { FaGithub } from "react-icons/fa";
//
import { RiPagesLine } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

import MaterialToolTip from "@material-ui/core/Tooltip";

import { PostData } from "../images/cardInfoProjects";

class Main extends Component {
  render() {
    this.temp = PostData.projects;
    this.temp2 = PostData.experiences;

    return (
      <div>
        <div className="centrePiece">
          <div className="introduction" id="intro">
            <div className="title" id="sub">
              WELCOME
            </div>

            <div className="format">
              <div className="flipper">
                <div className="normalText">
                  <para>
                    I am a second year Computer Science Student at the
                    <span style={{ color: "#1049ef", fontWeight: "600" }}>
                      {" "}
                      University of Toronto,
                    </span>{" "}
                    pursuing a specialist in Software Engineering with a major
                    in Statistics!
                  </para>

                  <div className="normalText" id="bold">
                    cGPA:
                    <span
                      style={{ color: "#1049ef", fontWeight: "600" }}
                    >
                      {" "}
                      3.73
                    </span>{" "}
                    [4.0 scale]
                  </div>
                </div>
              </div>
              <img
                className="addPadding"
                src={UofTlogo}
                width="250px"
                height="225px"
                alt="UofTlogo"
              />
            </div>
            {/* Hmm DO I WANT TO ADD THIS OR NOT? */}
            <div className="contactMe">
              <MaterialToolTip
                arrow
                interactive
                PopperProps={{
                  modifiers: {
                    offset: {
                      enabled: true,
                      offset: "0px, -10px",
                    },
                  },
                }}
                title="Resume"
              >
                <a href={resume} target="_blank" rel="noreferrer">
                  <RiPagesLine id="ResumeForm" size="70px" />
                </a>
              </MaterialToolTip>
              <MaterialToolTip
                arrow
                interactive
                PopperProps={{
                  modifiers: {
                    offset: {
                      enabled: true,
                      offset: "0px, -10px",
                    },
                  },
                }}
                title="Github"
              >
                <a
                  href="https://github.com/Samyakk123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub id="GithubForm" size="70px" />
                </a>
              </MaterialToolTip>
              <MaterialToolTip
                arrow
                interactive
                PopperProps={{
                  modifiers: {
                    offset: {
                      enabled: true,
                      offset: "0px, -10px",
                    },
                  },
                }}
                title="Linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/samyak-mehta2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImLinkedin2 id="linkedinForm" size="70px" />
                </a>
              </MaterialToolTip>
              <MaterialToolTip
                arrow
                interactive
                PopperProps={{
                  modifiers: {
                    offset: {
                      enabled: true,
                      offset: "0px, -10px",
                    },
                  },
                }}
                title="Mail"
              >
                <a
                  href="mailto:samyak.mehta@mail.utoronto.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail id="mailForm" size="80px" />
                </a>
              </MaterialToolTip>
            </div>
          </div>

          <div className="projects" id="proj">
            <div className="title" id="sub">
              PROJECTS
            </div>

            {this.temp.map((eachData) => {
              return <Card sendingData={eachData}></Card>;
            })}
          </div>

          <div className="experiences" id="experience">
            <div className="title" id="sub">
              EXPERIENCE
            </div>

            {this.temp2.map((eachData) => {
              return <Card sendingData={eachData}></Card>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
