import React from "react";
import ImageGallery from "react-image-gallery";
import Popup from "reactjs-popup";
import { useEffect } from "react";
import { useState } from "react";
import MovingText from "react-moving-text";
const Portfolio = () => {
  const imgpokemon = [
    {
      original: "../img/Pokemon-search/img1.PNG ",
    },
    {
      original: "../img/Pokemon-search/img2.PNG",
    },
    {
      original: "../img/Pokemon-search/img3.png",
    },
  ];
  const imgbangkok = [
    {
      original: "../img/Bangkokian-journey/img1.PNG",
    },
    {
      original: "../img/Bangkokian-journey/img2.PNG",
    },
    {
      original: "../img/Bangkokian-journey/img3.png",
    },
  ];
  const imgmai = [
    {
      original: "../img/Mai-Mai/img1.PNG",
    },
    {
      original: "../img/Mai-Mai/img2.PNG",
    },
    {
      original: "../img/Mai-Mai/img3.png",
    },
  ];
  const imgsevenwonder = [
    {
      original: "../img/7Wonder/img1.PNG",
    },
    {
      original: "../img/7Wonder/img2.PNG",
    },
    {
      original: "../img/7Wonder/img3.png",
    },
  ];
  const imgprotobot = [
    {
      original: "../img/Protobot/img1.PNG",
    },
    {
      original: "../img/Protobot/img2.PNG",
    },
    {
      original: "../img/Protobot/img3.png",
    },
  ];
  const [check, update] = useState("");

  useEffect(() => {
    const listbox = document.querySelectorAll(".container-in");

    listbox.forEach((item) => {
      console.log(item);
      item.addEventListener("mouseover", (event) => {
        item.style.border = "3px blue solid";
      });
      item.addEventListener("mouseout", (event) => {
        item.style.border = "none";
      });
    });
  }, []);

  // window.addEventListener("scroll", (event) => {
  //   const displayport = document.getElementById("portpage");
  //   const displaydata = document.getElementById("port-effect");
  //   if (window.scrollY >= 1636 && window.scrollY <= 2279) {
  //     update("fadeInFromBottom");
  //     displaydata.style.opacity = "100%";
  //     displayport.style.color = "blue";
  //   } else {
  //     displayport.style.color = "rgb(213, 224, 228)";
  //     displaydata.style.opacity = "0%";
  //     update("");
  //   }
  // });
  return (
    <div className="Portfoloi">
      <MovingText type={check} id="name" duration="1350ms" iteration="1">
        <div className="container" id="port-effect">
          <h2>Portfoloi</h2>
          <div className="projectlist">
            <div className="container-in">
              <div className="img">
                <ImageGallery
                  items={imgpokemon}
                  showFullscreenButton={false}
                  // showPlayButton={false}
                  // autoPlay={true}
                  // showBullets={true}
                  showNav={false}
                  slideDuration={600}
                />
              </div>

              <p>
                this is website about search Pokemon it can show each pokemon
                information data whether it's name, Weight, Height, Type and
                Ability
                <h3>
                  <a
                    target="_blank"
                    href="https://pokemon-search-data.netlify.app"
                  >
                    ViewProject
                  </a>
                </h3>
                <div className="logoskill">
                  <img src="../img/skill/js.png" alt="" />
                  <img src="../img/skill/css.png" alt="" />
                  <img src="../img/skill/html.png" alt="" />
                  <img src="../img/skill/react.png" alt="" />
                </div>
              </p>
            </div>

            <div className="container-in">
              <div className="img">
                <ImageGallery
                  items={imgbangkok}
                  showFullscreenButton={false}
                  // showPlayButton={false}
                  // autoPlay={true}
                  // showBullets={true}
                  showNav={false}
                  slideDuration={600}
                />
              </div>

              <p>
                this is website about social depravity Public Transportation in
                bankok such as bus, BTS, MAT, boat, taxi, motorbike taxi
                <h3>
                  <a
                    target="_blank"
                    href="https://bangkokia-jouney.netlify.app"
                  >
                    ViewProject
                  </a>
                </h3>
                <div className="logoskill">
                  <img src="../img/skill/js.png" alt="" />
                  <img src="../img/skill/css.png" alt="" />
                  <img src="../img/skill/html.png" alt="" />
                  <img src="../img/skill/bootstrap.png" alt="" />
                </div>
              </p>
            </div>

            <div className="container-in">
              <div className="img">
                <ImageGallery
                  items={imgmai}
                  showFullscreenButton={false}
                  // showPlayButton={false}
                  // autoPlay={true}
                  // showBullets={true}
                  showNav={false}
                  slideDuration={600}
                />
              </div>

              <p>
                This is a website for the exchange of cryptocurrencies with a
                manual system. A user can create orders to sell or buy
                cryptocurrencies.
                <h3>
                  <a target="_blank" href="https://maimai-p2p-site.netlify.app">
                    ViewProject
                  </a>
                </h3>
                <div className="logoskill">
                  <img src="../img/skill/js.png" alt="" />
                  <img src="../img/skill/css.png" alt="" />
                  <img src="../img/skill/html.png" alt="" />
                  <img src="../img/skill/bootstrap.png" alt="" />
                  <img src="../img/skill/firebase.png" alt="" />
                </div>
              </p>
            </div>

            <div className="container-in">
              <div className="img">
                <ImageGallery
                  items={imgsevenwonder}
                  showFullscreenButton={false}
                  // showPlayButton={false}
                  // autoPlay={true}
                  // showBullets={true}
                  showNav={false}
                  slideDuration={600}
                />
              </div>

              <p>
                This is a website explaining the history of the Seven Wonders of
                the World in three eras. Within the web page, it describes in
                the form of a sheet where each one was built to make it easy to
                understand.
                <h3>
                  <a target="_blank" href="https://seven-wonder.netlify.app">
                    ViewProject
                  </a>
                </h3>
                <div className="logoskill">
                  <img src="../img/skill/js.png" alt="" />
                  <img src="../img/skill/css.png" alt="" />
                  <img src="../img/skill/html.png" alt="" />
                  <img src="../img/skill/bootstrap.png" alt="" />
                </div>
              </p>
            </div>

            <div className="container-in">
              <div className="img">
                <ImageGallery
                  items={imgprotobot}
                  showFullscreenButton={false}
                  // showPlayButton={false}
                  // autoPlay={true}
                  // showBullets={true}
                  showNav={false}
                  slideDuration={600}
                />
              </div>

              <p>
                Protobot: An Educational Game for Algorithmic Thinking is a
                webgl that about basic programming by use blockcode to control
                bot to run from start to finish
                <h3>
                  <a
                    target="_blank"
                    href="https://alskdjfhg0.itch.io/webgl-protobot"
                  >
                    ViewProject
                  </a>
                </h3>
                <div className="logoskill">
                  <img src="../img/skill/unity.png" alt="" />
                  <img src="../img/skill/c.png" alt="" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </MovingText>
    </div>
  );
};
export default Portfolio;
