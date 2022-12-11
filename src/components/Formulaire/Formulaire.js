import React from "react";
import { useState } from "react";
// import "./Formulaire.css";
import "./TestForm.css";

function Formulaire() {
  // const [name, setName] = useState("");

  return (
    <section className="form-container">
      {/* <form>
        <label>
          Email
          <input type="text" name="name" />
        </label>
        <label>
          Votre nom
          <textarea name="nom" id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          ></textarea>
        </label>

        <input type="submit" value="Envoyer" />
      </form> */}
      <form>
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
          <button className="submit-button" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
export default Formulaire;
