import React from "react";
import Cta from "../Cta/Cta";
import "./Home.css";
import Formulaire from "../Formulaire/Formulaire";
import AnimationsComponent from "../AnimationsComponent/AnimationsComponent";
function Home() {
  return (
    <>
      <Cta />
      <Formulaire />
      <AnimationsComponent/>
    </>
  );
}

export default Home;
