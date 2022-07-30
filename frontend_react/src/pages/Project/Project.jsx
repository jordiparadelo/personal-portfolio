import React, { useEffect, useState } from "react";
// Styles
import "./Project.scss";
// Components
import {About,Header,Skills,Testimonials} from "../../container";
// Lib
import { useParams } from 'react-router-dom';
import { client } from "../../clients";

const Project = () => {
  let { projectId } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const query = ``
    client.fetch(query).then((data) => setProject(data));
  },[])

  return (
    <main id="Project">
      Project {projectId}
    </main>
  );
};

export default Project;
