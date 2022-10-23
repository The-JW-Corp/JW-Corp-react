import React from "react";
import "./NotreMission.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

function NotreMission() {
  return (
    <section className="notre-mission">
      <h2 className="title">Notre mission</h2>
      <p className="description">
        Une équipe de passionnés pour vous accompagner sur vos projets
        Blockchain.
      </p>

      <ul className="liste-services">
        <div className="services">
          <a href="/#">
            <li>
              <div className="titre-service-et-icon">
                <FontAwesomeIcon id="icon" icon={faPersonChalkboard}></FontAwesomeIcon>
                <h5>Conseil, Accompagnement &amp; Intégration</h5>
              </div>
              <p>
                Nous mobilisons nos connaissances et nos compétences au service
                de vos projets Blockchain.
              </p>
            </li>
          </a>
        </div>

        <div className="services">
          <a href="/#">
            <li>
              <div className="titre-service-et-icon">
                <FontAwesomeIcon id="icon" icon={faLaptopCode}></FontAwesomeIcon>
                <h5>Développement de Smart-Contracts</h5>
              </div>
              <p>
                Sécurisés, optimisés et personalisés, notre équipe développe des
                smart-contracts adaptés à vos besoins.
              </p>
            </li>
          </a>
        </div>

        <div className="services">
          <a href="/#">
            <li>
              <div className="titre-service-et-icon">
                <FontAwesomeIcon id="icon" icon={faClipboardList} />
                <h5>Audit</h5>
              </div>
              <p>
                Vos projets ou vos smart contract audité par nos experts. Nous
                vous faisons parvenir un rapport détaillé contenant notamment
                observations et plan d'actions.
              </p>
            </li>
          </a>
        </div> 

        <div className="services">
          <a href="/#">
            <li>
              <div className="titre-service-et-icon">
                <FontAwesomeIcon id="icon" icon={faFlask} />
                <h5>R&amp;D</h5>
              </div>
              <p>
                Nous étudions les différents cas d'usage lié aux nouvelles
                technologies expérimentales autour de la Blockchain (Lightning
                Network, ETH 2.0, SBTs...).
              </p>
            </li>
          </a>
        </div>
      </ul>
    </section>
  );
}

export default NotreMission;
