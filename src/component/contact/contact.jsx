import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<React.Fragment>
			<div className="banner-container">
				<p className="project-banner">
					Con
					<br />
					tact.
				</p>
				<div id="contact" className="contact-names-container">
					<div className="w-t-container">
						<h2 className="work-together">Interested in working together?</h2>
					</div>
					<div className="contact-summary-container">
						<p className="contact-summary">
							Visit my contact page to see if you feel my values and your goals
							align.
						</p>
					</div>
					<div className="contact-button-container">
						<Link to="/contact" className="contact-button">
							More Details
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
