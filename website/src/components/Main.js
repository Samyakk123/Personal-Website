import React, { Component } from "react";
import "./Main.css";
import Header from "./Header";
import UofTlogo from "../images/Utoronto_coa.svg.png";
import connect4 from "../images/GamePage.png";
import gitIcon from "../images/gitIcon.svg";
import exeFile from "../images/exe.svg";
import websiteLink from "../images/globe-grid.svg";
import uImpactify from "../images/UImpactify.PNG";
import spotify from "../images/spotify.svg";

import { FaGithub, FaTerminal } from "react-icons/fa";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="centrePiece">
          <div className="introduction">
            <div className="text" id="sub">
              Welcome!
            </div>

            <div className="format">
              <para className="normalText text">
                <para>I am a second year Computer Science Student at the</para>

                <para className="special"> University of Toronto</para>

                <para className="normalText text">
                  , pursuing a specialist in Software Engineering with a major
                  in Statistics!
                </para>
              </para>
              <img src={UofTlogo} width="250px" height="225px" alt="UofTlogo" />
            </div>
          </div>

          <div className="projects">
            <div className="title" id="sub">
              Projects!
            </div>
            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <h3 className="header" id="heading">
                  U-Impactify
                </h3>
                <img
                  src={uImpactify}
                  width="200px"
                  height="175px"
                  alt="UImpactify"
                />
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>
                    Worked in a group of 7 to develop an online elearning
                    platform
                  </li>
                  <li>
                    Used version control with daily scrum meetings and the agile
                    development process alongside tools like Jira and Git
                  </li>
                  <li>
                    Supports the creation and deletion of courses, assessments,
                    uploading files, searching for employment, etc.
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading">
                    skills
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

                <div className="imagesHolder">
                  <a
                    href="https://github.com/Samyakk123/U-Impactify"
                    target="_blank"
                  >
                    <FaGithub size="100px" color="#892711" alt="gitIcon" />
                  </a>
                  <a href="https://uimpactify.herokuapp.com/" target="_blank">
                    <img
                      src={websiteLink}
                      width="90px"
                      height="90px"
                      alt="exeFile"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* 
            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <h3 className="text2" id="heading">
                  Connect 4
                </h3>
                <img
                  src={connect4}
                  width="200px"
                  height="175px"
                  alt="UofTlogo"
                />
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Player vs player and player vs AI compatibility</li>
                  <li>
                    Uses minimax algorithm with alpha beta pruning to determine
                    ideal moves
                  </li>
                  <li>
                    Various difficulties to accomodate for all different types
                    of players
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading">
                    skills
                  </h3>
                  <div className="skillHolder">
                    <span className="skillBox">Java Swing</span>
                    <span className="skillBox">WindowBuilder</span>
                    <span className="skillBox">GUI</span>
                    <span className="skillBox">Component events</span>
                  </div>
                </div>

                <div className="imagesHolder">
                  <FaGithub size="100px" color="#892711" alt="gitIcon" />
                  <img src={exeFile} width="90px" height="90px" alt="exeFile" />
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <h4 className="text2" id="heading">
                  Spotify API clone
                </h4>
                <img src={spotify} width="200px" height="150px" alt="spotify" />
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Player vs player and player vs AI compatibility</li>
                  <li>
                    Uses minimax algorithm with alpha beta pruning to determine
                    ideal moves
                  </li>
                  <li>
                    Various difficulties to accomodate for all different types
                    of players
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading">
                    skills
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Java Swing</div>
                    <div className="skillBox">WindowBuilder</div>
                    <div className="skillBox">GUI</div>
                    <div className="skillBox">Component events</div>
                  </div>
                </div>

                <FaGithub size="100px" color="#892711" alt="gitIcon" />
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <h4 className="text2" id="heading">
                  Website Portfolio
                </h4>

                <img
                  src={websiteLink}
                  width="200px"
                  height="150px"
                  alt="websiteLink"
                />
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Player vs player and player vs AI compatibility</li>
                  <li>
                    Uses minimax algorithm with alpha beta pruning to determine
                    ideal moves
                  </li>
                  <li>
                    Various difficulties to accomodate for all different types
                    of players
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading">
                    skills
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Java Swing</div>
                    <div className="skillBox">WindowBuilder</div>
                    <div className="skillBox">GUI</div>
                    <div className="skillBox">Component events</div>
                  </div>
                </div>

                <FaGithub size="100px" color="#892711" alt="gitIcon" />
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <h4 className="text2" id="heading">
                  Mock Linux Shell
                </h4>
                <FaTerminal size="200px" color="white" />
              </div>
              <div className="descriptionAndSkills">
                <ul className="textProject text2">
                  <li>Player vs player and player vs AI compatibility</li>
                  <li>
                    Uses minimax algorithm with alpha beta pruning to determine
                    ideal moves
                  </li>
                  <li>
                    Various difficulties to accomodate for all different types
                    of players
                  </li>
                </ul>

                <div className="skillSet">
                  <h3 className="text3" id="heading">
                    skills
                  </h3>
                  <div className="skillHolder">
                    <div className="skillBox">Java Swing</div>
                    <div className="skillBox">WindowBuilder</div>
                    <div className="skillBox">GUI</div>
                    <div className="skillBox">Component events</div>
                  </div>
                </div>

                <FaGithub size="100px" color="#892711" alt="gitIcon" />
              </div>
            </div> */}
          </div>

          <div className="title" id="sub">
            Experience
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
