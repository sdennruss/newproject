import React from "react";
import Projects from "../projects/projects";
import SDR from "./assets/sdr.jpg";
import About from "./about";
import Contact from "../contact/contact";

const Homepage = () => {
	return (
		<React.Fragment>
			<div id="home" className="home-container">
				<div className="image-container">
					<img
						className="shandennruss"
						src={SDR}
						alt="Shanice Dennis-Russell"
					/>
				</div>
				<About />
			</div>

			<Projects />
			<Contact />
		</React.Fragment>
	);
};

export default Homepage;
