import React from "react";
// Styles
import "./Home.scss";
// Components
import { Services, Header, Experience, Testimonials, Works, LastProject } from "container";

const Home = () => {
  return (
    <main id="Home">
      <Header />
      <LastProject />
      <Services />
      <Works />
      <Experience />
    </main>
  );
};

export default Home;
