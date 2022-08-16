import React from "react";
// Lib
import { Helmet } from "react-helmet";
// Styles
import "./Home.scss";
// Assets
import {images} from '../../constants'
// Components
import { About, Header, Skills, Testimonials, Works } from "../../container";

const Home = () => {
  return (
    <main id="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jordi Paradelo | Web Designer</title>
        <link rel="canonical" href="http://jordiparadelo.com/" />
        <meta name="description" content="Hey there! I'm Jordi – a designer and developer - who specialize on websites and app"/>
        <meta property="og:url" content="https://jordiparadelo.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Hey there! I'm Jordi – a designer and developer - who specialize on websites and app"/>
        <meta property="og:image" content={images.HomeImage}></meta>
      </Helmet>
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
    </main>
  );
};

export default Home;
