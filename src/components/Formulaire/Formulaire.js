import React from "react";
// import { useState } from "react";
import "./Formulaire.css";
import { motion, useScroll } from "framer-motion";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";


function Formulaire() {
  // const [name, setName] = useState("");
  const { scrollYProgress } = useScroll();
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const slideInTop = (element) => {
    gsap.fromTo(
      element,
      {
        opacity:0,
        y:-200,
      },
      {
        opacity:1,
        y:0,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };
  useEffect(() => {
    slideInTop("#cta-form-text");
  }, []);
  useEffect(() => {
    slideInTop("#form");
  }, []);

  const slideInLeft = (element) => {
    gsap.fromTo(
      element,
      {
        opacity:0,
        x:-200,
      },
      {
        opacity:1,
        x:0,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };
  useEffect(() => {
    slideInLeft("#cta-contact-us");
  }, []);

  return (
    <>
      <>
        <motion.div
          className="progress-bar"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </>
      <>
        <section className="form-cta-container">
          <section className="cta-form">
            <div className="line-animation-top-container">
              <div className="line-animation-top"></div>
            </div>
            <div className="cta-form-paragraph" id="cta-form-text">
              <div className="text-cta-form">
                Vous souhaitez prendre contact ? Vous avez un projet Blockchain,
                un besoin d'accompagnement, de développement ? Un retour à nous
                faire ?
              </div>
              <div className="text-cta-form">
                Laissez-nous votre message nous reviendrons vers vous au plus
                vite !
              </div>
            </div>
            <div className="line-animation-bottom-container">
              <div className="line-animation-bottom"></div>
            </div>
          </section>
          <form id="form">
            <div className="title-container">
              <h4>CONTACT</h4>
            </div>
            <div className="mail-container">
              <label className="label-mail">
                <div className="text-label-mail">Email</div>
                <div className="mail-input">
                  <input type="text" name="email" />
                </div>
              </label>
            </div>
            <div className="space-container"></div>
            <div className="message-container">
              <label className="label-message">
                <div className="text-label-message">Votre message</div>
                <div className="message-input">
                  <textarea name="message"></textarea>
                </div>
              </label>
            </div>
            <div className="button-container">
              <div>
                <button className="submit-button" type="submit">
                  ENVOYER
                </button>
              </div>
            </div>
          </form>
        </section>
      </>
    </>
  );
}
export default Formulaire;
