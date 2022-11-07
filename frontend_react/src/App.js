import { useEffect } from "react";
// Components
import { Navbar } from "components";
import { Footer } from "container";
// Styles
import "App.scss";
//lib
import { Routes, Route } from "react-router-dom";
import { Home, Portfolio, ProjectPage } from "pages";

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
