import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

const MobileNav = ({ expand, setExpand }) => {
	const navigation = ["home", "projects", "contact"];

	console.log(expand);
	return (
		<React.Fragment>
			<div className="mobile-navigation-container">
				<ul className="mobile-unlisted-nav">
					{navigation.map((item) => (
						<li key={item} className="mobile-listed-nav">
							<NavLink
								onClick={() => setExpand(!expand)}
								className="mobile-nav"
								key={item}
								to={`/projects#${item}`}
							>
								{item}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</React.Fragment>
	);
};

export default MobileNav;
