// Styles
import "./Footer.scss";
// Components
import { SocialMedia } from "components";

const Footer = () => (
  <footer id="Footer">
    <div className="app__wrapper">
      <header className="Footer__header">
        <h2>
          <span className="header-top">Get a project?</span>
          <span>Drop me an </span>
          <a className="highlight" href="mailto:im.jordiparadelo@gmail.com">email</a>
        </h2>
      </header>
      <hr />
      <SocialMedia />
    </div>
  </footer>
);

export default Footer;
