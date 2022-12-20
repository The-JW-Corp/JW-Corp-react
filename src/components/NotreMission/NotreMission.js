import React from "react";
import "./NotreMission.css";
import chalkBoard from "../../assets/icons/person-chalkboard-solid.svg";
import laptop from "../../assets/icons/laptop-code-solid.svg";
import clipboard from "../../assets/icons/clipboard-list-solid.svg";
import flask from "../../assets/icons/flask-solid.svg";
import { HashLink } from "react-router-hash-link";
const NotreMission = () => {
  return (
    <section id="mission" className="notreMission-component">
      <div id="notre-mission-title" className="notreMission-title-wrap">
        <h2>Notre mission</h2>
        <span>
          Une équipe de passionnés pour vous accompagner sur vos projets
          Blockchain.
        </span>
      </div>
      <div className="notreMission-service-container">
        <div id="conseil-paragraph" className="notreMission-service-subwrap">
          <div classname="notreMission-service-img-wrap">
            <img
              src={chalkBoard}
              alt="chalkboard"
              className="notreMission-icone-top"
            />
          </div>
          <HashLink
            className="hashlink-notre-mission"
            smooth
            to={"/Services#conseil"}
          >
            <a className="notreMission-service" href="/#">
              <h3>Conseil, Accompagnement & Intégration</h3>
              <p>
                Nous mobilisons nos connaissances et nos compétences au service
                de vos projets Blockchain.
              </p>
            </a>
          </HashLink>
        </div>
        <div id="dev-smartcontracts" className="notreMission-service-subwrap">
          <div classname="notreMission-service-img-wrap">
            <img src={laptop} alt="laptop" className="notreMission-icone-top" />
          </div>
          <HashLink
            className="hashlink-notre-mission"
            smooth
            to={"/Services#dev-smartcontracts"}
          >
            <a className="notreMission-service" href="/#">
              <h3>Développement de Smart-Contracts</h3>
              <p>
                Sécurisés, optimisés et personalisés, notre équipe développe des
                smart-contracts adaptés à vos besoins.
              </p>
            </a>
          </HashLink>
        </div>
        <div id="audit" className="notreMission-service-subwrap">
          <div classname="notreMission-service-img-wrap">
            <img
              src={clipboard}
              alt="clipboard"
              className="notreMission-icone-bottom"
            />
          </div>
          {/* auditservice */}
          <HashLink
            className="hashlink-notre-mission"
            smooth
            to={"/Services#auditservice"}
          >
            <a className="notreMission-service" href="/#">
              <h3>Audit</h3>
              <p>
                Vos projets ou vos smart contract audité par nos experts. Nous
                vous faisons parvenir un rapport détaillé contenant notamment
                observations et plan d'actions.
              </p>
            </a>
          </HashLink>
        </div>
        <div
          id="recherche-developpement"
          className="notreMission-service-subwrap"
        >
          <div classname="notreMission-service-img-wrap">
            <img
              src={flask}
              alt="flask"
              className="notreMission-icone-bottom"
            />
          </div>
          <HashLink
            className="hashlink-notre-mission"
            smooth
            to={"/Services#recherche-developpement"}
          >
            <a className="notreMission-service" href="/#">
              <h3>R&D</h3>
              <p>
                Nous étudions les différents cas d'usage lié aux nouvelles
                technologies expérimentales autour de la Blockchain (Lightning
                Network, ETH 2.0, SBTs...).
              </p>
            </a>
          </HashLink>
        </div>
      </div>
      <div className="mission-button-container">
        <a href="/nos-services">EN SAVOIR +</a>
      </div>
    </section>
  );
};

export default NotreMission;
