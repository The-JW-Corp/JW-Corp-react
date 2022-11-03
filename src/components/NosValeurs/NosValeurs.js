import React from "react";
import "./NosValeurs.css";
import { TypeAnimation } from "react-type-animation";

function NosValeurs() {
  return (
    <section className="bloc-nos-valeurs">
      <div className="nos-valeurs">
        <div>
          <h3 className="nos-valeurs-title">Nos valeurs</h3>
        </div>
        <div className="bloc-typed-nos-valeurs" >
          <div className="bloc-vide-nos-valeurs"></div>
          <h6 className="typed-nos-valeurs">
            Parlons 
            <span>
              <TypeAnimation
                sequence={[
                  " Bitcoin",
                  1000,
                  " transformation numérique",
                  1500,
                  " blockchain",
                  1000,
                  " smart-contracts",
                  1000,
                ]}
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h6>
        </div>
        <p className="nos-valeurs-paragraph">
          Véritables passionnés, nous construisons nos compétences autour de la
          Blockchain depuis 2017. La désintermédiation des services financiers,
          la décentralisation de la monnaie, une gouvernance "trustless", des
          règles publiques et vérifiables par tous sont les notions qui nous ont
          poussés à faire de cette passion notre métier, notre sujet de
          prédilection. Une nouvelle économie numérique se bâtit aujourd'hui,
          nous avons la volonté de participer activement à sa réalisation c'est
          pourquoi depuis le <strong>04/03/2021</strong> nous avons lancer la JW
          Corp.
        </p>
      </div>
    </section>
  );
}

export default NosValeurs;
