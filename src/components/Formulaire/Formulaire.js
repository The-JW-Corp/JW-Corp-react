import React from "react";
import { useState } from "react";
// import "./Formulaire.css";
import "./TestForm.css";
import { motion, useScroll } from "framer-motion";

function Formulaire() {
  // const [name, setName] = useState("");
  const { scrollYProgress } = useScroll();
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
            <div className="cta-form-paragraph">
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
          <form>
            <div className="title-container">
              <h4>CONTACT</h4>
            </div>
            <div className="mail-container">
              <label className="label-mail">
                <div className="text-label">Email</div>
                <div className="mail-input">
                  <input type="text" name="email" />
                </div>
              </label>
            </div>
            <div className="space-container"></div>
            <div className="message-container">
              <label className="label-message">
                <div className="text-label">Votre message</div>
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
