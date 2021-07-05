import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import MobileToggle from "./mobileToggle";
import NavBar from "./navbar";

const Header = () => {
  const navigation = ["home", "projects", "contact"];
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img alt="logo" className="logo" src={logo} />
          </Link>
        </div>
        <NavBar />
        <MobileToggle />
      </div>
    </React.Fragment>
  );
};

export default Header;
