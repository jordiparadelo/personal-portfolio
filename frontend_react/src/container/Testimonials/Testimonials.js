import React, { useEffect, useState } from "react";
// Styles
import "./Testimonials.scss";
// Lib
import { client, urlFor } from "../../clients";
// Assets
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isActiveIndex = currentIndex === testimonials[currentIndex];

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  return (
    <section id="Testimonials">
      {testimonials.length && (
        <div className="testimonials__slider">
          <figure className="testimonials__slide">
            <picture className="testimonials__image-cover">
              <img src={urlFor(testimonials[currentIndex]?.imgurl)} />
            </picture>
            <figcaption className="testimonials__description">
              <div className="testimonials__qoute">
                <RiDoubleQuotesL />
                <p>{testimonials[currentIndex]?.feedback}</p>
              </div>
              <div className="testimonials__profile">
                <strong>{testimonials[currentIndex]?.name}</strong>
                <p className="testimonials__profile-job">
                  {testimonials[currentIndex]?.job}
                </p>
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
    </section>
  );
};

export default Testimonials;
