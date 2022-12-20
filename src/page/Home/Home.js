import Cta from "../../components/Cta/Cta";
import "./Home.css";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import LandingPage from "../../components/LandingPage/LandingPage";
import NotreMission from "../../components/NotreMission/NotreMission";
import NosValeurs from "../../components/NosValeurs/NosValeurs";
import Google from "../../components/Googlemaps/Google";
import Footer from "../../components/Footer/Footer";
import AnimationsComponent from "../../components/AnimationsComponent/AnimationsComponent";
import Formulaire from "../../components/Formulaire/Formulaire";
function Home() {
  const ref = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (ref && location.hash.includes("#test2")) {
      ref?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [ref, location.hash]);
  return (
    <>
      <Navbar />
      <LandingPage />
      <NotreMission />
      <Cta />
      <NosValeurs />
      <Formulaire />
      <Google />
      <Footer />
      <AnimationsComponent/>
    </>
  );
}

export default Home;
