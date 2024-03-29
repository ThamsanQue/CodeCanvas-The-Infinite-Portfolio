import React from "react";
import "../Styles/resume.css";
import Bar from "./Bar";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiTailwindcss,
  SiTrpc,
  SiPrisma,
  SiFramer,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiNodedotjs,
  SiPlanetscale,
  SiNestjs,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";
import DrizzleIcon from "../Assets/icons/drizzleIcon";
import TanStack from "../Assets/TanStack.svg";

const languages = [
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
    level: "90",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    level: "80",
  },
  {
    icon: <IoLogoReact />,
    name: "React",
    level: "80",
  },
  {
    icon: <SiNextdotjs />,
    name: "Nextjs",
    level: "70",
  },

  {
    icon: <SiPrisma />,
    name: "Prisma",
    level: "70",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    level: "70",
  },
  {
    icon: <SiPostgresql />,
    name: "postgreSQL",
    level: "50",
  },

  {
    icon: <SiNodedotjs />,
    name: "NodeJs",
    level: "80",
  },
  {
    icon: <SiNestjs />,
    name: "NestJs",
    level: "70",
  },
  {
    icon: <SiTrpc />,
    name: "TRPC",
    level: "60",
  },

  {
    icon: <IoLogoReact />,
    name: "React Native",
    level: "60",
  },
  {
    icon: <DrizzleIcon />,
    name: "Drizzle",
    level: "60",
  },
];

const tools = [
  {
    icon: <SiFigma />,
    name: "Figma",
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
  {
    icon: <SiTailwindcss />,
    name: "TailwindCss",
    level: "70",
  },
  {
    icon: <SiPlanetscale />,
    name: "PlanetScale",
    level: "80",
  },
  {
    icon: <SiSupabase />,
    name: "Supabase",
    level: "70",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    level: "80",
  },
  {
    icon: (
      <img
        src={TanStack}
        alt="tanStack"
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "white",
        }}
      />
    ),
    name: "TanStack",
    level: "80",
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
            <h5 className="resume__cardTitle">
              FullStack Developer{" "}
              <a href="https://flowliving.com/">@Flowliving</a>
            </h5>
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
