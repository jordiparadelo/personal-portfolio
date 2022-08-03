import React, { useState } from "react";

const WorksFilters = ({ filters, works, setFilterWork }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Methods
  function handleWorkFilter(filter) {
    setActiveFilter(filter);

    filter === "All" 
      ? setFilterWork(works)
      : setFilterWork(works.filter((work) => work.tags.includes(filter)));
  }

  return (
    <div className="works__filter">
      {filters.map((filter, index) => (
        <button
          className={`works__fiter-item ${ activeFilter === filter ? "active" : "" }`}
          key={index}
          onClick={() => handleWorkFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default WorksFilters;
