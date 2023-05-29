import { useEffect, useRef } from "react";
import gsap from "gsap";

const useAnimation = (animation) => {
	const animationRef = useRef(animation);

    function animate() {return animation}

	useEffect(() => {
		animate();
	}, [animationRef]);

	return [animation];
};
