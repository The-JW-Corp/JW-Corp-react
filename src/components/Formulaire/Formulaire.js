import React from "react";
import { useState } from "react";
// import "./Formulaire.css";
import "./TestForm.css";

function Formulaire() {
  // const [name, setName] = useState("");

  return (
    <>
      <section className="form-cta-container">
        <section className="cta-form">
          <div className="line-animation-top"></div>
          <div className="cta-form-paragraph">
            <div className="text-cta-form">
              Vous souhaitez prendre contact ? Vous avez un projet Blockchain,
              un besoin d'accompagnement, de développement ? Un retour à nous
              faire ?
            </div>
            <div className="text-cta-form">
              Laissez-nous votre message nous reviendrons vers vous au plus vite !
            </div>
          </div>
          <div className="line-animation-bottom"></div>
        </section>
        <form>
          <div className="form-title">
            <strong>
              <h4>CONTACT</h4>
            </strong>
          </div>
          <div className="mail-container">
            <label className="label-mail">
              <div className="text-label">Email</div>
              <div className="mail-input">
                <input type="text" name="email" />
              </div>
            </label>
          </div>
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
  );
}
export default Formulaire;
