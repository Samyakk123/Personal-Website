import React, { Component } from "react";
import "./Main.css";
import UofTlogo from "../images/Utoronto_coa.svg.png";

import resume from "../images/Resume_Samyak.pdf";
import Card from "../components/Card";

import { FaGithub } from "react-icons/fa";

import { RiPagesLine } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

import MaterialToolTip from "@material-ui/core/Tooltip";

import PostData from "../images/cardInfoProjects.json";

import Particles from "react-particles-js";

import config from "../images/Particles.json";

class Main extends Component {
  render() {
    this.temp = PostData.projects;
    this.temp2 = PostData.experiences;

    return (
      <div>
        <Particles className="particles" params={config} />
        <div className="centrePiece">
          <div className="introduction">
            <div className="text" id="sub">
              Welcome!
            </div>

            <div className="format">
              <div className="flipper">
                <div>
                  <para className="normalText">
                    I am a second year Computer Science Student at the
                    <para className="special"> University of Toronto</para>,
                    pursuing a specialist in Software Engineering with a major
                    in Statistics!
                  </para>
                </div>
                <div className="normalText">
                  Cgpa:
                  <strong style={{ color: "red" }}> 3.73 </strong>
                  [4.0 scale]
                </div>
              </div>
              <img src={UofTlogo} width="250px" height="225px" alt="UofTlogo" />
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
                  <RiPagesLine size="70px" color="grey" />
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
                  <FaGithub size="70px" color="orange" />
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
                  <ImLinkedin2 size="70px" color="lightblue" />
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
                  <AiOutlineMail size="70px" color="blue" />
                </a>
              </MaterialToolTip>
            </div>
          </div>

          <div className="projects">
            <div className="title" id="sub">
              Projects!
            </div>

            {this.temp.map((eachData) => {
              return <Card sendingData={eachData}></Card>;
            })}
          </div>

          <div className="experiences">
            <div className="title" id="sub">
              Experience
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
