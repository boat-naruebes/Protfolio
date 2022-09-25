import React from "react";
import MovingText from "react-moving-text";
import { useState } from "react";
import { useEffect } from "react";
const Resume = () => {
  const [check, update] = useState(true);
  const image = [
    // "bootstrap.png",
    "Github.png",
    "html.png",
    "js.png",
    "ps.png",
    "react.png",
    "xd.png",
    "sass.png",
    "css.png",
    "firebase.png",
    "unity.png",
  ];
  useEffect(() => {
    const getimg = document.querySelectorAll(".visible");
    let i = 0;
    function myLoop() {
      setTimeout(() => {
        const effect = `                      
<div type="fadeIn" class="sc-bwzfXH kEvetV">
              <img
                className="imgskill"
                src="../img/skill/${image[i]}"
                alt=""
              />
</div>
`;
        getimg[i].innerHTML = effect;
        i++;
        if (i <= image.length) {
          myLoop();
        }
      }, 800);
      // window.addEventListener("scroll", (event) => {
      //   const displayresume = document.getElementById("resumepage");
      //   const displaydata = document.getElementById("resume-effect");

      //   if (window.scrollY >= 1001 && window.scrollY <= 1635) {
      //     update("fadeInFromBottom");
      //     displaydata.style.opacity = "100%";
      //     displayresume.style.color = "blue";
      //   } else {
      //     displayresume.style.color = "rgb(213, 224, 228)";
      //     displaydata.style.opacity = "0%";
      //     update("");
      //   }
      // });
    }

    myLoop();
  }, []);

  console.log(window.scrollY);

  const Showimg = () => {
    if (check) {
      return (
        <section>
          <div className="skill" id="test">
            <MovingText type="fadeIn" duration="2500ms" iteration="1">
              <img
                className="imgskill"
                src="../img/skill/bootstrap.png"
                alt=""
              />
            </MovingText>

            {/* <div className="visible"></div> */}
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
            <div className="visible"></div>
          </div>
        </section>
      );
    }
  };

  return (
    <div className="Resume">
      <div className="container" id="resume-effect">
        <MovingText type={check} id="name" duration="1300ms" iteration="1">
          <h2>Resume</h2>
          <div className="Container-data">
            <section className=" exp">
              <h3>EXPERIENCE</h3>
              <ul>
                <li className="time">
                  <h4>IT KMITL Open House 2018</h4>
                </li>
                <li>
                  <h5>staff to describe Course IT KMITL</h5>
                </li>
                <li className="time">
                  <h4>IT KMITL Open House 2019</h4>
                </li>
                <li>
                  <h5>staff to Course guidance IT KMITL</h5>
                  <h5>staff to describe Course IT KMITL</h5>
                </li>
                <li className="time">
                  <h4>ICITEE 2022</h4>
                </li>
                <li>
                  <h5>
                    Protobot: An Educational Game for Algorithmic Thinking
                  </h5>
                </li>
              </ul>
            </section>

            <section className="edu">
              <h3>EDUCATION</h3>
              <ul>
                <li className="time">
                  <h4>2006-2011: Primary School</h4>
                </li>

                <li>
                  <h5>Anubanchonburi School</h5>
                </li>

                <li className="time">
                  <h4>2012-2017: Secondary</h4>
                </li>

                <li>
                  <h5>Chonradsadornumrung School</h5>
                </li>

                <li className="time">
                  <h4>2018-2022: Bachelor's Degree</h4>
                </li>

                <li>
                  <h5>
                    King Mongkut's Institute of Technology Ladkrabang
                    <br /> School of Information Technology
                  </h5>
                </li>
              </ul>
            </section>
            <Showimg />
          </div>
        </MovingText>
      </div>
    </div>
  );
};
export default Resume;
