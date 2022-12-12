import Cta from "../../components/Cta/Cta";
import "./Home.css";
import React, {useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
function Home() {
  const ref= useRef(null);
  const location = useLocation();
  useEffect(() => { 
    if (ref && location.hash.includes('#test')) { 
    
      ref?.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center'
    });
    
    }
    }, [ref, location.hash]);
  return (
    <>
    <Navbar />
      <Cta />
    </>
  );
}

export default Home;
