import React from "react";

const About = () => {
	return (
		<React.Fragment>
			<div className="about-container">
				<p className="about-para">
					Hello! Shanice here. Frontend React Developer hailing from Toronto,
					Canada, <span className="dev"> {` < /developing >`}</span> web
					applications using HTML, CSS, JavaScript, and React.js. Behind the
					glasses is a gal who transitioned from marketing Auto Shows to
					becoming a self-taught developer who fancies playing with animals,
					reading books, rollerblading, and indulging in UI design fundamentals.
					If you're having a rough day and keen on a good laugh, my coding
					journey blog can be found on
					<a
						href="https://uiwebdevcodinglog.tumblr.com/"
						className="about-para-blog"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						Tumblr.
					</a>
				</p>
			</div>
		</React.Fragment>
	);
};

export default About;
