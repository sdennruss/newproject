import React from "react";
import { details } from "./details";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="outer-projects-container">
        <div className="inner-three-container">
          <p className="three">All Projects</p>
          <p className="three">All Projects</p>
          <p className="three">All Projects</p>
        </div>
        <div>
          {details.map((project) => (
            <div className="p-container" key={project.id}>
              <div className="p-image-container">
                {" "}
                <img
                  className="project-img"
                  alt="projects"
                  src={project.preview}
                />
              </div>
              <div className="p-details-container">
                <div className="p-title-container">
                  <h2 className="p-title">{project.title}</h2>
                </div>
                <div className="p-service-container">
                  <p className="p-service">{project.service}</p>
                </div>
                <div className="p-summary-container">
                  <p className="p-summary">{project.summary}</p>
                </div>

                <p className="p-button-container">
                  <Link className="p-button" to={`/projects/${project.path}`}>
                    Check it out
                  </Link>
                  {console.log(project.title)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
