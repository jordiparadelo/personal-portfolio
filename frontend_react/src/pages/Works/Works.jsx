import React, { useEffect, useState } from "react";
// Styles
import "./Works.scss";
// Components
import {About,Header,Skills,Testimonials} from "../../container";
// Lib
import { client } from "../../clients";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query).then((data) => setWorks(data));
  },[])

  return (
    <main id="Works">
      {works?.map((work) => work.title)}
    </main>
  );
};

export default Works;
