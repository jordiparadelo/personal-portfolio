// Assets
import { RiDoubleQuotesL } from "react-icons/ri";
import { urlFor } from "../../clients";

const TestimonialsSlider = ({ testimonials, currentIndex, setCurrentIndex }) =>
  testimonials.length && (
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
              alt={testimonials[currentIndex]?.name}
              width="48" height="48"
              loading="lazy"
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
  );

export default TestimonialsSlider;
