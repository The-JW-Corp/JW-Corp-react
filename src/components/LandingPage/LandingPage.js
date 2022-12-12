import React from "react";
import "./LandingPage.css";
import { TypeAnimation } from "react-type-animation";

function LandingPage() {
  return (
    <section className="landing-page">
      <div>
        <h1 className="titre-landing-page">
          <div className="first-text-landing-page">
            Accompagner 
            <div className="line-and-word">
              <span className="underline-landing-page">aujourd'hui</span>
              <span className="liner"></span>
            </div>
            pour la décentralisation de 
            <div className="line-and-word2">
              <span className="underline-landing-page2">demain.</span>
              <span className="liner transition-liner"></span>
            </div>
          </div>
          <div className="typed-block">
            <div className="">
              We  <span className="liner-hidden"></span>
            </div>
            <div>
              <TypeAnimation
                sequence={[
                  "write code",
                  1000,
                  "make your project possible.",
                  2000,
                  "build.",
                  1000,
                ]}
                cursor={true}
                repeat={Infinity}
              />
              <span className="liner"></span>
            </div>
          </div>
        </h1>
        <a href="#mission">

        <div className="ease-landing-page"></div>
        <div className="arrow-bloc-landing-page bouncing-animation bounce">
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            >
            {/*! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
            </a>
      </div>
    </section>
  );
}

export default LandingPage;
