import React from "react";

export default function ProjectCard(props) {

  console.log(props.photo);
  const cardStyle = {
    background: `url(../assets/projectsimages/${props.photo})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center",
  };



    
  return (
    <div className="card" style={cardStyle}>
      <div className="card__content">
        <p className="card__title">{props.name}</p>
        <p className="card__description">{props.description}</p>
        {props.link && (
          <a href={props.link} className="card__description">
            Click Here!
          </a>
        )}
      </div>
    </div>
  );
}
