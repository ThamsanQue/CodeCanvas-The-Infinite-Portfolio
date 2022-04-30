import React from "react";
import "../Styles/skillcard.css";

const SkillCard = ({ skill: { icon, title, about } }) => (
  <div className="col-lg-6">
    <div className="skillCard__">
      <>{icon}</>
      <div className="skillCard__body">
        <h6 className="skillCard__title">{title}</h6>
        <p className="skillCard__content">{about}</p>
      </div>
    </div>
  </div>
);

export default SkillCard;
