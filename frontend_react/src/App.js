import React from "react";
// Components
import { Navbar } from "./components";
import {About,Footer,Header,Skills,Testimonials,Works,PageNavigation,} from "./container";
// Styles
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
