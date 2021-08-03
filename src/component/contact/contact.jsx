import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="all-contacts-container">
        <div className="inner-three-container">
          <p className="three one">Contact</p>
          <p className="three two">Contact</p>
          <p className="three four">Contact</p>
        </div>
        <div className="contact-details-container">
          <div className="w-t-container">
            <h2 className="work-together">Interested in working together?</h2>
          </div>
          <div className="contact-summary-container">
            <p className="contact-summary">
              Visit my contact page to see if you feel my values and your
              goals/missions align.
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
