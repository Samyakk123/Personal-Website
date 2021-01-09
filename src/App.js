import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import Header from "./components/Header";
import Main from "./components/Main";
import config from "./images/Particles.json";
function App() {
  return (
    <div>
      <Particles className="particles" params={config} />
      <Header />
      <Main />
    </div>
  );
}

export default App;
