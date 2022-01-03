import React from "react";
import { details } from "./details";
import Description from "./description";

const Project = ({ path }) => {
	const index = details.findIndex((item) => {
		return item.path === path;
	});

	return (
		<React.Fragment>
			<Description index={index} />
		</React.Fragment>
	);
};

export default Project;
