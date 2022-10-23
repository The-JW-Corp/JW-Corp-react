import React from "react";
import "./NotreMission.css";

const NotreMission = () => {
  return (
    <section className="notreMission-component">
      <div className="notreMission-title-wrap">
        <h2>Notre mission</h2>
        <span>
          Une équipe de passionnés pour vous accompagner sur vos projets
          Blockchain.
        </span>
      </div>
      <div className="notreMission-service-container">
        <div className="notreMission-service-wrap">
          <div className="notreMission-service-subwrap">
            <i>icone</i>
            <a className="notreMission-service" href="/#">
              <h3>Conseil, Accompagnement & Intégration</h3>
              <p>
                Nous mobilisons nos connaissances et nos compétences au service
                de vos projets Blockchain.
              </p>
            </a>
          </div>
          <div className="notreMission-service-subwrap">
            <i>icone</i>
            <a className="notreMission-service" href="/#">
              <h3>Audit</h3>
              <p>
                Vos projets ou vos smart contract audité par nos experts. Nous
                vous faisons parvenir un rapport détaillé contenant notamment
                observations et plan d'actions.
              </p>
            </a>
          </div>
        </div>
        <div className="notreMission-service-wrap">
          <div className="notreMission-service-subwrap">
            <i>icone</i>
            <a className="notreMission-service" href="/#">
              <h3>Développement de Smart-Contracts</h3>
              <p>
                Sécurisés, optimisés et personalisés, notre équipe développe des
                smart-contracts adaptés à vos besoins.
              </p>
            </a>
          </div>
          <div className="notreMission-service-subwrap">
            <i>icone</i>
            <a className="notreMission-service" href="/#">
              <h3>R&D</h3>
              <p>
                Nous étudions les différents cas d'usage lié aux nouvelles
                technologies expérimentales autour de la Blockchain (Lightning
                Network, ETH 2.0, SBTs...).
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotreMission;
