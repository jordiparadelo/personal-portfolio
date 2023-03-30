"use client"

import { useEffect, useRef } from "react";
// Styles
import "./PortfolioCard.scss";
// Lib
import Link from 'next/link';
import { urlFor } from "../../clients";
// Animations
import { initAnimation, hasAnimationComplete } from "./animations.js";

const PortfolioCard = ({ data, index , setAnimationEnd}) => {
  let protfolioCard = useRef(null);

  useEffect(() => {
    data && initAnimation(protfolioCard);
  }, [data]);

  useEffect(() => {
    // masterTl && masterTl.onComplete((progress) => {console.log(progress)})
    setAnimationEnd(hasAnimationComplete)
  },[hasAnimationComplete])

  return (
    <article
      className="PortfolioCard"
      ref={(current) => (protfolioCard = current)}
      data-index = {index}
    >
      <figure className="PortfolioCard__cover">
        <Link href={`/portfolio/${data.slug.current}`}>
          <img
            src={urlFor(data.details.imgUrl)}
            width="500"
            height="500"
            alt={data.blurb}
          />
        </Link>
      </figure>
      <div className="PortfolioCard__description">
        <div className="detail">{data.title}</div>
        <h2 className="title">{data.details.client}</h2>
        <Link href={`/portfolio/${data.slug.current}`} className="link">View Project</Link>
      </div>
    </article>
  );
};

export default PortfolioCard;
