// Styles
import "./SocialMedia.scss";
// Assets
import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";
// Context
import { useClientContext } from "context/ClientContext";

const ICONS = {
  FaBehance: <FaBehance />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaDribbble: <FaDribbble />,
};

const SocialMedia = () => {
  const { socialMedia } = useClientContext();

  return (
    <div className="social-media">
      {socialMedia?.map((media) => (
        <a
          href={media.link}
          target="_blank"
          rel="noreferrer"
          aria-label={media.name}
          key={`media-${media.name}`}
          className="social-media__link"
        >
          {ICONS[media.icon]}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
