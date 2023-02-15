import React from "react";
import ContentService from "./ContentService/ContentService";
import "./ContentServicesPage.css";
import { HashLink } from "react-router-hash-link";
const ContentServicesPage = ({ langageState }) => {
  return (
    <section className="content-services-section">
      <div className="content-services-wrap">
        <div className="content-services-h2-container content-services-h2-1-container">
          <h2 id="conseil">
            {langageState ? (
              <>Conseil, Accompagnement & Integration</>
            ) : (
              <>Consulting, Support & Integration</>
            )}
          </h2>
        </div>
        {langageState ? (
          <>
            <ContentService
              h4={
                "- Identifier ensemble vos objectifs principaux en lien avec la Blockchain"
              }
              p={
                "Définir vos besoins de façon claire, l’objectif doit être suffisamment détaillé afin de permettre une étude de faisabilité."
              }
            />
          </>
        ) : (
          <>
            <ContentService
              h4={
                "- Identify together your main objectives related to the Blockchain"
              }
              p={
                "Define your needs clearly, the objective must be detailed enough to allow a feasibility study."
              }
            />
          </>
        )}
        {langageState ? (
          <>
            <ContentService
              h4={"- Analyser la situation"}
              p={
                "Avant d’établir une étude de faisabilité il est important de recueillir des informations clés : le secteur économique de l’entreprise et les pratiques, le modèle économique, l’analyse de la concurrence, (les fournisseurs pour les entreprises de biens et services), la clientèle cible, la réglementation et aussi mais surtout l’environnement technologique de l’entreprise."
              }
            />
          </>
        ) : (
          <>
            <ContentService
              h4={"- Analyze the situation"}
              p={
                "Before establishing a feasibility study it is important to collect key information: the company's economic sector and practices, the business model, the analysis of the competition (suppliers for goods and services companies), the target clientele, the regulations and also, but above all, the company's technological environment."
              }
            />
          </>
        )}
        {langageState ? (
          <>
            <ContentService
              h4={"- Étude de faisabilité"}
              p={
                "Selon la solution envisagée ensemble nous analysons les besoins du projet d’intégration (l’IT, le capital humain, le niveau de connaissance sur les sujets des technologies blockchains de l’équipe, la montée en compétence nécessaire, le temps de la mise en place… Ensuite nous définissons les forces du projet, ses faiblesses, les opportunités et les menaces (SWOT) pour pouvoir passer à la mise en production."
              }
            />
          </>
        ) : (
          <>
            <ContentService
              h4={"- Feasibility studies"}
              p={
                "Depending on the solution considered, we analyze the needs of the integration project (IT, human capital, level of knowledge on blockchain technologies of the team, the necessary increase in skills, the time of implementation ... Then we define the strengths of the project, its weaknesses, opportunities and threats (SWOT) to be able to go into production."
              }
            />
          </>
        )}
        {langageState ? (
          <>
            <ContentService
              h4={"- Exécution"}
              p={
                "Nous développons l'infrastructure numérique, nous installons le matériel nécessaire dans le cas où le projet a besoin d’un nœud synchronisé en permanence, formons les employés concernés sur les principes de la blockchain, l’utilisation de leurs outils de travail, la gestion trésorière, la fiscalité et la sécurisation des cryptomonnaies et leurs conservations."
              }
            />
          </>
        ) : (
          <>
            <ContentService
              h4={"- Implementation"}
              p={
                "We develop the digital infrastructure, install the necessary hardware in case the project needs a permanently synchronized node, train the relevant employees on the principles of blockchain, the use of their work tools, treasury management, taxation and securing cryptocurrencies and their custody."
              }
            />
          </>
        )}
        <h6>
          <em>
            <strong>
              {langageState ? (
                <>
                  Ce sont des exemples, chaque projet est différent, nous nous
                  adaptons à vos besoins.
                </>
              ) : (
                <>
                  These are examples, each project is different, we adapt to
                  your to your needs.
                </>
              )}
            </strong>
          </em>
        </h6>

        <div className="content-services-h2-container content-services-h2-2-container">
          <h2 id="dev-smartcontracts">
            {langageState ? (
              <>Développement de smart-contracts et dApps</>
            ) : (
              <> Smart-contracts development</>
            )}
          </h2>
        </div>

        <p>
          {langageState ? (
            <>
              Vous êtes porteur de projet, ou un acteur déjà existant et avez
              besoin d'une force de développement externe. La JW Corp met à
              votre disposition son équipe de développeur et/ou son réseau de
              développeur pour les missions de tailles conséquentes. Création de
              NFTs, de tokens ERC-20, d’une dApp DeFi/NFT, ou simplement la
              rédaction de smart contracts dans un cadre très spécifique{" "}
            </>
          ) : (
            <>
              You are a project leader, or an existing player and need an
              external development force. The JW Corp puts at your disposal its
              team of developers and/or its network of developers for the
              missions of consequent sizes. Creation of NFTs, tokens ERC-20
              tokens, a DeFi/NFT dApp, or simply the writing of smart contracts
              in a very specific framework
            </>
          )}
          <HashLink
            to="/Services#form"
            className="content-services-button-redirect-contact"
          >
            {" "}
            {langageState ? <>contactez-nous</> : <>contact us</>}
          </HashLink>
          .
        </p>
        <div className="content-services-h2-container content-services-h2-3-container">
          <h2>
            {langageState ? (
              <>Audit de smart contact</>
            ) : (
              <>Smart-contract audit</>
            )}
          </h2>
        </div>
        <p>
          {langageState ? (
            <>
              Vous avez rédigé ou fait rédiger des smart-contracts qui
              nécessitent une relecture pour s’assurer de la fiabilité et la
              sécurité de ces derniers ?{" "}
            </>
          ) : (
            <>
              You have drafted or had drafted smart-contracts that require
              proofreading to ensure their reliability and security? reliability
              and security?{" "}
            </>
          )}
          <HashLink
            to="/Services#form"
            className="content-services-button-redirect-contact"
          >
            {" "}
            {langageState ? <>Contactez-nous</> : <>Contact us</>}
          </HashLink>
          .
        </p>
        <div className="content-services-h2-container content-services-h2-4-container">
          <h2 id="recherche-developpement">
            {langageState ? (
              <>Design UI/UX & Illustrations</>
            ) : (
              <>Design UI/UX & Illustrations</>
            )}
          </h2>
        </div>
        <p id="espaceaprestexte">
          {langageState ? (
            <>
              Chez JW Corp, nous proposons une gamme complète de services de
              design pour vous aider à donner vie à votre vision créative. Nous
              nous spécialisons dans l'illustration, la recherche UX/UI, la
              création de design system, et pouvons même automatiser le tout
              pour les projets les plus ambitieux. Nous créons également des
              prototypes avec des animations complexes, une direction artistique
              soignée et une recherche de tendances pointue. Nous sommes là pour
              vous accompagner tout au long du processus, en vous aidant à
              affiner vos fonctionnalités et à vous assurer que vous offrez une
              expérience utilisateur exceptionnelle. Enfin, nous sommes fiers
              d'avoir une expérience solide de design web3, avec plus de 25
              projets web accompagnés et la capacité d'onboarder le grand
              public. Chez JW Corp, nous sommes déterminés à fournir des designs
              qui feront la différence pour votre entreprise.
            </>
          ) : (
            <>
              At JW Corp, we offer a complete range of design services to help
              bring your creative vision to life. We specialize in illustration,
              UX/UI research, design system creation, and can even automate
              everything for the most ambitious projects. We also create
              prototypes with complex animations, a careful artistic direction,
              and sharp trend research. We are here to accompany you throughout
              the process, helping you refine your features and ensuring that
              you offer an exceptional user experience. Finally, we are proud to
              have a strong experience in web3 design, with over 25 web projects
              supported and the ability to onboard the general public. At JW
              Corp, we are determined to provide designs that make a difference
              for your business.
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default ContentServicesPage;
