import React, { } from "react";
import "./Navbar.css";
import "../../assets/fonts/Lato-Black.ttf"
import jwblanc from "../../assets/jwlogosolutionblanc.svg";

function Navbar() {
  return (
    <section className="component-navbar">
      <div className="navbar-logo-container">
        <img src={jwblanc} alt="JW Corp logo blanc" />
      </div>
      <div className="navbar-container">
        <nav className="navbar">
          <ul className="navbar-list lato-black">
            <li>Accueil</li>
            <li>Nos services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="burger">3</div>
      </div>
    </section>
  );
}
export default Navbar;
