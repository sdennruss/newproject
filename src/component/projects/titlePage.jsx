import React from "react";

const TitlePage = ({ index, details }) => {
  return (
    <div className="inner-three-container">
      <p className="three title">{details[index].title} </p>
    </div>
  );
};

export default TitlePage;
