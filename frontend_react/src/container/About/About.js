// Styles
import "./About.scss";
// Assets
import { FaReact, FaFigma, FaSketch } from "react-icons/fa";
import { SiNextdotjs, SiWebflow } from "react-icons/si";
// Components
import { ServicesCards } from "../../components";
// Context
import { useClientContext } from "../../context/ClientContext";


const technologies = [
  {
    name: "react",
    url: "https://reactjs.org/",
    icon: <FaReact />,
  },
  {
    name: "next",
    url: "https://nextjs.org/",
    icon: <SiNextdotjs />,
  },
  {
    name: "webflow",
    url: "https://webflow.com/",
    icon: <SiWebflow />,
  },
  {
    name: "figma",
    url: "https://www.figma.com/",
    icon: <FaFigma />,
  },
  {
    name: "sketch",
    url: "https://www.sketch.com/",
    icon: <FaSketch />,
  },
];

const About = () => {
  const {data: services} = useClientContext()

  return (
    <section id="About" className="about">
      <div className="app__wrapper">
        <div className="about__content">
          <div className="about__title-container">
            <div className="app__section-label">About</div>
            <h2 className="about__title">
              Providing <strong>quality</strong> on all services
            </h2>
            <div className="about__description">
              <p>
                Focus on industry leading technologies so each project build
                with the best practices of the moment
              </p>
            </div>
          </div>
          <div className="about__technologies">
            {technologies.map((technology, index) => (
              <a
                href={technology.url}
                className="about__technology-disc"
                aria-label={technology.name}
                key={`technology-${index}`}
              >
                {technology.icon}
              </a>
            ))}
          </div>
        </div>
        <ServicesCards services={services}/>
      </div>
    </section>
  );
};

export default About;
