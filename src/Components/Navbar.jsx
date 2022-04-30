import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    let currentUrl = window.location.href;

    console.log(currentUrl);

    if (currentUrl.endsWith("/")) setActive("About");
    else if (currentUrl.endsWith("/projects")) setActive("Projects");
    else if (currentUrl.endsWith("/resume")) setActive("Resume");
  }, []);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: "1",
      transition: {
        type: "spring",
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar__active">{active}</div>
      <div className="navbar__options">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__option" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" ? (
          <Link to="/resume">
            <div className="navbar__option" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        ) : null}
        {active !== "Projects" && (
          <Link to="/projects">
            <div
              className="navbar__option"
              onClick={() => setActive("Projects")}
            >
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
