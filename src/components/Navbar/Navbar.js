import React, { useState } from "react";
import "./Navbar.css";
import "../../assets/fonts/Lato-Black.ttf";
import jwblanc from "../../assets/logoJWCorp/jwlogosolutionblanc.svg";

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <section className="component-navbar">
        <div className="navbar-logo-container">
          <a href="/">
            <img src={jwblanc} alt="JW Corp logo blanc" />
          </a>
        </div>
        <div className="navbar-container">
          <div className="nav-container">
            <nav className={isClick ? "navbar-active" : "navbar"}>
              <div className="navbar-list-container">
                <ul className="navbar-list">
                  <li className={isClick ? "li1" : "li1"}>
                    <a href="/">Accueil</a>
                  </li>
                  <li className={isClick ? "li2" : "li1"}>
                    <a href="/">Nos services</a>
                  </li>
                  <li className={isClick ? "li3" : "li1"}>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="burger">
            <a onClick={handleClick} href="/#">
              <span className={isClick ? "span span1-active" : "span"}></span>
              <span className={isClick ? "span span2-active" : "span"}></span>
              <span className={isClick ? "span span3-active" : "span"}></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;
