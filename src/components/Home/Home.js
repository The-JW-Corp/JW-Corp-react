import React from "react";
import Cta from "../Cta/Cta";
import "./Home.css";
import Formulaire from "../Formulaire/Formulaire";
import ScrollAnim from "../ScrollAnim/ScrollAnim";
import AnimationsComponent from "../AnimationsComponent/AnimationsComponent";

function Home() {
  return (
    <>
      <Cta />
      <Formulaire />
      {/* <ScrollAnim/> */}
      <AnimationsComponent/>

    </>
  );
}

export default Home;
