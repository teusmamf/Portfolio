import React, { useEffect,useRef } from "react";
import {motion as m } from "framer-motion";
import Navbar from "../components/navbar";
import ProjectGrid from "../components/projectGrid";
import ProjectsData from "../../public/assets/projectsimages/projectsdata";
import lottie from 'lottie-web';



export default function Projects(router){
    const animationRef = useRef(null);

    useEffect(() => {
        if (!animationRef.current) {
          animationRef.current = lottie.loadAnimation({
            container: document.querySelector('.container_projects_animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://lottie.host/77aa1a0e-c662-43bf-afde-764fbd003b70/XZCZtVwaP7.json'
          });
        }
      }, []);

    return (
        <m.div className="projects_page" key={router.pathname} initial={{x:"-100%"}} animate={{x:"0%"}} transition={{duration:1.0,ease:"easeInOut"}} exit={{x:"100%"}}>
            <Navbar/>
            <h1 className="resume_title">Some Projects</h1>
            
              <ProjectGrid projects={ProjectsData}/>

            <div className="container_projects_animation">
        <div id="lottie-container" className="animation_project"></div>
      </div>
        </m.div>
    )
}