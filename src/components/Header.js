import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

function header() {
  return (
    <>
      <div className="box">
        {/* <img class="test" width="750px" height="150px" src={textToAdd} alt="" /> */}
        <div id="title">Samyak Mehta</div>

        <div id="subtitles">
          <Link
            id="subtitle"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            ABOUT ME
          </Link>
          <Link
            id="subtitle"
            activeClass="active"
            to="proj"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link
            Link
            id="subtitle"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            EXPERIENCE
          </Link>
        </div>
      </div>
    </>
  );
}

export default header;
