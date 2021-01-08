import React, { Component } from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";

function header() {
  return (
    <>
      <div className="box">
        {/* <img class="test" width="750px" height="150px" src={textToAdd} alt="" /> */}
        <div id="title">Samyak Mehta</div>

        <div id="subtitles">
          <div id="subtitle">ABOUT ME</div>
          <div id="subtitle">PROJECTS</div>
          <div id="subtitle">EXPERIENCE</div>
        </div>
      </div>
    </>
  );
}

export default header;
