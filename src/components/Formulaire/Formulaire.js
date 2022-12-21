import React, { useState } from "react";
import "./Formulaire.css";
import { useForm } from "react-hook-form";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore/lite";

function Formulaire() {
  const [isFormulaireSent, setIsFormulaireSent] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const timerFormulaireMessage = () => {
    setIsFormulaireSent(true);
    setTimeout(() => {
      setIsFormulaireSent(false);
    }, 6000);
  };

  var collectionUser = collection(db, "testAnimationValidation");
  function onSubmit(data) {
    console.log(data);
    addDoc(collectionUser, {
      email: `${data.email}`,
      message: `${data.message}`,
    });
    console.log("c'est envoyé");
    reset();
    console.log(" c'est reset");
    timerFormulaireMessage();
  }

  return (
    <>
      <section id="form" className="form-cta-container">
        <section className="cta-form">
          <div className="line-animation-top-container">
            <div className="line-animation-top" id="line-animation"></div>
          </div>
          <div className="cta-form-paragraph" id="cta-form-text">
            <div className="text-cta-form text-cta-form-responsiv1">
              Vous souhaitez prendre contact ? Vous avez un projet Blockchain,
              un besoin d'accompagnement, de développement ? Un retour à nous
              faire ?
            </div>
            <div className="text-cta-form">
              Laissez-nous votre message nous reviendrons vers vous au plus vite
              !
            </div>
          </div>
          <div className="line-animation-bottom-container">
            <div className="line-animation-bottom"></div>
          </div>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: " Ce format de mail n'est pas valide.",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="error-message">
                  Votre mail est requis pour l'envoi du formulaire
                </span>
              )}
              {errors.email?.type == "pattern" && (
                <span className="error-message">{errors.email.message}</span>
              )}
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
                      message:
                        "Votre message ne peut contenir que 1000 caractères maximum.",
                    },
                    minLength: {
                      value: 140,
                      message:
                        "Votre message doit contenir 140 caractères minimum.",
                    },
                  })}
                ></textarea>
                {errors.message?.type == "maxLength" && (
                  <span className="error-message">
                    {errors.message.message}
                  </span>
                )}
                {errors.message?.type == "minLength" && (
                  <span className="error-message">
                    {errors.message.message}
                  </span>
                )}
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
      <div
        className={
          isFormulaireSent
            ? "validation-message-container" : "validation-message-disapear"}>
        <div className="validation-message-text">
          Votre formulaire a bien été envoyé !
        </div>
      </div>
    </>
  );
}

export default Formulaire;
