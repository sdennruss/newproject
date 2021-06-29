import React from "react";
import { details } from "./details";
import TitlePage from "./titlePage";

const Description = ({ index }) => {
  return (
    <React.Fragment>
      <TitlePage index={index} details={details} />

      <div className="p-description-container">
        <div className="project-image-container">
          <img className="individual-page-img" src={details[index].mainImg} />
        </div>

        <div className="single-detail-container">
          <div className="project-subtitle">
            <h2>{details[index].title}</h2>
          </div>

          <div>
            <p> {details[index].summary}</p>
          </div>

          <div>
            <p
              href={details[index].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Web
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
