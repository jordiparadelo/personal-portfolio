import { gsap } from "gsap";

export function useSelector() {
  const ref = useRef();
  const $ = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [$, ref];
}
