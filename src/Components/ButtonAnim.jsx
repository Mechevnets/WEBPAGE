import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ButtonAnim = ({ children }) => {
  const magnetic = useRef(null);
  useEffect(() => {
    const xto = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: 'elastic.out(1,0.3)',
});
const yto = gsap.quickTo(magnetic.current, "y", {
  duration: 1,
  ease: "elastic.out(1,0.3)",
});
    magnetic.current.addEventListener("mousemove", (e) => {
        const {clientX, clientY} = e
        const {width, height , top , left} = magnetic.current.getBoundingClientRect()
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xto(x * 0.5)
        yto(y * 0.5)
    });
    magnetic.current.addEventListener("mouseleave", (e) => {
        xto(0);
        yto(0);
    });
  });
  return React.cloneElement(children, { ref: magnetic });
};

export default ButtonAnim;
