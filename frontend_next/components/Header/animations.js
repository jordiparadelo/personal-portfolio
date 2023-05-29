import { gsap, wrap } from "gsap";
import SplitType from "split-type";

export const initAnimation = (mainEl) => {
	const [titleLines, iconArrow, description] = [
		mainEl?.querySelector(".Header__title"),
		mainEl?.querySelector(".iconArrow"),
		mainEl?.querySelector(".Header__description"),
	];

	//   Animations Timeline
	const master = gsap.timeline({
		default: { ease: "power3.out" },
	});

	const titleAnimation = () => {
    let {lines: splittedLines} = new SplitType(titleLines, { types: "lines" });

    // splittedLines = wrapElement(splittedLines, 'span')

		const animation = gsap.from(splittedLines, {
			yPercent: 20,
			opacity: 0,
			stagger: -0.08,
      duration: 1
		});

		return animation;
	};
	const descriptionAnimation = () => {
		const {lines: splittedLines} = new SplitType(description, { types: "lines" });
		const animation = gsap.from(splittedLines, {
			yPercent: 100,
			opacity: 0,
			stagger: -0.08,
		});

		return animation;
	};

	master
  .add(titleAnimation())
  .add(descriptionAnimation());
};


function wrapElement(element, wrapperType) {
  const target =  [...element] 

  target.forEach((element) => {
    const wrapperLocation = element.parentElement
    const wrapper = document.createElement(wrapperType || "div");
    wrapperLocation.appendChild( wrapper.appendChild(element))
    
    console.log({element,wrapper, wrapperLocation})
  })
}