import React from "react";
// Styles
import "./Home.scss";
// Components
import { About, Header, Skills, Testimonials, Works, LoadingScreen } from "../../container";

const Home = () => {
  return (
    <main id="Home">
      {/* <LoadingScreen/> */}
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
    </main>
  );
};

export default Home;
