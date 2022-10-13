import { useLayoutEffect, useRef, useState } from "react";
// Styles
import "./Services.scss";
// Components
import { ServicesCards, HorizontalScrollServices } from "../../components";
// Context
import { useClientContext } from "../../context/ClientContext";
// Animations
import { initAnimation } from "./animations.js";

const Services = () => {
  const { about: services } = useClientContext();
  const [activeService, setActiveService] = useState(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    sectionRef && initAnimation(sectionRef.current);
  }, []);

  return (
    <section id="Services" ref={sectionRef}>
      <div className="app__wrapper">
        <hr />
        <header className="app__header">
          <h2 className="app__header-title">Services</h2>
          <div className="Services__description">
            <p>
              Focus on industry leading technologies so each project build with
              the best practices of the moment
            </p>
          </div>
        </header>
        <div className="Services__container">
          <HorizontalScrollServices setActiveService={setActiveService} />
          <ServicesCards services={services} activeService={activeService} />
        </div>
      </div>
    </section>
  );
};

export default Services;
