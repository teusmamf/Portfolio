import React from "react";
import {motion as m } from "framer-motion";
import Navbar from "../components/navbar";




export default function Projects(router){
    return (
        <m.div className="projects_container" key={router.pathname} initial={{x:"-100%"}} animate={{x:"0%"}} transition={{duration:1.0,ease:"easeInOut"}} exit={{x:"100%"}}>
            <Navbar/>
            <h1>Projects</h1>
        </m.div>
    )
}