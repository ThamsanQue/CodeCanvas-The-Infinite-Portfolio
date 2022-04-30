import React, { useState } from "react";
import "../Styles/projects.css";
import data_projects from "../Data/Projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState(data_projects);

  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };

  const project_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: "1",
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="projects__ container"
      variants={project_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={() => handleFilterCategory("WebApp clones")}>
          WebApp clones & Personal apps
        </div>
        <div onClick={() => handleFilterCategory("MobileApp clones")}>
          MobileApp clones
        </div>
        <div onClick={() => handleFilterCategory("Clients")}>Clients</div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
