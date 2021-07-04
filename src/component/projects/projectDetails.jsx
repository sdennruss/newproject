import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Project from "./project";

const ProjectDetails = ({ match }) => {
  const {
    params: { path },
  } = match;

  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={`/projects/${path}`}
          render={(props) => <Project {...props} path={path} match={match} />}
        />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
};

export default ProjectDetails;
