import React from "react";

function ProjectItem({ name, about, technologies }) {
    let techNames = [];
    technologies.forEach(element =>  {
     techNames.push(<span>{element}</span>)
    });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techNames}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
