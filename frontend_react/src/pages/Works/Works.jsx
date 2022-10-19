import React, { useEffect, useState } from "react";
// Styles
import "./Works.scss";
// hooks
import { useClientData } from "hooks/useClientData";

const Works = () => {
  const query = '*[_type == "works"]'
  const {data: works, isFetching} = useClientData(query);

  return (
    <main id="Works">
      {works?.map((work) => work.title)}
    </main>
  );
};

export default Works;
