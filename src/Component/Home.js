import React, { createElement } from "react";
import ReactTyped from "react-typed";
import MovingText from "react-moving-text";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  return (
    <div className="Home">
      <div className="data-profile">
        <MovingText type="fadeIn" duration="5000ms" iteration="1">
          <img src="../img/Profile.png" alt="" />
        </MovingText>
        <div className="Title">
          <h1>
            <MovingText
              type="fadeInFromRight"
              id="name"
              duration="2000ms"
              iteration="1"
            >
              NARUEBES <br />
              LUEANGRUNGUDOM
            </MovingText>
          </h1>

          <h2>
            <ReactTyped
              strings={["Hello ! I'm Frontend Developer"]}
              typeSpeed={40}
              backSpeed={40}
              startDelay={2000}
            ></ReactTyped>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Home;
