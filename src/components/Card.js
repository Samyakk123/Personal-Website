import React, { Component } from "react";
import websiteLink from "../images/globe-grid.svg";
import { FaGithub, FaTerminal } from "react-icons/fa";
import "./Card.css";

import exeFile from "../images/exe.svg";
import spotify from "../images/spotify.svg";
import connect4Game from "../images/ConnectFour.exe";
import { DiWebplatform, DiPython } from "react-icons/di";
import { GiGamepadCross } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";

// import ReactHtmlParser, {
//   processNodes,
//   convertNodeToElement,
//   htmlparser2,
// } from "react-html-parser";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="miniSections" id="miniTitle">
          <div className="projectPicCombo">
            <div>{this.props.sendingData.img}</div>
            {/* {decider(this.props.sendingData.img)} */}
            <h4 className="specialCase text4" id="heading">
              {this.props.sendingData.title}
              {this.props.sendingData.subtitle ?? ""}
            </h4>

            <div className="imagesHolder">
              {this.props.sendingData.github ? (
                <a
                  href={this.props.sendingData.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size="50px" color="#892711" alt="gitIcon" />
                </a>
              ) : (
                ""
              )}

              {this.props.sendingData.external}
            </div>
          </div>

          <div className="descriptionAndSkills">
            <ul className="textProject text2">
              {this.props.sendingData.description.map((desc) => {
                return <li className="addPadding">{desc}</li>;
              })}
            </ul>
            {this.props.sendingData.link ?? ""}

            <div className="skillSet">
              <div className="skillHolder">
                {this.props.sendingData.tools.map((skill) => {
                  return <div className="skillBox">{skill}</div>;
                })}
                {/* <div className="skillBox">Html</div>
                <div className="skillBox">CSS</div>
                <div className="skillBox">JavaScript</div>
                <div className="skillBox">Web components</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
