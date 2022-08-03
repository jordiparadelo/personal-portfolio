import React, { createContext, useContext, useEffect, useState } from "react";
import { useClientData } from "../hooks/useClientData";

const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
    const query = '*[_type == "works"]';
    const { data, isFetching } = useClientData(query);

  return (
    <ClientContext.Provider value={{ data, isFetching }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
