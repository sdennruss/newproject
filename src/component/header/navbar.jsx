import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

const NavBar = () => {
	const navigation = ["home", "projects", "contact"];

	return (
		<React.Fragment>
			<div className="navigation-container">
				<ul className="unlisted-nav">
					{navigation.map((item) => (
						<li key={item} className="listed-nav">
							<NavLink
								smooth
								className="nav"
								key={item}
								to={`/projects#${item}`}
							>
								{item}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className="circular-hover"></div>
		</React.Fragment>
	);
};

export default NavBar;
