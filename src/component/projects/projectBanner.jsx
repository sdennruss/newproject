import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

const ProjectBanner = () => {
	const projectNames = [
		"Vegan Virgin Challenge",
		"Omnipresent Replica",
		"GLH Renovations",
		"Model Behaviour",
		"Parachute",
	];
	return (
		<div className="banner-container">
			<p className="project-banner">
				Pro
				<br />
				jects.
			</p>
			<div className="project-names-container">
				{projectNames.map((item) => (
					<NavLink
						className="p-names"
						smooth
						key={item}
						to={`/projects#${item}`}
					>
						{item}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default ProjectBanner;
