// Styles
import "./HorizontalScrollServices.scss";
// Const
import { servicesObj } from "./constants.js";
// hooks
import useEventListener from "hooks/useEventListener";

const HorizontalScrollServices = ({ setActiveService, activeService }) => {

  // Methods
  function closeActiveService({ target }) {
    const hasButtonSelected = target.closest('button')?.classList.contains('HorizontalScroll__row') || null
    if(hasButtonSelected) return
    // console.log(hasButtonSelected)
    setActiveService(null);
  }
  function closeByEsc({ key }) {
    if(!key) return
    key.includes("Escape") && closeActiveService()
  }

   // Add event listener using our hook
   useEventListener("click", closeActiveService, document);
   useEventListener("keyup", closeByEsc);

  return (
    <div className="HorizontalScroll">
      {Object.values(servicesObj).map((services, index) => (
        <button
          className="HorizontalScroll__row"
          data-selected={index === activeService}
          onClick={() => setActiveService(index)}
          key={index}
        >
          <div className="line-wrapper">
            {Object.entries(services).map(([className, value], index) => {
              return (
                <p className={className} key={`${index} ${value}`}>
                  {value}
                </p>
              );
            })}
          </div>
        </button>
      ))}
    </div>
  );
};

export default HorizontalScrollServices;
