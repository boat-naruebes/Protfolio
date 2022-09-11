import React from "react";
import ImageGallery from "react-image-gallery";
const Portfolio = () => {
  const imgpokemon = [
    {
      original: "../img/Pokemon-search/img1.PNG",
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
  window.addEventListener("scroll", (event) => {
    const displaydata = document.getElementById("port-effect");
    const test = displaydata.getBoundingClientRect().top;
    // console.log(test);
    // console.log(document.documentElement.scrollTop);
    if (test >= 600) {
      displaydata.style.transform = "translateY(250px)";
      displaydata.classList.add("displaydata");
    } else {
      displaydata.style.transform = "translateY(0px)";
    }
  });
  return (
    <div className="Portfoloi">
      <h2>Portfoloi</h2>

      <div className="container" id="port-effect">
        <div className="pokemon">
          <div className="img">
            <ImageGallery
              items={imgpokemon}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              showBullets={true}
              showNav={false}
              slideDuration={600}
            />
          </div>

          <p>
            this is website about search Pokemon it can show each pokemon
            information data whether it's name, Weight, Height, Type and Ability
            <h3>
              <a target="_blank" href="https://pokemon-search-data.netlify.app">
                ViewProject
              </a>
            </h3>
            <div className="logoskill">
              <img src="../img/skill/icon/js.png" alt="" />
              <img src="../img/skill/icon/css.png" alt="" />
              <img src="../img/skill/icon/html.png" alt="" />
              <img src="../img/skill/icon/react.png" alt="" />
            </div>
          </p>
        </div>
        <div></div>
        <div className="BKjourney">
          <p>
            this is website about social depravity Public Transportation in
            bankok such as bus, BTS, MAT, boat, taxi, motorbike taxi
            <h3>
              <a target="_blank" href="https://bangkokia-jouney.netlify.app">
                ViewProject
              </a>
            </h3>
            <div className="logoskill">
              <img src="../img/skill/icon/js.png" alt="" />
              <img src="../img/skill/icon/css.png" alt="" />
              <img src="../img/skill/icon/html.png" alt="" />
              <img src="../img/skill/icon/bootstrap.png" alt="" />
            </div>
          </p>
          <div className="img">
            <ImageGallery
              items={imgbangkok}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              showBullets={true}
              showNav={false}
              slideDuration={600}
            />
          </div>
        </div>

        <div className="Mai">
          <div className="img">
            <ImageGallery
              items={imgmai}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              showBullets={true}
              showNav={false}
              slideDuration={600}
            />
          </div>
          {
            <p>
              This is a website for the exchange of cryptocurrencies with a
              manual system. A user can create orders to sell or buy
              cryptocurrencies. When the transaction is completed, the order
              will show the hash number (the number that confirms the transfer).
              <h3>
                <a target="_blank" href="https://maimai-p2p-site.netlify.app">
                  ViewProject
                </a>
              </h3>
              <div className="logoskill">
                <img src="../img/skill/icon/js.png" alt="" />
                <img src="../img/skill/icon/css.png" alt="" />
                <img src="../img/skill/icon/html.png" alt="" />
                <img src="../img/skill/icon/bootstrap.png" alt="" />
                <img src="../img/skill/icon/firebase.png" alt="" />
              </div>
            </p>
          }
        </div>

        <div className="Sevenwonder">
          <p>
            This is a website explaining the history of the Seven Wonders of the
            World in three eras: Ancient Ages, medieval Ages, and New Ages.
            Within the web page, it describes in the form of a sheet where each
            one was built to make it easy to understand.
            <h3>
              <a target="_blank" href="https://seven-wonder.netlify.app">
                ViewProject
              </a>
            </h3>
            <div className="logoskill">
              <img src="../img/skill/icon/js.png" alt="" />
              <img src="../img/skill/icon/css.png" alt="" />
              <img src="../img/skill/icon/html.png" alt="" />
              <img src="../img/skill/icon/bootstrap.png" alt="" />
            </div>
          </p>
          <div className="img">
            <ImageGallery
              items={imgsevenwonder}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              showBullets={true}
              showNav={false}
              slideDuration={600}
            />
          </div>
        </div>
        <div className="protobot">
          <div className="img">
            <ImageGallery
              items={imgprotobot}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              showBullets={true}
              showNav={false}
              slideDuration={600}
            />
          </div>
          <p>
            This is a website explaining the history of the Seven Wonders of the
            World in three eras: Ancient Ages, medieval Ages, and New Ages.
            Within the web page, it describes in the form of a sheet where each
            one was built to make it easy to understand.
            <h3>
              <a target="_blank" href="https://seven-wonder.netlify.app">
                ViewProject
              </a>
            </h3>
            <div className="logoskill">
              <img src="../img/skill/icon/unity.png" alt="" />
              <img src="../img/skill/icon/c.png" alt="" />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
