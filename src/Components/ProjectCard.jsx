import { GitHub } from "@material-ui/icons";
import React from "react";
import "../Styles/projectCard.css";

function ProjectCard({ project: { name, image, deployed_url, github_url } }) {
  return (
    <div className="projectCard__ col-md-6 col-lg-4">
      <figure className="projectCard__wrapper">
        <a href={deployed_url} target="_blank">
          <img src={image} alt={name} className="projectCard__image" />
        </a>
        <div className="projectCard__title">
          {!github_url ? null : (
            <a href={github_url} target="_blank">
              <GitHub className="mr-2" />
            </a>
          )}
          {name}
        </div>
      </figure>
    </div>
  );
}

export default ProjectCard;
