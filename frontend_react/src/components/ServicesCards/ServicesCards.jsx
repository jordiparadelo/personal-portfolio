import Card from "./Card";

const ServicesCards = ({ services, activeService }) => {
  return (
    <div className="ServicesCards">
      {services?.map((service, index) => (
        <Card service={service} key={index} index={index} activeService={activeService}/>
      ))}
    </div>
  );
};

export default ServicesCards;
