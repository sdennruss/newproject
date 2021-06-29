import React from "react";
import { Route, Switch } from "react-router-dom";
import Project from "./project";

const ProjectDetails = ({ match }) => {
  const {
    params: { title },
  } = match;

  return (
    <React.Fragment>
      <Switch>
        <Route
          path={`/projects/${title}`}
          render={(props) => <Project title={title} {...props} />}
        />
      </Switch>
    </React.Fragment>
  );
};

export default ProjectDetails;
