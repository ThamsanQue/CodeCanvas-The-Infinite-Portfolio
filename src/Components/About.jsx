import { Dns, Image, ImportantDevices, Laptop } from "@material-ui/icons";
import React from "react";
import "../Styles/about.css";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
const skills = [
  {
    icon: <ImportantDevices />,
    title: "FrontEnd Development.",
    about:
      "I can build a beautiful and scalable SPA using HTML, CSS and React.js",
  },

  {
    icon: <Dns />,
    title: "Backend Development",
    about: "Database handling, server, api usage and authentication",
  },
  {
    icon: <Laptop />,
    title: "UI/UX designer",
    about: "Minimalistic user interface designer using Framer and Adobe XD",
  },
  {
    icon: <Image />,
    title: "Other",
    about:
      "Also work on graphic designing at times and combine the work with web and mobile development experiences",
  },
];

const about_variant = {
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

function About() {
  return (
    <motion.div
      className="about__"
      variants={about_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">
        I am passionate about building excellent software that improves the
        lives of those around me. I specialize in creating web & mobile apps for
        clients ranging from individuals, startups and small-businesses. Have a
        project, idea or problem you'd like to discuss? Email or call me!
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
