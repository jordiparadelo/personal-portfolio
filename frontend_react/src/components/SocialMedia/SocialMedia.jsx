// Styles
import "./SocialMedia.scss";
// Assets
import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";
// Hooks
import { useClientData } from "../../hooks/useClientData";

const ICONS = {
  FaBehance: <FaBehance />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaDribbble: <FaDribbble />,
};

const SocialMedia = () => {
  const query = '*[_type == "socialMedia"]';
  const { data: socialMedia, isFetching } = useClientData(query);

  return (
    <div className="social-media">
      {!isFetching &&
        socialMedia.map((media) => (
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
