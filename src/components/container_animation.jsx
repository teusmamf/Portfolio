import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSpring,animated, useInView } from "react-spring";
import {motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";


export default function ContainerAnimation(router) {
  const animationRef = useRef(null);
  const [refText, inViewText] = useInView({
    triggerOnce: true, 
  });

  const [ref, inView1] = useInView({
    triggerOnce: true, 
  });

const Animation = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? "translateY(0)" : "translateY(100px)",
    config: { duration: 800 },
  });

  const textAnimation = useSpring({
    opacity: inView1 ? 1 : 0,
    fontSize: inView1 ? '18px' : '15px', 
    config: { duration: 500 },
  });

  useEffect(() => {
    if (!animationRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: document.querySelector('.container_animations_animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/d512421a-616d-4767-887b-652c78388df5/YGoFjCCOt7.json'
      });
    }
  }, []);

  return (
    <m.div key={router.pathname} initial={{x:"-150%"}} animate={{x:"0%"}} transition={{duration:1.0,ease:"easeInOut"}} exit={{x:"100%"}} className="container_animations"> 
      <div className="container_animation_welcome">
        <div className="container_texts_welcome" ref={refText} style={textAnimation}>
        <h1 className="welcome_texts">I'm Mateus Martins Fernandes</h1><br></br>
        <h1 className="welcome_texts">A Development Analyst and Product Manager</h1>
        </div>
        <div className="social_medias">
        <a
          href="https://instagram.com/fernandismateus?igshid=MjEwN2IyYWYwYw=="
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon_social_medias"  />

        </a>

        <a
          href="https://github.com/teusmamf"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FontAwesomeIcon icon={faGithub} className="icon_social_medias"  />

        </a>
        <a
          href="https://www.linkedin.com/in/mateus-martins-fernandes-541aa1234/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon_social_medias"  />

        </a>
        </div>
      </div>
      <div className="container_animations_animation">
        <div id="lottie-container"></div>
      </div>
    </m.div>
  );
}
