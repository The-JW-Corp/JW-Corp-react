import Cta from "../../components/Cta/Cta";
import "./Home.css";
import React, {useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
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
      <Cta />
    </>
  );
}

export default Home;
