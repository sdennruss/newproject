import React from "react";
import { details } from "./details";
import { Link } from "react-router-dom";
import ProjectBanner from "./projectBanner";

const Projects = () => {
	return (
		<React.Fragment>
			<div className="outer-projects-container">
				<ProjectBanner />
				<div className="outer-p-container">
					{details.map((project) => (
						<div
							id={`${project.title}`}
							className="p-container"
							key={project.id}
						>
							<div className="p-image-container">
								{" "}
								<img
									className="project-img"
									alt="projects"
									src={project.preview}
								/>
							</div>
							<div className="p-details-container">
								<div className="p-title-container">
									<h2 className="p-title">{project.title}</h2>
								</div>
								<div className="p-service-container">
									<p className="p-service">{project.service}</p>
								</div>
								<div className="p-summary-container">
									<p className="p-summary">{project.summary}</p>
								</div>

								<div className="p-button-container">
									<a className="p-button" href={`/projects/${project.path}`}>
										Tech Details
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
