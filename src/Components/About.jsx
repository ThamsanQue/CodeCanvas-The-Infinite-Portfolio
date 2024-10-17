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
      "I can build beautiful and scalable SPAs and MPAs using the latest frontend libraries and frameworks. Most preferable React's Nextjs",
  },

  {
    icon: <Dns />,
    title: "Backend Development",
    about: "Database handling, server, api usage and authentication",
  },
  {
    icon: <Laptop />,
    title: "UI/UX designer",
    about: "Minimalistic user interface designer using Framer and Figma",
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
        I believe in building products with purpose—solutions that empower
        others to chase their dreams and turn ideas into reality. Coding is more
        than just a skill for me; it's a way to create the future, one line at a
        time. Driven by passion and innovation, I focus on crafting tools that
        spark excitement and open new possibilities. Every project is an
        opportunity to bring the extraordinary to life, and together, we can
        amplify that impact and push the boundaries of what's possible.
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
