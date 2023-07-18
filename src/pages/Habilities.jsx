import React from "react";
import {motion as m } from "framer-motion";
import Navbar from "../components/navbar";
import Skills from "../components/skills";




export default function Habilities(router){
    return (
    
                
        <m.div className="resume" key={router.pathname} initial={{x:"-100%"}} animate={{x:"0%"}} transition={{duration:1.0,ease:"easeInOut"}} exit={{x:"100%"}}>
            <Navbar/>
            <Skills/>
         </m.div>
    )
}