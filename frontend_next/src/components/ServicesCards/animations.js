import { gsap } from "gsap";

const masterTl = gsap.timeline({
  default: { duration: 1000, ease: "power3.out" },
});
export const initAnimation = (mainEl) => {
  gsap.set(mainEl.children, {
    yPercent: 100,
    opacity: 0,
  });


  masterTl.to(mainEl.children, {
    yPercent: 0,
    opacity: 1,
  });
};

export const restartAnimation = () => {
  masterTl.kill()
  masterTl.progress(0).restart(true);
};

