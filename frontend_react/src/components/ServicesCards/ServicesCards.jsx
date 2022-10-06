import React, { useEffect, useState } from "react";
import Card from "./Card";

const ServicesCards = ({ services, activeService }) => {
  // const [activeServices, setActiveServices] = useState();
  // Methods
  function handleClick(event) {
    const { currentTarget } = event;
    const index = currentTarget.dataset["index"];
    currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    // setActiveServices(services[index]);
  }

  return (
    <div className="ServicesCards">
      {services?.map((service, index) => (
        <Card service={service} key={index} index={index} activeService={activeService}/>
      ))}
    </div>
  );
};

export default ServicesCards;
