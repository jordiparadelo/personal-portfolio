// Styles
import "./Footer.scss";
// Components
import { ContactForm, SocialMedia } from "../../components";
import { images } from "../../constants";

const Footer = () => (
  <footer id="Footer">
    <div className="app__wrapper">
      <div className="footer__body">
        <header className="app__header">
          <h2>
            Get a project? <br /> Let's talk.
          </h2>
          <p>
            You can just contact me by email o filling the following contact
            form
          </p>
          <a
            className="footer__email"
            href="mailto:im.jordiparadelo@gmail.com?subject=🚀 New proposal  for [Web design, Development, App]"
          >
            im.jordiparadelo@gmail.com
          </a>
        </header>
        <ContactForm />
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          <img src={images.logoSquare} alt="logo" width="56" height="56" loading="lazy"/>
          <p>
            Designed and developed by <br />
            <strong>Jordi Paradelo</strong>
          </p>
        </div>
        <SocialMedia />
      </div>
    </div>
  </footer>
);

export default Footer;
