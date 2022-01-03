import React, { useState, useRef } from "react";
import { details } from "./details";
import { Link } from "react-router-dom";

const Description = ({ index }) => {
	const [next, setNext] = useState(2);

	// number
	const routeIndex = index < 0 ? 0 : index;

	// string
	const newPath = details[next].path;

	const handleNextProject = (number) => {
		number === details.length ? setNext(0) : setNext(number);
		console.log(index);
	};

	const scrollRef = useRef();

	function handleScroll() {
		scrollRef.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<React.Fragment>
			<div ref={scrollRef} className="top-image-container">
				<div className="half-container">
					<div className="main-title-container">
						<h1 className="main-title">{details[routeIndex].title}</h1>
					</div>

					<div className="main-service-container">
						<p className="main-service">{details[routeIndex].service}</p>
					</div>

					<div className="individual-img-container">
						<img
							alt=""
							className="individual-img"
							src={details[routeIndex].mainImg}
						/>
					</div>
				</div>
			</div>

			<div className="p-description-container">
				<div className="single-detail-container">
					<div className="subtitle-container">
						<h2 className="subtitle">{details[routeIndex].subtitle}</h2>
					</div>

					<div className="more-info-container">
						<p className="more-info "> {details[routeIndex].description}</p>
						<p className="more-info two">
							{" "}
							{details[routeIndex].subDescription}
						</p>
					</div>

					<div className="actions-container">
						<div className="visit-container">
							<a
								className="visit-web"
								href={details[routeIndex].link}
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit Web
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="bottom-image-container">
				<div className="mobile-image">
					<img alt="" className="m-image" src={details[routeIndex].mobile1} />
				</div>
				<div className="mobile-image">
					<img alt="" className="m-image" src={details[routeIndex].mobile2} />
				</div>
				<div className="mobile-image">
					<img alt="" className="m-image" src={details[routeIndex].mobile3} />
				</div>
			</div>
			<div onClick={handleScroll} className="arrow container">
				<Link
					to={`/projects/${newPath}`}
					onKeyDown={() => handleNextProject(next + 1)}
					className="arrow-link"
				>
					<i
						onClick={() => handleNextProject(next + 1)}
						className="fa fa-angle-double-right"
					>
						Next Project{" "}
					</i>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Description;
