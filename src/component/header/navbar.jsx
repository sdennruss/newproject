import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigation = ["home", "projects", "contact"];

  return (
    <React.Fragment>
      <div className="navigation-container">
        <ul className="unlisted-nav">
          {navigation.map((item) => (
            <li key={item} className="listed-nav">
              <Link className="nav" key={item} to={`/${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="circular-hover"></div>
    </React.Fragment>
  );
};

export default NavBar;
