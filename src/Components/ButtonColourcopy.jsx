import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ButtonAnim from "./ButtonAnim";

const ButtonColourcopy = ({ children, ...attributes }) => {
  const circle = useRef();
  const timeline = useRef();
  let timeoutid = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter",
      )
      .to(circle.current, { top: "-150%", duration: 0.25 }, "exit");
  }, []);
  const manageenter = () => {
    if (timeoutid) {
      clearTimeout(timeoutid);
      timeoutid = null;
    }
    timeline.current.tweenFromTo("enter", "exit");
  };
  const manageleave = () => {
    timeline.current.play();
  };
  return (
    <ButtonAnim>
      <div
        className=" relative rounded-xl overflow-hidden "
        {...attributes}
        onMouseEnter={(e) => manageenter(e)}
        onMouseLeave={(e) => manageleave(e)}
      >
        {children}
        <div
          ref={circle}
          className=" w-[100%] h-[150%]  bg-primary  absolute  rounded-2xl top-[100%] "
        ></div>
      </div>
    </ButtonAnim>
  );
};

export default ButtonColourcopy;
