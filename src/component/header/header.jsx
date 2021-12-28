import React from "react";
import logo from "./logo.png";
import MobileToggle from "./mobileToggle";
import NavBar from "./navbar";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Header = () => {
	return (
		<React.Fragment>
			<div className="header-container">
				<div className="logo-container">
					<NavLink smooth to="/projects#home">
						<img alt="logo" className="logo" src={logo} />
					</NavLink>
				</div>
				<NavBar />
				<MobileToggle />
			</div>
		</React.Fragment>
	);
};

export default Header;
