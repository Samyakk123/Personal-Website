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

class Card extends Component {
  render() {
    // let iconObj = {
    //   git: FaGithub,
    //   python: DiPython,
    //   terminal: FaTerminal,
    //   gamepad: GiGamepadCross,
    //   pageLine: RiPagesLine,
    //   webplatform: DiWebplatform,
    //   exe: exeFile,
    //   link: websiteLink,
    //   spotify: spotify,
    //   connect4: connect4Game,
    // };

    function external(input) {
      if (input) {
        return decider(input);
      }
    }

    function decider(input) {
      if (input === "git") {
        return <FaGithub size="50px" color="#892711" alt="gitIcon" />;
      }
      if (input === "python") {
        return <DiPython size="80px" color="yellow" />;
      }
      if (input === "terminal") {
        return <FaTerminal size="70px" color="white" />;
      }
      if (input === "gamepad") {
        return <GiGamepadCross size="90px" color="#892711" />;
      }
      if (input === "pageLine") {
        return <RiPagesLine size="70px" color="grey" />;
      }
      if (input === "webplatform") {
        return <DiWebplatform size="100px" color="green" />;
      }
      if (input === "exe") {
        return (
          <a href={connect4Game}>
            <img src={exeFile} width="50px" height="50px" alt="exeFile" />
          </a>
        );
      }

      if (input === "link") {
        return (
          <a
            href="https://uimpactify.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={websiteLink} width="50px" height="50px" alt="exeFile" />
          </a>
        );
      }
      if (input === "spotify") {
        return <img src={spotify} width="60px" height="60px" alt="spotify" />;
      }
      if (input === "connect4") {
        return (
          <a href={connect4Game}>
            <img src={exeFile} width="50px" height="50px" alt="exeFile" />
          </a>
        );
      }
    }

    return (
      <div>
        <div className="miniSections" id="miniTitle">
          <div className="projectPicCombo">
            {decider(this.props.sendingData.img)}
            <h4 className="text4" id="heading">
              {this.props.sendingData.title}
            </h4>
            <div className="imagesHolder">
              <a
                href={this.props.sendingData.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size="50px" color="#892711" alt="gitIcon" />
              </a>

              {external(this.props.sendingData.external)}
            </div>
          </div>

          <div className="descriptionAndSkills">
            <ul className="textProject text2">
              {this.props.sendingData.description.map((desc) => {
                return <li className="addPadding">{desc}</li>;
              })}
            </ul>

            <div className="skillSet">
              <h3 className="text3" id="heading2">
                tools
              </h3>
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
