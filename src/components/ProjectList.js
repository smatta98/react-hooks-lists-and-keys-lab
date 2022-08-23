import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let projectItems = projects.map(project => <ProjectItem key = {project.id} name = {project.name} about = {project.about} technologies = {project.technologies}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;


//{/* render ProjectItem components here */}

// In the ProjectList component, a prop of projects is being passed down from the App component with an array of objects. 
// For each object in the array, render one ProjectItem component with the correct props. Use the id of the project for the key prop.