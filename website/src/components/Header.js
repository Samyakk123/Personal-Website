import React, { Component } from "react";
import "./Header.css";
import textToAdd from "../images/coollogo_com-22784901.png";

function header() {
  return (
    <>
      <div className="box">
        <img class="test" width="750px" height="150px" src={textToAdd} alt="" />
        {/* <div id="title">Samyak Mehta</div> */}

        <div id="subtitles">
          <div id="subtitle">RESUME</div>
          <div id="subtitle">ABOUT ME</div>
          <div id="subtitle">PROJECTS</div>
          <div id="subtitle">CONTACT ME</div>
        </div>
      </div>
    </>
  );
}

export default header;
