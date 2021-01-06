import React, { Component } from "react";
import "./Main.css";
import Header from "./Header";
import UofTlogo from "../images/Utoronto_coa.svg.png";
import connect4 from "../images/GamePage.png";
import gitIcon from "../images/gitIcon.svg";
import exeFile from "../images/exe.svg";
import websiteLink from "../images/globe-grid.svg";

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
                <h3 className="text2" id="heading">
                  U-Impactify
                </h3>
                <img
                  src={connect4}
                  width="200px"
                  height="150px"
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
                    <div className="skillBox">Java Swing</div>
                    <div className="skillBox">WindowBuilder</div>
                    <div className="skillBox">GUI</div>
                    <div className="skillBox">Component events</div>
                  </div>
                </div>

                <div className="imagesHolder">
                  <img
                    src={gitIcon}
                    width="100px"
                    height="100px"
                    alt="gitIcon"
                  />
                  <img
                    src={websiteLink}
                    width="90px"
                    height="90px"
                    alt="exeFile"
                  />
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <h3 className="text2" id="heading">
                  Connect 4
                </h3>
                <img
                  src={connect4}
                  width="200px"
                  height="150px"
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
                  <img
                    src={gitIcon}
                    width="100px"
                    height="100px"
                    alt="gitIcon"
                  />
                  <img src={exeFile} width="90px" height="90px" alt="exeFile" />
                </div>
              </div>
            </div>

            <div className="miniSections" id="miniTitle">
              <div className="projectPicCombo">
                <h5 className="text2" id="heading">
                  Mock Linux Shell
                </h5>
                <img
                  src={connect4}
                  width="200px"
                  height="150px"
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
                    <div className="skillBox">Java Swing</div>
                    <div className="skillBox">WindowBuilder</div>
                    <div className="skillBox">GUI</div>
                    <div className="skillBox">Component events</div>
                  </div>
                </div>
              </div>
            </div>
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
