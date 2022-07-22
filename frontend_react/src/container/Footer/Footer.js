import React, { useState } from "react";
// Styles
import "./Footer.scss";
// Components
import { ContactForm } from "../../components";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="app__wrapper">
        <header className="app__header">
          <h2>
            Get a project? <br /> Let's talk.
          </h2>
          <p>
            You can just contact me by email o filling the following contact
            form
          </p>
        </header>
          <ContactForm/>
      </div>
    </footer>
  );
};

export default Footer;
