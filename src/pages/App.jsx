import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatorRoutes from "../components/animator_routes";
import Navbar from "../components/navbar";
import ProjectsData from "../../public/assets/projectsimages/projectsdata";
import ProjectCard from "../components/projectCards";


export default function App(){
  const Projects  = ProjectsData.map(p => {
    return (
      <ProjectCard
      key={p.id}
      name={p.name}
      link={p.link}
      description={p.description}
      photo={p.photo}
/>
    )

  })







    return (
   

      <Router>
  
          <AnimatorRoutes/>
      </Router> 

    )
}