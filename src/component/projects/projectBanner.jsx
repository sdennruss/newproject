import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

const ProjectBanner = () => {
	const projectNames = [
		"Vegan Virgin Challenge",
		"Majik Kids",
		"Omnipresent Replica",
		"GLH Renovations",
		"Model Behaviour",
		"Parachute",
	];
	return (
		<div id="projects" className="banner-container">
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
