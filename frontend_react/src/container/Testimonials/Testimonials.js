import React, { useEffect, useState } from "react";
// Styles
import "./Testimonials.scss";
// Lib
import { client, urlFor } from "../../clients";
// Assets
import { RiDoubleQuotesL } from "react-icons/ri";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
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

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

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
        {testimonials.length && (
          <div className="testimonials__slider">
            <figure className="testimonials__slide">
              <figcaption className="testimonials__description">
                <div className="testimonials__quote-container">
                  <strong className="testimonials__company">
                    {testimonials[currentIndex].company}
                  </strong>
                  <div className="testimonials__qoute">
                    <RiDoubleQuotesL />
                    <p>{testimonials[currentIndex]?.feedback}</p>
                  </div>
                </div>
                <div className="testimonials__profile">
                  <img
                    src={urlFor(testimonials[currentIndex]?.imgurl)}
                    className="testimonials__avatar"
                  />
                  <div className="testimonials__profile-container">
                    <strong>{testimonials[currentIndex]?.name}</strong>
                    <p className="testimonials__profile-job">
                      {testimonials[currentIndex]?.job}
                    </p>
                  </div>
                </div>

                <div className="testimonials__slider-index-container">
                  {testimonials?.map((testimonial, index) => (
                    <button
                      className={`testimonials__slider-index ${
                        index === currentIndex ? "active" : ""
                      }`}
                      key={testimonial.name}
                      onClick={() => setCurrentIndex(index)}
                    ></button>
                  ))}
                </div>
              </figcaption>
            </figure>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
