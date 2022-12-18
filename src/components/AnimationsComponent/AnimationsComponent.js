import React from "react";
import "./Animations-Component.css";
import { motion, useScroll } from "framer-motion";
import { gsap } from "gsap";
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
        duration:0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
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
        duration:0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeft("#cta-contact-us");
  }, []);

  const lineTriggerTop = (element) => {
    gsap.fromTo(
      element,
      {
        x: -350,
      },
      {
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    lineTriggerTop(".line-animation-top");
  }, []);

   const lineTriggerBottom = (element) => {
     gsap.fromTo(
       element,
       {
         x: "100%",
       },
       {
         x: "0%",
         duration: 0.6,
         scrollTrigger: {
           trigger: element,
           start: "20px 80%",
           end: "bottom center",
           toggleActions: "restart none none none",
         },
       }
     );
   };
   useEffect(() => {
     lineTriggerBottom(".line-animation-bottom");
   }, []);
  return (
    <>
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
