import React from "react";
import "./Home.css";

import NotreMission from "../NotreMission/NotreMission";

import LandingPage from "../LandingPage/LandingPage";

function Home() {
  return (
    <section id="body">
      <>
                <LandingPage/>
                <NotreMission />
                <section>
          {/* contact us Page
           ==========================================*/}
          <section id="home-contact-block">
            <div className="container">
              <div className="row wow fadeInUp">
                <p>
                  <strong className="souhaitezensavoirplus">
                    Vous souhaitez en savoir plus ?
                  </strong>
                  <br />
                  Envoyez-nous un message afin de commencer à discuter autour de
                  votre projet.
                  {/* Notre équipe vous accompagne étape par étape
                      avec des solutions adaptées à vos besoins. */}
                </p>
                <a href="#formulairedecontact">Contactez-nous</a>{" "}
              </div>
            </div>
          </section>
          {/* the process block
                ==========================================*/}
          <div id="space-process-block" />
          <section id="process-block">
            <div className="container">
              <div className="row responsive390">
                {" "}
                {/* précédemment classe "row" à mettre si problème */}
                {/*section-title*/}
                <div className="section-title text-center wow fadeInUp">
                  <h2 id="notreequipe">Nos valeurs</h2>
                </div>
                {/*/section-title*/}
                {/*process tab*/}
                <div>
                  {/*/tab nav*/}
                  {/*tab container*/}
                  <div className="tab-content">
                    {/*tab nav item 1*/}
                    <div id="concept" className="tab-pane active">
                      <div className="col-md-7 process-content">
                        <h6>
                          Parlons <span id="parlonstech" />
                        </h6>
                        <p>
                          Véritables passionnés, nous construisons nos
                          compétences autour de la Blockchain depuis 2017. La
                          désintermédiation des services financiers, la
                          décentralisation de la monnaie, une gouvernance
                          "trustless", des règles publiques et vérifiables par
                          tous sont les notions qui nous ont poussés à faire de
                          cette passion notre métier, notre expertise. Une
                          nouvelle économie numérique se bâtit aujourd'hui, nous
                          avons la volonté de participer activement à sa
                          réalisation c'est pourquoi depuis le{" "}
                          <strong>04/03/2021</strong> nous avons lancer la JW
                          Corp.
                          {/* Le milieu de la blockchain est un domaine qui évolue à grande vitesse et les usages se multiplient c’est pourquoi nous avons décidé de lancer la JW Corp le <strong> 04/03/2021 </strong>.  */}
                        </p>
                      </div>
                      {/*/tab content*/}
                    </div>
                    {/*/tab nav item 1*/}
                    {/*tab nav item 2*/}
                  </div>
                  {/*/tab nav item 4*/}
                </div>
                {/*/tab container*/}
              </div>
              {/*\process tab*/}
            </div>
          </section>
          {/* TEXTE ET FORMULAIRE  */}
          <section id="" className="levraitextavantform">
            <div id="" className="jsAnimation containerOfcontaintainerSize">
              <div id="" className="containerOftextavantform">
                <span id="textavantform">
                  Vous souhaitez prendre contact ? Vous avez un projet
                  Blockchain, un besoin d'accompagnement, de développement ? Un
                  retour à nous faire ? <br />
                  <br /> Laissez-nous votre message nous reviendrons vers vous
                  au plus vite !
                  <br />
                  <br />
                  <br />
                </span>
              </div>
            </div>
          </section>
          <div className="spaces" />
          <section className="texteuh">
            <div className="deuxieme">
              {/* <span> */}
              <div className="login-box">
                <h2 id="formulairedecontact">CONTACT</h2>
                <form method="post">
                  <div className="user-box">
                    <input
                      id="leEmail"
                      type="text"
                      name="Email"
                      required=""
                      placeholder=""
                    />
                    <label htmlFor="leEmail">Email</label>
                  </div>
                  <div className="user-box">
                    <textarea
                      id="votremessage"
                      name="Message"
                      type="text"
                      placeholder=""
                      required=""
                      defaultValue={""}
                    />
                    <label htmlFor="votremessage">Votre message</label>
                  </div>
                  <button type="text" name="envoyer" id="police-submit">
                    <span />
                    <span />
                    <span />
                    <span />
                    Envoyer
                  </button>
                </form>
                {/*?php include 'formulaire.php' ?*/}
              </div>
            </div>
          </section>
          <p id="googlephrase">
            Venez nous rencontrer dans nos locaux à La Défense (uniquement sur
            RDV).
          </p>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.4020133445424!2d2.2475172158606496!3d48.8886752065276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665ee25d21b01%3A0xc15a3b519b7f243a!2sJW%20Corp!5e0!3m2!1sfr!2sfr!4v1654658142857!5m2!1sfr!2sfr"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="googlemaps"
            />
          </div>
        </section>{" "}
        {/* ====================== FOOTER ================================ */}
        <footer id="bottom-footer">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p id="adressfooter">
                  Tour CB21 - La Défense <br />
                  16 Place de l'iris <br />
                  92400 Courbevoie, France <br />
                </p>
                {/*copyright*/}
                <p className="copyright">
                  © 2022&nbsp;
                  <a href="https://jwcorp.fr" className="footermodiframi">
                    JW Corp
                  </a>
                  . All rights reserved
                </p>
                {/*/copyright*/}
              </div>
              {/*bottom nav*/}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <nav className="bottom-nav">
                  <img
                    src="img/jwlogosolutionblanc.svg"
                    className="logo-footer-img"
                    alt="logo jw footer"
                  />
                  <ul className="social-link" id="elements-footer">
                    <li>
                      <a href="https://twitter.com/jwcorp_">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/jwcorp/ ">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/bottom nav*/}
              {/*Social Links*/}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="ensemblecontact">
                  <span className="telfooter">
                    Tél:{" "}
                    <a href="tel:06 18 28 62 67" className="contactfooter">
                      06 18 28 62 67
                    </a>{" "}
                    /
                    <a href="tel:07 70 07 84 84" className="contactfooter">
                      {" "}
                      07 70 07 84 84
                    </a>{" "}
                    <br /> <br />
                  </span>
                  <span className="emailfooter">
                    Email:{" "}
                    <a
                      href="mailto: contact@jwcorp.fr"
                      className="contactfooter"
                    >
                      contact@jwcorp.fr
                    </a>
                  </span>
                </div>
                {/* <ul class="social-link">
    <li><a href="https://twitter.com/jwcorp_"><i class="fa fa-twitter"></i></a></li>
    <li><a href="https://www.linkedin.com/company/jwcorp/ "><i class="fa fa-linkedin"></i></a></li>
  </ul> */}
              </div>
              {/*/Social Links*/}
            </div>
          </div>
        </footer>
        {/* Typed Script pour les mots landing page voir class: .typedscript */}
        {/* ===== SCRIPT NOTRE EQUIPE ===== */}
        {/* ===== Animation sur ancre, redirection lente -- Pour les 4 services -- ===== */}
        {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
        {/* Include all compiled plugins (below), or include individual files as needed */}
        {/* Custom Javascripts
    ================================================== */}
      </>
    </section>
  );
}

export default Home;
