import { gsap } from "gsap";

export const initAnimation = (mainEl) => {
    // console.log(mainEl)
    const masterTl = gsap.timeline({default: {duration: 1000, ease: "power3.out" }})

    // gsap.set(mainEl, {
    //     maxHeight: 0,
    //     overflow: 'hidden',
    // })
    gsap.set(mainEl.children, {
        yPercent: 100,
        opacity: 0
    })

    // masterTl.to(mainEl, {
    //     height: '100%',
    //     maxHeight: '200%',
    //     duration: 2
    // })
    masterTl.to(mainEl.children, {
        yPercent: 0,
        opacity: 1
    })
}