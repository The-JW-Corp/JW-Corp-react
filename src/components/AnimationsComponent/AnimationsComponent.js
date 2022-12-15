import React from "react";
import { motion, useScroll } from "framer-motion";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

function AnimationsComponent() {
  const { scrollYProgress } = useScroll();
  
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const slideInTop = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  useEffect(() => {
    slideInTop("#cta-form-text");
  }, []);
  useEffect(() => {
    slideInTop("#form");
  }, []);

  const slideInLeft = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeft("#cta-contact-us");
  }, []);
  return (
    <>
      <>
      
      </>
      <>
        <motion.div
          className="progress-bar"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </>
    </>
  );
}

export default AnimationsComponent;
