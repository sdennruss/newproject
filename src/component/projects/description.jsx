import React from "react";
import TitlePage from "./titlePage";
import { details } from "./details";
import { Redirect, Route } from "react-router-dom";

const Description = ({ index }) => {
  const routeError = index < 0 ? 0 : index;
  console.log(routeError);
  return (
    <React.Fragment>
      <TitlePage index={routeError} details={details} />

      <div className="p-description-container">
        <div className="individial-img-container">
          <img className="individual-img" src={details[routeError].mainImg} />
        </div>

        <div className="single-detail-container">
          <div className="subtitle-container">
            <h2 className="subtitle">{details[routeError].title}</h2>
          </div>

          <div className="more-info-container">
            <p className="more-info"> {details[routeError].description}</p>
          </div>

          <div className="visit-container">
            <a
              className="visit-web"
              href={details[routeError].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Web
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
