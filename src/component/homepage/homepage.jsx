import React from "react";
import Projects from "../projects/projects";
import SDR from "./assets/sdr.jpg";
import ParagraphToggle from "./paragraphToggle";
import Contact from "../contact/contact";

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="home-container">
        <div className="image-container">
          <img className="shandennruss" src={SDR} alt="ShaniceDR" />
        </div>
        <ParagraphToggle />
      </div>

      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default Homepage;
