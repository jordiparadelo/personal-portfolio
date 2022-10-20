import React, { createContext, useContext } from "react";
import { useClientData } from "../hooks/useClientData";

const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const query = [
    '*[_type == "works" && !(_id in path("drafts.**"))]',
    '*[_type == "socialMedia"]',
    '*[_type == "abouts"] |  order(order asc)',
    '*[_type =="experiences"]',
    '*[_type =="workExperience"]',
    '*[_type =="skills"]',
    '*[_type == "testimonials"]',
  ];
  const { data, isFetching } = useClientData(query);

  const [works, socialMedia, about, experiences, workExperiences, skills, testimonials] =
    data;

  return (
    <ClientContext.Provider value={{ works, socialMedia, about, experiences, workExperiences, skills, testimonials, isFetching }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
