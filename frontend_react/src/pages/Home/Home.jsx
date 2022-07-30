import React from "react";
// Styles
import "./Home.scss";
// Components
import {About,Header,Skills,Testimonials,Works} from "../../container";

const Home = () => {
  return (
    <main id="Home">
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
    </main>
  );
};

export default Home;
