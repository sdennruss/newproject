import React from "react";
import { details } from "./details";
import Description from "./description";

const Project = ({ title }) => {
  const index = details.findIndex((item) => {
    return item.path.toLowerCase() === title.toLowerCase();
  });

  return (
    <React.Fragment>
      <div className="pd-container">
        <Description index={index} />
      </div>
    </React.Fragment>
  );
};

export default Project;
