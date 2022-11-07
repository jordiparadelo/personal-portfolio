import { useState } from "react";
// Styles
import "./Testimonials.scss";
// Assets
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Components
import { TestimonialsSlider } from "components";
// Context
import { useClientContext } from "context/ClientContext";

const Testimonials = () => {
  const { testimonials } = useClientContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Methods
  function handleCurrenSlide(currentSlide) {
    const slideLength = testimonials?.length
    
    const SLIDES = {
      'next': () => setCurrentIndex(
        (prevState) => (prevState + 1) % slideLength,
      ),
      'prev': () => setCurrentIndex((prevState) =>
        prevState - 1 < 0 ? slideLength - 1 : prevState - 1
      ),
    };
    const slide = SLIDES[currentSlide]

    slide()
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
        <TestimonialsSlider
          testimonials={testimonials}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </section>
  );
};

export default Testimonials;
