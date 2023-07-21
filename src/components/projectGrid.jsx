import React from "react";
import ProjectCard from "./projectCards";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="project_grid">
      
      {projects.map((Project) => {
        return <ProjectCard key={Project.id} {...Project} />;
      })}
    </div>
  );
};

export default ProjectGrid;
