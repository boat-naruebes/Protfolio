import React from "react";
import { useState } from "react";
import MovingText from "react-moving-text";
const Contact = () => {
  const [check, update] = useState(true);
  // window.addEventListener("scroll", (event) => {
  //   const displaycontact = document.getElementById("contactpage");
  //   const displaydata = document.getElementById("contact-effect");

  //   if (window.scrollY >= 2280) {
  //     update("fadeIn");
  //     displaydata.style.opacity = "100%";
  //     displaycontact.style.color = "blue";
  //   } else {
  //     displaycontact.style.color = "rgb(213, 224, 228)";
  //     displaydata.style.opacity = "0%";
  //     update("");
  //   }
  // });
  return (
    <div>
      <div className="Contact">
        <MovingText type={check} id="name" duration="2000ms" iteration="1">
          <div id="contact-effect">
            <h2>Contact</h2>
            <div className="container">
              <form
                action="mailto:boatmantem@hotmail.co.th"
                method="post"
                enctype="text/plain"
              >
                <span className="name">
                  <label>Name: </label>
                  <input type="text" />
                </span>
                <span className="email">
                  <label> Emal: </label>
                  <input type="text" />
                </span>
                <span className="message">
                  <label> Mesage: </label>
                  <input type="text" placeholder="Message" />
                </span>
                <button>Contact</button>
              </form>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8398531005596!2d100.99272931413898!3d13.360232209847686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d35fba0d81e8b%3A0x74023b933e51a8e6!2z4LiV4Liy4LiE4Liy4Lij4LmM4LmB4LiE4Lij4LmM!5e0!3m2!1sth!2sth!4v1663257552210!5m2!1sth!2sth"></iframe>
            </div>

            <footer>
              <ul>
                <li>
                  <a id="homepage" href="#home-page">
                    <img src="../img/contact/phone.png" alt="" />
                  </a>
                </li>

                <li>
                  <h4>093-576-6977</h4>
                </li>

                <li>
                  <a id="aboutpage" href="#about-page">
                    <img src="../img/contact/mail.png" alt="" />
                  </a>
                </li>
                <li>
                  <h4>boat-naruebes@outlook.com</h4>
                </li>

                <li>
                  <a id="portpage" href="#portfolio-page">
                    <img src="../img/contact/line.png" alt="" />
                  </a>
                </li>
                <li>
                  <h4>iD: 093-576-6977</h4>
                </li>
                <li>
                  <a id="portpage" href="#portfolio-page">
                    <img src="../img/contact/face.png" alt="" />
                  </a>
                </li>
                <li>
                  <h4>Naruebes Lueangrungudom </h4>
                </li>
                <li>
                  <a id="resumepage" href="#resume-page">
                    <img src="../img/contact/git.png" alt="" />
                  </a>
                </li>
                <li>
                  <h4>boat-naruebes</h4>
                </li>
                <li>
                  <a id="contactpage" href="#contact">
                    <img
                      className="imglinkin"
                      src="../img/contact/linkin.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <h4>Naruebes Lueangrungudom </h4>
                </li>
              </ul>
            </footer>
          </div>
        </MovingText>
      </div>
    </div>
  );
};
export default Contact;
