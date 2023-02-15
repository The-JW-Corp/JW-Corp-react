import React from "react";
import "./NotreMission.css";
import { HashLink } from "react-router-hash-link";
const NotreMission = ({ langageState }) => {
  return (
    <section id="mission" className="notreMission-component">
      <div id="notre-mission-title" className="notreMission-title-wrap">
        <h2>{langageState ? <>Notre mission</> : <>Our mission</>} </h2>
        <span>
          {langageState ? (
            <>
              Une équipe de passionnés pour vous accompagner sur vos projets
              Blockchain.
            </>
          ) : (
            <>
              A team of passionate people to accompany you on your Blockchain
              projects.
            </>
          )}
        </span>
      </div>
      <div className="notreMission-service-container">
        <div
          id="notre-mission-animation"
          className="notreMission-service-subwrap"
        >
          <div className="notreMission-service-img-wrap">
            <HashLink
              className="notreMission-icone-top"
              to={"/Services#conseil"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M192 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
              </svg>
            </HashLink>
          </div>
          <HashLink
            className="hashlink-notre-mission notreMission-service"
            to={"/Services#conseil"}
          >
            <h3>
              {langageState ? (
                <> Conseil, Accompagnement & Intégration</>
              ) : (
                <>Consulting, Support & Integration</>
              )}
            </h3>
            <p>
              {langageState ? (
                <>
                  Nous mobilisons nos connaissances et nos compétences au
                  service de vos projets Blockchain.
                </>
              ) : (
                <>
                  We mobilize our knowledge and skills to serve your your
                  Blockchain projects.
                </>
              )}
            </p>
          </HashLink>
        </div>
        <div
          id="notre-mission-animation"
          className="notreMission-service-subwrap"
        >
          <div className="notreMission-service-img-wrap">
            <HashLink
              className="notreMission-icone-top"
              to={"/Services#dev-smartcontracts"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
              </svg>
            </HashLink>
          </div>
          <HashLink
            className="hashlink-notre-mission notreMission-service"
            to={"/Services#dev-smartcontracts"}
          >
            <h3>
              {langageState ? (
                <>Développement de Smart-Contracts</>
              ) : (
                <>Smart-contracts development</>
              )}
            </h3>
            <p>
              {langageState ? (
                <>
                  Sécurisés, optimisés et personalisés, notre équipe développe
                  des smart-contracts adaptés à vos besoins.
                </>
              ) : (
                <>
                  Secure, optimized and personalized, our team develops
                  smart-contracts adapted to your needs.
                </>
              )}
            </p>
          </HashLink>
        </div>
        <div
          id="notre-mission-animation"
          className="notreMission-service-subwrap"
        >
          <div className="notreMission-service-img-wrap">
            <HashLink
              to={"/Services#auditservice"}
              className="notreMission-icone-bottom"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M101.5 64C114.6 26.7 150.2 0 192 0s77.4 26.7 90.5 64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h37.5zM224 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM160 368c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM96 392c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zm64-120c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM96 296c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z" />
              </svg>
            </HashLink>
          </div>
          <HashLink
            className="hashlink-notre-mission notreMission-service"
            to={"/Services#auditservice"}
          >
            <h3>Audit</h3>
            <p>
              {langageState ? (
                <>
                  Vos projets ou vos smart contract audité par nos experts. Nous
                  vous faisons parvenir un rapport détaillé contenant notamment
                  observations et plan d'actions.
                </>
              ) : (
                <>
                  Your projects or your smart contracts audited by our experts.
                  We send you a detailed report containing in particular
                  observations and action plan.
                </>
              )}
            </p>
          </HashLink>
        </div>
        <div
          id="notre-mission-animation"
          className="notreMission-service-subwrap"
        >
          <div className="notreMission-service-img-wrap">
            <HashLink
              to={"/Services#recherche-developpement"}
              className="notreMission-icone-bottom"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
            </HashLink>
          </div>
          <HashLink
            className="hashlink-notre-mission notreMission-service"
            to={"/Services#recherche-developpement"}
          >
            <h3>Design UI/UX & Illustrations</h3>
            <p>
              {langageState ? (
                <>
                  Nous proposons une gamme complète de services de design pour
                  vous aider à donner vie à votre vision créative. Nous nous
                  spécialisons dans l'illustration, la recherche UX/UI et la
                  création de design system.
                </>
              ) : (
                <>
                  We offer a complete range of design services to help bring
                  your creative vision to life. We specialize in illustration,
                  UX/UI research and design system creation.
                </>
              )}
            </p>
          </HashLink>
        </div>
      </div>
      <div className="mission-button-container">
        <HashLink to="/Services">
          {langageState ? <>EN SAVOIR +</> : <>READ MORE</>}
        </HashLink>
      </div>
    </section>
  );
};

export default NotreMission;
