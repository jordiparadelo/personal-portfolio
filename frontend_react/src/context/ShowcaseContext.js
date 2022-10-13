import React, { createContext, useContext, useState } from "react";
import { useClientData } from "../hooks/useClientData";

const ShowcaseContext = createContext();

export const ShowcaseProvider = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ShowcaseContext.Provider value={{ currentIndex, setCurrentIndex}}>
      {children}
    </ShowcaseContext.Provider>
  );
};

export const useShowcaseContext = () => useContext(ShowcaseContext);
