import React, { useState } from "react";
import "./App.css";
import "./header.css";
import "./services.css";
import "./packages.css";
import "./footer.css";
import logo from "./assets/logo.png";
import gabage from "./assets/icons8-garbage_truck.png";
function App() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header className="header">
        <div
          style={{
            height: 100,
            backgroundColor: "transparent",
            padding: "0px 20px",
          }}
          className="nav"
        >
          <div>
            <img src={logo} style={{ width: 200, height: "50%" }} alt="logo" />
          </div>
          <ul
            className={
              showMenu ? "nav-container active " : "nav-container close"
            }
          >
            {["Home", "Services", "Packages", "Blog", "About Us"].map(
              (nav, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      style={{ color: "#fff", textDecoration: "none" }}
                      href={`#${nav.toLowerCase()}`}
                    >
                      {nav}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
          <div className="nav-menu">
            <i
              onClick={() => {
                setshowMenu(!showMenu);
              }}
              style={{ color: "#116939" }}
              className="material-icons"
            >
              {showMenu ? "close" : "menu"}
            </i>
          </div>
        </div>

        <div className="message-container">
          <span className="message">
            HOME & COMMERCIAL WASTE DISPOSAL AT YOUR CONVENIENCE
          </span>
        </div>
      </header>
      <div id="services">
        <div className="services-main-1">
          <div className="service-header-part-1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 200,
              }}
            >
              <span style={{ fontSize: "25px", color: "#fff", width: 50 }}>
                OUR <br /> SERVICES
              </span>
              <span
                style={{ color: "#fff", fontSize: "30px" }}
                className="material-icons"
              >
                miscellaneous_services
              </span>
            </div>
            <span className="service-header-part-1-text-exp">
              Our services focus on Convienience to our customers as well as
              adding up to make a clean environment
            </span>
            <span className="service-header-part-1-service">SERVICES</span>
          </div>

          <div className="service-header-part-2"></div>
          <div className="service-header-part-3">
            <img style={{ width: 50, height: 55 }} src={gabage} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",

                justifyContent: "space-evenly",
                paddingLeft: 10,
              }}
            >
              <span>Pick-up and disposal of waste</span>
              <span>Sale of recycleable waste products</span>
              <span>Buy cleaning tools and equipments from us.</span>
            </div>
          </div>
        </div>
        <div className="services-main-2">
          {[
            { icon: "get_app", text: "Download  the app on Playstore." },
            { icon: "done", text: "Sign up with details." },
            {
              icon: "event_available",
              text: "Request, schedule or book time  to pick up waste.",
            },
            { icon: "map", text: "Enter location for pick-up." },
            {
              icon: "photo_camera",
              text:
                "Take a picture of refuse to be picked up and get your qouted fee.",
            },
            {
              icon: "payments",
              text: "Pay through Momo or hard cash on pickup.",
            },
          ].map((item, index) => {
            return (
              <div className="services-list-item">
                <span
                  style={{
                    fontSize: 50,
                    padding: "20px 20px",
                    backgroundColor: "rgba(196, 196, 196, 0.4)",
                    borderRadius: 50,
                  }}
                  class="material-icons"
                >
                  {item.icon}
                </span>
                <span style={{ marginLeft: 5, width: "40%" }}>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div id="packages">
        <h2>Packages</h2>
        <span className="packages-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet mi nisi, non tempus diam rhoncus at. Sed odio augue,
          sollicitudin sed egestas pretium, tempus ut ex. Donec efficitur sem
          sed velit porta, a luctus eros tempus. Fusce venenatis in libero nec
          tristique. Praesent imperdiet, mi vel convallis auctor, dolor tortor
          sagittis est, eu egestas lectus enim eget orci.
        </span>
      </div>
      <footer>
        <div>
          <span class="material-icons">location_on</span>
          <div>
            <span>TRASH SMART</span>
            <span>
              Hse 49 - SE 29056, 2nd Turn Behind Mizpah School , Kentinkrono -
              Kumasi.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
