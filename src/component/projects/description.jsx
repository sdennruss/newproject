import React, { useState } from "react";
import { details } from "./details";
import { Link } from "react-router-dom";

const Description = ({ index }) => {
	const [next, setNext] = useState(2);

	const routeError = index < 0 ? 0 : index;

	const newPath = details[next].path;

	const handleNextProject = (number) => {
		number === 5 ? setNext(0) : setNext(number);
		console.log("next:", next, "number", number, "index", index);
	};

	return (
		<React.Fragment>
			<div className="p-description-container">
				<div className="individial-img-container">
					<img className="individual-img" src={details[routeError].mainImg} />
				</div>

				<div className="single-detail-container">
					<div className="subtitle-container">
						<h2 className="subtitle">{details[routeError].title}</h2>
					</div>

					<div className="more-info-container">
						<p className="more-info "> {details[routeError].description}</p>
						<p className="more-info two">
							{" "}
							{details[routeError].subDescription}
						</p>
					</div>

					<div className="actions-container">
						<div className="visit-container">
							<a
								className="visit-web"
								href={details[routeError].link}
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit Web
							</a>
						</div>
						<div className="arrow container">
							<Link to={`/projects/${newPath}`} className="arrow-link">
								<i
									onClick={() => handleNextProject(next + 1)}
									className="fa fa-angle-double-right"
								></i>
							</Link>
							<p>next project</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Description;
