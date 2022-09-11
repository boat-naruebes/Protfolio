import React from "react";
const Contact = () => {
  window.addEventListener("scroll", (event) => {
    const displaydata = document.getElementById("contact-effect");
    const test = displaydata.getBoundingClientRect().top;
    // console.log(test);
    // console.log(document.documentElement.scrollTop);
    if (test >= 600) {
      displaydata.style.transform = "translateY(250px)";
      displaydata.classList.add("displaydata");
    } else {
      displaydata.style.transform = "translateY(0px)";
      displaydata.style.backgroundColor = "rgb(10, 20, 75)";
    }
  });
  return (
    <div className="Contact">
      <div className="container" id="contact-effect">
        <h2>Contact</h2>

        <div className="detail">
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
          </form>
          <div className="social">
            <ul>
              <li>
                <img src="../img/contact/phone.png" alt="" />
              </li>

              <li>
                <img src="../img/contact/mail.png" alt="" />
              </li>
              <li>
                <img src="../img/contact/git.png" alt="" />
              </li>
              <li>
                <img src="../img/contact/face.png" alt="" />
              </li>
              <li>
                <img src="../img/contact/line.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <button>Contact</button>
      </div>
    </div>
  );
};
export default Contact;
