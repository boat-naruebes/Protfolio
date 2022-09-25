import React, { createElement } from "react";
import ReactTyped from "react-typed";
import MovingText from "react-moving-text";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [check, update] = useState("fadeInFromRight");
  const [rest, updatetest] = useState(35);
  window.addEventListener("scroll", (event) => {
    const displayabout = document.getElementById("aboutpage");
    const displaydata = document.getElementById("home-effect");
    console.log(window.scrollY);
    if (window.scrollY <= 399) {
      displaydata.style.opacity = "100%";
      update("fadeInFromRight");
      updatetest(35);
    } else {
      displaydata.style.opacity = "0%";
      update("");
      updatetest("");
    }
  });
  return (
    <div className="Home">
      <div className="data-profile">
        <MovingText type="fadeIn" duration="5000ms" iteration="1">
          <img src="../img/Profile.png" alt="" />
        </MovingText>
        <div className="Title" id="home-effect">
          <h1>
            <MovingText type={check} id="name" duration="2000ms" iteration="1">
              NARUEBES <br />
              LUEANGRUNGUDOM
            </MovingText>
          </h1>

          <h2>
            <ReactTyped
              strings={["Hello ! I'm Frontend Developer"]}
              typeSpeed={rest}
              // backSpeed={40}
              startDelay={2000}
              // loop={true}
            ></ReactTyped>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Home;
