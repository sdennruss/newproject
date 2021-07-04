import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";

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
        <div className="navigation-container">
          <ul className="unlisted-nav">
            {navigation.map((item) => (
              <li key={item} className="listed-nav">
                <NavLink className="nav" key={item} to={`/${item}`}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="circular-hover"></div>
      </div>
    </React.Fragment>
  );
};

export default Header;
