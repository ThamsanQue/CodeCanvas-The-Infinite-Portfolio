import React from "react";
import "../Styles/resume.css";
import Bar from "./Bar";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiFirebase,
  SiFlutter,
  SiFramer,
  SiMaterialUi,
  SiNodeDotJs,
} from "react-icons/si";
import { motion } from "framer-motion";

const languages = [
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
    level: "80",
  },
  {
    icon: <IoLogoHtml5 />,
    name: "HTML",
    level: "60",
  },
  {
    icon: <IoLogoCss3 />,
    name: "CSS",
    level: "55",
  },

  {
    icon: <IoLogoReact />,
    name: "React",
    level: "70",
  },

  {
    icon: <SiFirebase />,
    name: "Firebase",
    level: "70",
  },

  {
    icon: <SiNodeDotJs />,
    name: "NodeJs",
    level: "65",
  },

  {
    icon: <SiFlutter />,
    name: "Flutter",
    level: "68",
  },

  {
    icon: <IoLogoReact />,
    name: "React Native",
    level: "60",
  },

  {
    icon: <SiMaterialUi />,
    name: "MaterialUi",
    level: "70",
  },
];

const tools = [
  {
    icon: <SiAdobexd />,
    name: "Adobe XD",
    level: "50",
  },
  {
    icon: <SiAdobeillustrator />,
    name: "Adobe illustrator",
    level: "60",
  },
  {
    icon: <SiAdobephotoshop />,
    name: "Adobe Photoshop",
    level: "65",
  },

  {
    icon: <SiFramer />,
    name: "Framer",
    level: "55",
  },
];

const resumeVariant = {
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

function Resume() {
  return (
    <motion.div
      className="resume__ container"
      variants={resumeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume__card">
          <h4 className="resume__cardHeader">Education</h4>
          <div className="resume__cardBody">
            <h5 className="resume__cardTitle">Autodidact</h5>
            <p className="resume__cardContent">
              My urge to take on self-directed learning has led to my
              enlightenment in various skill sets, satisfaction, and
              well-derived intrinsic values.
            </p>
          </div>
        </div>

        <div className="col-lg-6 resume__card">
          <h4 className="resume__cardHeader">Experience</h4>
          <div className="resume__cardBody">
            <h5 className="resume__cardTitle">Freelance Developer</h5>
            <p className="resume__cardContent">
              Keen on working with ambitious individuals, startups and
              businesses with the goal of changing the world.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume__languages mt-3">
          <h5 className="resume__languagesHeader">Languages and Framework</h5>
          <div className="resume__languageBody">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>

        <div className="col-lg-6 resume__languages mt-3">
          <h5 className="resume__languagesHeader">Tools & Softwares</h5>
          <div className="resume__languageBody">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
