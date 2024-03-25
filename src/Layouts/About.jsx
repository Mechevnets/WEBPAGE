import React, { useRef } from "react";
import ButtonAnim from "../Components/ButtonAnim";
import ButtonColour from "../Components/ButtonColour";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import logo from '../images/gh.png'
const About = () => {
  const container = useRef(null);
  const text = new SplitType(document.querySelectorAll(".para"), {
    types: "words",
  });
  useGSAP(
    () => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
      tl.from(text.words, {
        scaleY: 0,
        y: -20,
        transformOrigin: "top",
        stagger: 0.1,
      });
      tl.from(".about", {
        scale: 0,
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      id="About"
      className=" flex items-center sm:flex-col justify-center min-h-[80%] sm:py-10 sm:gap-10 py-20 max-w-screen"
    >
      <img src={logo} className=" hidden sm:block  w-32 " />
      <p className=" para text-4xl w-[60%] sm:-mt-10 sm:w-full sm:text-center sm:text-xl leading-snug sm:p-8 p-20">
        Experience the precision and power of our mechanical events. From the
        seamless synchronization of gears to the smooth operation of pistons.
      </p>
      <ButtonColour>
        <div className="about text-white cursor-pointer  flex items-center justify-center font-semibold  text-sm bg-background rounded-full w-52 h-52">
          <ButtonAnim>
            <p className=" relative text-white text-center capitalize p-4 z-30">click down the passes for Registration</p>
          </ButtonAnim>
        </div>
      </ButtonColour>
    </div>
  );
};

export default About;
