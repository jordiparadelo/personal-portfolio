import React from "react";
// Styles
import "./Home.scss";
// Components
import { Services, Header, Skills, Testimonials, Works, LastProject } from "../../container";

const Home = () => {
  return (
    <main id="Home">
      <Header />
      <LastProject />
      <Services />
      <Works />
      <Skills />
    </main>
  );
};

export default Home;
