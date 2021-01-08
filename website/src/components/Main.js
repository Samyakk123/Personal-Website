import React, { Component } from "react";
import "./Main.css";
import UofTlogo from "../images/Utoronto_coa.svg.png";

import exeFile from "../images/exe.svg";
import websiteLink from "../images/globe-grid.svg";
import spotify from "../images/spotify.svg";
import connect4Game from "../images/ConnectFour.exe";

import resume from "../images/Resume_Samyak.pdf";

import { FaGithub, FaTerminal } from "react-icons/fa";
import { DiWebplatform, DiPython } from "react-icons/di";
import { GiGamepadCross } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

import MaterialToolTip from "@material-ui/core/Tooltip";

import Particles from "react-particles-js";

import config from "../images/Particles.json";

class Main extends Component {
  render() {
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
            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <DiWebplatform size="100px" color="green" />
                <h3 className="text4" id="heading">
                  U-Impactify
                </h3>

                <div className="imagesHolder">
                  <a
                    href="https://github.com/Samyakk123/U-Impactify"
                    target="__blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="50px" color="#892711" alt="gitIcon" />
                  </a>
                  <a
                    href="https://uimpactify.herokuapp.com/"
                    target="__blank"
                    rel="noreferrer"
                  >
                    <img
                      src={websiteLink}
                      width="50px"
                      height="50px"
                      alt="exeFile"
                    />
                  </a>
                </div>
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>
                    Worked in a group of 7 to develop an online elearning
                    platform
                  </li>
                  <li className="addPadding">
                    Used version control with daily scrum meetings and the agile
                    development process alongside tools like Jira and Git
                  </li>
                  <li className="addPadding">
                    Supports the creation and deletion of courses, assessments,
                    uploading files, searching for employment, etc.
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading2">
                    tools
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Angular</div>
                    <div className="skillBox">MongoDb</div>
                    <div className="skillBox">Socket.io</div>
                    <div className="skillBox">Node</div>
                    <div className="skillBox">Agile</div>
                    <div className="skillBox">Chart.js</div>
                    <div className="skillBox">GridFS</div>
                    <div className="skillBox">Clarity</div>
                    <div className="skillBox">Figma</div>
                    <div className="skillBox">Jira</div>
                    <div className="skillBox">ngx-file-drop</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <GiGamepadCross size="90px" color="#892711" />
                <h3 className="text4" id="heading">
                  Connect 4
                </h3>

                <div className="imagesHolder">
                  <a
                    href="https://github.com/Samyakk123/Connect-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="50px" color="#892711" alt="gitIcon" />
                  </a>

                  <a href={connect4Game}>
                    <img
                      src={exeFile}
                      width="50px"
                      height="50px"
                      alt="exeFile"
                    />
                  </a>
                </div>
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Player vs player and player vs AI compatibility</li>
                  <li className="addPadding">
                    Uses minimax algorithm with alpha beta pruning to determine
                    ideal moves
                  </li>
                  <li className="addPadding">
                    Various difficulties to accomodate for all different types
                    of players
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading2">
                    tools
                  </h3>
                  <div className="skillHolder">
                    <span className="skillBox">Java Swing</span>
                    <span className="skillBox">WindowBuilder</span>
                    <span className="skillBox">GUI</span>
                    <span className="skillBox">Component events</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <img src={spotify} width="60px" height="60px" alt="spotify" />
                <h4 className="text4" id="heading">
                  Spotify API clone
                </h4>

                <div className="imagesHolder">
                  <a
                    href="https://github.com/Samyakk123/Spotify-API"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="50px" color="#892711" alt="gitIcon" />
                  </a>
                </div>
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Able to upload and 'favourite' various songs</li>
                  <li className="addPadding">
                    Follow and unfollow other user profiles
                  </li>
                  <li className="addPadding">
                    Make your own playlist and query songs based on followers
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading2">
                    tools
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Java</div>
                    <div className="skillBox">Spring Boot</div>
                    <div className="skillBox">MongoDb</div>
                    <div className="skillBox">Neo4j</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <img
                  src={websiteLink}
                  width="60px"
                  height="60px"
                  alt="websiteLink"
                />
                <h4 className="text4" id="heading">
                  Website Portfolio
                </h4>
                <div className="imagesHolder">
                  <a
                    href="https://github.com/Samyakk123/Personal-Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="50px" color="#892711" alt="gitIcon" />
                  </a>
                </div>
              </div>

              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Created using react, a frontend framework</li>
                  <li className="addPadding">UPDATE LATER</li>
                  <li className="addPadding">UPDATE LATER</li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading2">
                    tools
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Html</div>
                    <div className="skillBox">CSS</div>
                    <div className="skillBox">JavaScript</div>
                    <div className="skillBox">Web components</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <FaTerminal size="70px" color="white" />

                <h4 className="text4" id="heading">
                  Mock Linux Shell
                </h4>

                <div className="imagesHolder">
                  <a
                    href="https://github.com/Samyakk123/Mock-Linux-Shell"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="50px" color="#892711" alt="gitIcon" />
                  </a>
                </div>
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>
                    In a group of three, created a mock fileSystem to micmic the
                    functionality of the Linux Shell
                  </li>
                  <li className="addPadding">
                    Followed Agile methodologies alongside various software
                    design patterns
                  </li>
                  <li className="addPadding">
                    Held daily scrum meetings to ensure productive workflow
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading2">
                    tools
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Java Swing</div>
                    <div className="skillBox">WindowBuilder</div>
                    <div className="skillBox">GUI</div>
                    <div className="skillBox">Component events</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <DiPython size="70px" color="yellow" />

                <h4 className="text4" id="heading">
                  Goblin Fighter
                </h4>

                <div className="imagesHolder">
                  <a
                    href="https://github.com/Samyakk123/Mock-Linux-Shell"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="50px" color="#892711" alt="gitIcon" />
                  </a>
                </div>
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Player vs player and player vs AI compatibility</li>
                  <li className="addPadding">
                    Uses minimax algorithm with alpha beta pruning to determine
                    ideal moves
                  </li>
                  <li className="addPadding">
                    Various difficulties to accomodate for all different types
                    of players
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading2">
                    tools
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Python</div>
                    <div className="skillBox">Pycharm</div>
                    <div className="skillBox">GUI</div>
                    <div className="skillBox">Component events</div>
                    <div className="skillBox">Mouse events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Experience title" id="sub">
            Experience
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
