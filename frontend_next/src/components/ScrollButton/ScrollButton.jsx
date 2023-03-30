import React from "react";
// Utils
import { scrollToTarget } from "../../utils";
// Styles
import "./ScrollButton.scss";

const ScrollButton = () => {
  return (
    <button className="ScrollButton" onClick={(event)=> scrollToTarget(event, "#Services")}>
      <svg
        className="iconArrow"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="49.5" stroke="#D9D9D9" />
        <path d="M50 21V79" stroke="white" />
        <path d="M30 55L50 79" stroke="white" />
        <path d="M70 55L50 79" stroke="white" />
      </svg>
    </button>
  );
};

export default ScrollButton;
