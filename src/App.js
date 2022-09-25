import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import About from "./Component/About";
import Resume from "./Component/Resume";
import Contact from "./Component/Contact";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a id="homepage" href="#home-page">
              Home
            </a>
          </li>
          <li>
            <a id="aboutpage" href="#about-page">
              About
            </a>
          </li>
          <li>
            <a id="resumepage" href="#resume-page">
              resume
            </a>
          </li>
          <li>
            <a id="portpage" href="#portfolio-page">
              protfolio
            </a>
          </li>
          <li>
            <a id="contactpage" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </nav>

      <div id="home-page">
        <Home />
      </div>
      <div id="about-page">
        <About />
      </div>
      <div id="resume-page">
        <Resume />
      </div>
      <div id="portfolio-page">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
