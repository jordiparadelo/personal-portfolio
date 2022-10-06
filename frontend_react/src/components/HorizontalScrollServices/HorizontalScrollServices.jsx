import React, { useState } from "react";
// Styles
import "./HorizontalScrollServices.scss";

const HorizontalScrollServices = ({ setActiveService }) => {
  
  // Methods
  function handleActiveService(event) {
    const {currentTarget} = event
    const serviceSelected = currentTarget.dataset.index;
    setActiveService(serviceSelected)
  }

  return (
    <div className="HorizontalScroll">
      <button
        className="HorizontalScroll__row"
        data-index="0"
        onClick={handleActiveService}
      >
        <div className="line-wrapper">
          <p>Themes*</p>
          <p className="highlight">Web Design*</p>
          <p className="outline">Stylization*</p>
        </div>
      </button>
      <button
        className="HorizontalScroll__row"
        data-index="1"
        onClick={handleActiveService}
      >
        <div className="line-wrapper">
          <p className="outline">Development*</p>
          <p>Frontend*</p>
          <p className="highlight">Web enhacement*</p>
        </div>
      </button>
      <button
        className="HorizontalScroll__row"
        data-index="2"
        onClick={handleActiveService}
      >
        <div className="line-wrapper">
          <p>UI / UX*</p>
          <p className="highlight">Usability*</p>
          <p className="outline">User Testing*</p>
        </div>
      </button>
    </div>
  );
};

export default HorizontalScrollServices;
