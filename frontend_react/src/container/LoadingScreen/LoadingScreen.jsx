import React, { useEffect, useState } from "react";
import { useAnimationContext } from "../../context/AnimationContext";

// Styles
import "./LoadingScreen.scss";
// Assets
import { images } from "../../constants";
// Lib
import Lottie from "lottie-react";

const LoadingScreen = () => {
  const { pageLoading, setPageLoading } = useAnimationContext();
  const [fixedScroll, setFixedScroll] = useState(true);

  function handleFixedScroll(condition) {
    const documentDOM = document.documentElement;

    condition
      ? documentDOM.style.setProperty("overflow", "hidden")
      : documentDOM.style.removeProperty("overflow", "hidden");

    setFixedScroll(condition);
  }

  useEffect(() => {
    setPageLoading(pageLoading)
    pageLoading ? handleFixedScroll(true) : handleFixedScroll(false);
  }, [pageLoading]);

  return <div className="LoadingScreen"><Lottie animationData={images.headerAnimation} loop={true} height="500" width="500"/></div>;
};

export default LoadingScreen;
