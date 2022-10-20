import React, { useState } from "react";

const WorksFilters = ({ filters, works, setFilterWork }) => {
  const [activeFilter, setActiveFilter] = useState("New");
  // Methods
  function getWorksByTag(tag) {
    if (!tag || typeof tag !== "string") return;
    const filteredWorks = works?.filter((work) => work.tags?.includes(tag));
    if (filteredWorks?.lenght === 0) return;
    return filteredWorks;
  }

  function handleWorkFilter(filter) {
    setActiveFilter(filter);
    console.log({filter})

    filter === "New"
      ? setFilterWork(works)
      : setFilterWork(getWorksByTag(filter));
  }

  return (
    works && (
      <div className="WorksFilters">
        {filters.map((filter, index) => (
            <button
              key={filter+index}
              className={`WorksFilters__fiter-item ${
                activeFilter == filter ? "active" : ""
              }`}
              onClick={() => handleWorkFilter(filter)}
            >
              {filter}
              <span className="WorksFilters__projects-number">{`( ${
                filter === "New" ? works?.length : getWorksByTag(filter).length
              } )`}</span>
            </button>
        ))}
        <button
          className="WorksFilters__fiter-item"
        >
          All
        </button>
      </div>
    )
  );
};

export default WorksFilters;
