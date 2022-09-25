import React from "react";
import MovingText from "react-moving-text";
import { useState } from "react";
const About = () => {
  const [check, update] = useState("fadeInFromBottom");
  // window.addEventListener("scroll", (event) => {
  //   const displayabout = document.getElementById("aboutpage");
  //   const displaydata = document.getElementById("about-effect");
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 400 && window.scrollY <= 1000) {
  //     displayabout.style.color = "blue";
  //     update("fadeInFromBottom");
  //     displaydata.style.opacity = "100%";
  //   } else {
  //     displayabout.style.color = "rgb(213, 224, 228)";
  //     displaydata.style.opacity = "0%";
  //     update("");
  //   }
  // });

  return (
    <div className="About" id="about">
      <MovingText type={check} id="name" duration="1350ms" iteration="1">
        <div className="container" id="about-effect">
          <section className="aboutme">
            <h2>About ME</h2>
            <p>
              Hello, My name is Naruebes Lueangrungudom. You can call me Boat. I
              am graduated from School of Information Technology at the King
              Mongkut's Instituteof Technology Ladkrabang, Bangkok, Thailand.
            </p>
          </section>
          <section className="img-profile">
            <img src="../img/Profile-art.png" alt="" />
          </section>

          <section className="information">
            <ul>
              <li>
                <span className="title">FirstName : </span>
                <span className="value">Naruebes</span>
              </li>
              <li>
                <span className="title">LastName : </span>
                <span className="value">Lueangrungudom</span>
              </li>
              <li>
                <span className="title">NickName : </span>
                <span className="value">Boat</span>
              </li>
              <li>
                <span className="title">Age : </span>
                <span className="value">22</span>
              </li>
              <li>
                <span className="title">Email : </span>
                <span className="value">boat-naruebes@outlook.com</span>
              </li>
              <li>
                <span className="title">Phone : </span>
                <span className="value">093-576-6977</span>
              </li>
              <li>
                <span className="title">Gender : </span>
                <span className="value">Male</span>
              </li>
              <li>
                <span className="title">Country of birth : </span>
                <span className="value">Thailand</span>
              </li>
              <li>
                <span className="title">Relihion : </span>
                <span className="value">Buddhism</span>
              </li>
              <li>
                <span className="title">Quotes : </span>
                <span className="value">
                  "Success is the sum of small efforts, epeated day in" (Robert
                  Collier)
                </span>
              </li>
            </ul>
          </section>
        </div>
      </MovingText>
    </div>
  );
};
export default About;
