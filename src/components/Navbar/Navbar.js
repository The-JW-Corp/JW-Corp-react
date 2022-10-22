import React, {useState} from "react";
import "./Navbar.css";
import jwblanc from "../../assets/jwlogosolutionblanc.svg";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);


  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  return (
    
    <section
     className="component-navbar"
    //  "navbar"
    >
      {/* Pour le menu Burger */}
      {/* <div className="burger-btn">
        <div className="div-burger-btn-1"></div>
        <div className="div-burger-btn-2"></div>
        <div className="div-burger-btn-3"></div>
      </div> */}


{/* <img src={jwblanc} className="img-responsive" /> */}
  <nav className="navBar">
    
    <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li>Accueil</li>
        <li>Nos services</li>
        <li>Contact</li>
        <a href="">fefzfz</a>
      </ul>
  </nav>


    </section>
  );
}
export default Navbar;