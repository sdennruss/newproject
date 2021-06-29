import React, { useState } from "react";
import About from "./about";
import LongAbout from "./longAbout";

const ParagraphToggle = () => {
  const [toggle, setToggle] = useState(false);
  const [moveToggle, setMoveToggle] = useState("circle");
  const [long, setLong] = useState("p-toggle");

  const handleToggle = (open) => {
    setToggle(open);
    open ? setMoveToggle("circle-moved") : setMoveToggle("circle");
    open ? setLong("p-toggle-long") : setLong("p-toggle");
  };

  const changeToggleText = toggle ? "Long" : "TLDR";
  return (
    <React.Fragment>
      <div className="toggle-container">
        <div className="p-toggle-container">
          <button className={long}>{changeToggleText}</button>
          <span
            onClick={() => handleToggle(!toggle)}
            className={moveToggle}
          ></span>
        </div>
        <About />
        {toggle && <LongAbout />}
      </div>
    </React.Fragment>
  );
};

export default ParagraphToggle;
