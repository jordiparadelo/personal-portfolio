import React, { useEffect, useState } from "react";
// Styles
import "./SocialMedia.scss";
// Assets
import { FaBehance, FaLinkedinIn, FaDribbble } from "react-icons/fa";
// Data
import { client } from "../../clients";

const ICONS = {
  FaBehance: <FaBehance />,
  FaLinkedinIn: <FaLinkedinIn />,
  FaDribbble: <FaDribbble />,
};

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    const query = '*[_type == "socialMedia"]';
    client.fetch(query).then((data) => setSocialMedia(data));
  }, []);

  return (
    <div className="social-media">
      {socialMedia.map((media) => (
        <a
          href={media.link}
          target="_blank"
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
