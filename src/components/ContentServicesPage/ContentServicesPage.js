import React from "react";
import ContentService from "./ContentService/ContentService";
import "./ContentServicesPage.css";
import {HashLink} from "react-router-hash-link";
const ContentServicesPage = () => {
  return (
    <section className="content-services-section">
      <div className="content-services-wrap">
        <div className="content-services-h2-container content-services-h2-1-container">
          <h2 id="conseil">Conseil, Accompagnement & Integration</h2>
        </div>
        <ContentService
          h4={
            "- Identifier ensemble vos objectifs principaux en lien avec la Blockchain"
          }
          p={
            "Définir vos besoins de façon claire, l’objectif doit être suffisamment détaillé afin de permettre une étude de faisabilité."
          }
        />
        <ContentService
          h4={"- Analyser la situation"}
          p={
            "Avant d’établir une étude de faisabilité il est important de recueillir des informations clés : le secteur économique de l’entreprise et les pratiques, le modèle économique, l’analyse de la concurrence, (les fournisseurs pour les entreprises de biens et services), la clientèle cible, la réglementation et aussi mais surtout l’environnement technologique de l’entreprise."
          }
        />
        <ContentService
          h4={"- Étude de faisabilité"}
          p={
            "Selon la solution envisagée ensemble nous analysons les besoins du projet d’intégration (l’IT, le capital humain, le niveau de connaissance sur les sujets des technologies blockchains de l’équipe, la montée en compétence nécessaire, le temps de la mise en place… Ensuite nous définissons les forces du projet, ses faiblesses, les opportunités et les menaces (SWOT) pour pouvoir passer à la mise en production."
          }
        />
        <ContentService
          h4={"- Exécution"}
          p={
            "Nous développons l'infrastructure numérique, nous installons le matériel nécessaire dans le cas où le projet a besoin d’un nœud synchronisé en permanence, formons les employés concernés sur les principes de la blockchain, l’utilisation de leurs outils de travail, la gestion trésorière, la fiscalité et la sécurisation des cryptomonnaies et leurs conservations."
          }
        />
        <h6>
          <em>
            <strong>
              Ce sont des exemples, chaque projet est différent, nous nous
              adaptons à vos besoins.
            </strong>
          </em>
        </h6>

        <div className="content-services-h2-container content-services-h2-2-container">
          <h2 id="dev-smartcontracts">Développement de smart-contracts et dApps</h2>
        </div>

        <p>
          Vous êtes porteur de projet, ou un acteur déjà existant et avez besoin
          d'une force de développement externe. La JW Corp met à votre
          disposition son équipe de développeur et/ou son réseau de développeur
          pour les missions de tailles conséquentes. Création de NFTs, de tokens
          ERC-20, d’une dApp DeFi/NFT, ou simplement la rédaction de smart
          contracts dans un cadre très spécifique{" "}
          {/* <a href="#formulairedecontact" className="content-services-button-redirect-contact"> */}
          <HashLink to="/Services#form" className="content-services-button-redirect-contact"> contactez-nous</HashLink>
            {/* contactez-nous
          </a> */}
          .
        </p>
        <div className="content-services-h2-container content-services-h2-3-container">
          <h2>Audit de smart contact</h2>
        </div>
        <p>
          Vous avez rédigé ou fait rédiger des smart-contracts qui nécessitent
          une relecture pour s’assurer de la fiabilité et la sécurité de ces
          derniers ?{" "}
          <HashLink to="/Services#form" className="content-services-button-redirect-contact"> Contactez-nous</HashLink>
          .
        </p>
        <div className="content-services-h2-container content-services-h2-4-container">
          <h2 id="recherche-developpement">Recherche et développement</h2>
        </div>
        <p id="espaceaprestexte">
          Lightning Network, Souls Bound Tokens, ETH2.0, Multi-sigs,
          Tokenisations de bien réels, ... . Nous expérimentons les technologies
          innovantes autour de la Blockchain pour servir au mieux vos projets.
        </p>
      </div>
    </section>
  );
};

export default ContentServicesPage;
