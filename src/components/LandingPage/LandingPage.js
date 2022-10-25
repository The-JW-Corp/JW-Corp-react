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

      </div>
    </section>
  );
}

export default LandingPage;
