import React, { useEffect } from "react";
// Components
import { Navbar } from "./components";
import {About,Footer,Header,Skills,Testimonials,Works} from "./container";
// Styles
import "./App.scss";

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
