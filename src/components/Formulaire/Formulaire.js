import React from "react";
// import "./Formulaire.css";
import "./TestForm.css";

function Formulaire() {
  return (
    <section className="container-formulaire">
      <div className="formulaire">
        <div className="levraitextavantform">
          <div id="" className="jsAnimation containerOfcontaintainerSize">
            <div id="" className="containerOftextavantform">
              <span id="textavantform">
                Vous souhaitez prendre contact ? Vous avez un projet Blockchain,
                un besoin d'accompagnement, de développement ? Un retour à nous
                faire ? <br />
                <br /> Laissez-nous votre message nous reviendrons vers vous au
                plus vite !
                <br />
                <br />
                <br />
              </span>
            </div>
          </div>
        </div>

        {/* <section className="texteuh">
          <div className="deuxieme">
            <div className="login-box">
              <h2 id="form-title">CONTACT</h2>
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
            </div>
          </div>
        </section> */}

<div class="form">
        <div class="title">CONTACT</div>
        <div class="subtitle"></div>
        <div class="input-container ic1">
          <input id="firstname" class="input" type="text" placeholder=" " />
        
          <div class="cut"></div>
          <label for="firstname" class="placeholder">EMAIL</label>
        </div>
        
        <div class="input-container ic2">
          <textarea id="lastname" class="input" type="text" placeholder=" " required=""> </textarea>
          <label for="lastname" class="placeholder">VOTRE MESSAGE</label>
        </div>
        
        <button type="text" class="submit">ENVOYER</button>
      </div>


      </div>
    </section>
  );
}

export default Formulaire;
