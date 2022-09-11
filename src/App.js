import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import About from "./Component/About";
import Resume from "./Component/Resume";
import Contact from "./Component/Contact";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [page, updatepage] = useState("");

  useEffect(() => {
    // window.addEventListener("mousemove", (e) => {
    //   const
    // });
    const displayhome = document.getElementById("homepage");
    const displayabout = document.getElementById("aboutpage");
    const displayresume = document.getElementById("resumepage");
    const displayport = document.getElementById("portpage");
    const displaycontact = document.getElementById("contactpage");
    window.addEventListener("scroll", (event) => {
      console.log(window.scrollY);
      const About = () => {
        if (window.scrollY >= 534 && window.scrollY <= 1130) {
          displayabout.style.color = "blue";
        } else {
          displayabout.style.color = "rgb(213, 224, 228)";
        }
      };
      const Resume = () => {
        if (window.scrollY >= 1130 && window.scrollY <= 1750) {
          displayresume.style.color = "blue";
        } else {
          displayresume.style.color = "rgb(213, 224, 228)";
        }
      };
      const Port = () => {
        if (window.scrollY >= 1750 && window.scrollY <= 2980) {
          displayport.style.color = "blue";
        } else {
          displayport.style.color = "rgb(213, 224, 228)";
        }
      };
      const Contact = () => {
        if (window.scrollY >= 2980) {
          displaycontact.style.color = "blue";
        } else {
          displaycontact.style.color = "rgb(213, 224, 228)";
        }
      };
      About();
      Resume();
      Port();
      Contact();
    });
  }, []);

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
