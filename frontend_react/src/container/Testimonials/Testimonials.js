import React, { useState } from "react";
// Styles
import "./Testimonials.scss";
// Assets
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Hooks
import {useClientData} from "../../hooks/useClientData"
import { TestimonialsSlider } from "../../components";

const Testimonials = () => {
  const query = '*[_type == "testimonials"]';
  const {data: testimonials} = useClientData(query)
  const [currentIndex, setCurrentIndex] = useState(0);
  const isActiveIndex = currentIndex === testimonials[currentIndex];

  // Methods
  function handleCurrenSlide(currentSlide) {
    switch (currentSlide) {
      case "next":
        setCurrentIndex((prevState) => (prevState + 1) % testimonials.length);
        break;
      case "prev":
        setCurrentIndex((prevState) =>
          prevState - 1 < 0 ? testimonials.length - 1 : prevState - 1
        );
        break;
    }
  }

  return (
    <section id="Testimonials">
      <div className="app__wrapper">
        <header className="app__header">
          <div className="app__section-label">Testimonials</div>
          <h2>What others are saying</h2>
          <div className="testimonials__slider-buttons">
            <button
              aria-label="previus slide"
              onClick={() => handleCurrenSlide("prev")}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              aria-label="next slide"
              onClick={() => handleCurrenSlide("next")}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </header>
        <TestimonialsSlider testimonials={testimonials} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      </div>
    </section>
  );
};

export default Testimonials;
