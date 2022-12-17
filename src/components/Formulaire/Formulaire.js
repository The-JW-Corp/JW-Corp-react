import React from "react";
import { useRef, useEffect } from "react";
import "./Formulaire.css";
import { useForm } from "react-hook-form";
import {collection, addDoc} from "firebase/firestore";

function Formulaire() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data, addDoc) {
    
    console.log(data);

    
  }
  return (
    <>
      <>
        <section className="form-cta-container">
          <section className="cta-form">
            <div className="line-animation-top-container">
              <div className="line-animation-top" id="line-animation"></div>
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
          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="title-container">
              <h4>CONTACT </h4>
            </div>
            <div className="mail-container">
              <label className="label-mail">
                <div className="text-label-mail">Email</div>
                <div className="mail-input">
                  <input
                    type="text"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
                        message: "Ce format de mail n'est pas valide."
                      },
                    })}
                  />
                  {errors.email && <span className="error-message">Votre mail est requis pour l'envoi du formulaire</span>}
                </div>
                  {errors.email?.type == "pattern" && <span className="error-message">{errors.email.message}</span>}
              </label>
            </div>
            <div className="space-container"></div>
            <div className="message-container">
              <label className="label-message">
                <div className="text-label-message">Votre message</div>
                <div className="message-input">
                  <textarea
                    name="message"
                    {...register("message", { 
                      required: true,
                      maxLength: {
                        value: 1000,
                        message: "Votre message ne peut contenir que 1000 caractères maximum."
                      }, 
                      minLength: {
                        value: 140,
                        message:"Votre message doit contenir 140 caractères minimum."
                      }
                    })}
                  ></textarea>
                  {errors.message?.type == "maxLength" && <span className="error-message">{errors.message.message}</span>}
                  {errors.message?.type == "minLength" && <span className="error-message">{errors.message.message}</span>}
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
