import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ expand, setExpand }) => {
  const navigation = ["home", "projects", "contact"];

  console.log(expand);
  return (
    <React.Fragment>
      <div className="mobile-navigation-container">
        <ul className="mobile-unlisted-nav">
          {navigation.map((item) => (
            <li key={item} className="mobile-listed-nav">
              <Link
                onClick={() => setExpand(!expand)}
                className="mobile-nav"
                key={item}
                to={`/${item}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MobileNav;
