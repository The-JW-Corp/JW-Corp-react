import React from "react";
import "./Cta.css";
import { useLocation, useNavigate} from "react-router-dom";

const Cta = () => {
const navigate = useNavigate();
function handleClick () {
  // navigate('/Services#conseil');
  console.log("test")
}
  return (
    <div className="cta-component">
      <div className="cta-wrap">
        <p className="cta-text" id="cta-contact-us">
          <strong> Vous souhaitez en savoir plus ?</strong> <br /> Envoyez-nous
          un message afin de commencer à discuter autour de votre projet.
        </p>
        <div className="cta-wrap-button">
          <a onClick={handleClick} className="cta-button" href="" id="cta-contact-us">
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
};
export default Cta;
