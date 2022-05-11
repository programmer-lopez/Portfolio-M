import React from "react";
import "./Home.css";
import logo from "../../img/home/logo.png";

function Home() {
  return (
    <div className="home">
      <div className="home__bg">
        <div className="header d__flex align__items_center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#home">
                <li className="nav__items mx__15">home</li>
              </a>
              <a href="#Experiencia">
                <li className="nav__items mx__15">experience</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#home">
                <li className="nav__items mx__15">abilities</li>
              </a>
              <a href="#home">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
