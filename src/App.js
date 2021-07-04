import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./component/header/header";
import Projects from "./component/projects/projects";
import Homepage from "./component/homepage/homepage";
import ProjectDetails from "./component/projects/projectDetails";
import ContactDetails from "./component/contact/contactDetails";
import Footer from "./component/contact/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="routing-container">
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route
            path="/projects/:path"
            render={(props) => <ProjectDetails {...props} />}
          />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactDetails} />
          <Route exact path="/" component={Homepage} />
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
