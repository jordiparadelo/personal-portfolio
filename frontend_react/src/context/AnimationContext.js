import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useClientContext } from "./ClientContext";
// Lib
import {gsap} from "gsap";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const {isFetching} = useClientContext()
  const [pageLoading, setPageLoading] = useState();
  const [animations, setAnimations] = useReducer((prev, next) => [...prev ,next], []);
  const mainTimeLine = gsap.timeline()

  // useEffect(() => {
  //   setPageLoading(isFetching)

  //   if(!pageLoading) {
  //     console.log(animations)
  //     animations?.forEach(animation => animation())
  //   }
  // }, [isFetching, animations])
  

  return (
    <AnimationContext.Provider value={{pageLoading, setAnimations, mainTimeLine, setPageLoading}}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);
