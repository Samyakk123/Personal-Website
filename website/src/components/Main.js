import React, { Component } from "react";
import "./Main.css";
import Header from "./Header";
import UofTlogo from "../images/Utoronto_coa.svg.png";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="centrePiece">
          <div className="introduction">
            <div className="text" id="sub">
              Welcome to my website!
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
              <img
                className="image"
                src={UofTlogo}
                width="250px"
                height="225px"
                alt="UofTlogo"
              />
            </div>
          </div>

          <div className="text">Hello</div>
          <div className="text">Hello again</div>
        </div>
      </div>
    );
  }
}

export default Main;
