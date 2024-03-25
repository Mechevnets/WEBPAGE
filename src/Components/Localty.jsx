import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Localty = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".world", {
        rotate: 360,
        rotateZ: 360,
        yoyo: true,
        repeat: -1,
        duration: 5,
      });
    },
    { scope: container },
  );
  return (
    <Link
      to={"https://maps.app.goo.gl/b15rUoLkjFtqNRTL8"}
      className=" absolute top-80 sm:top-60  flex items-center justify-center gap-4 sm:p-2  sm:bg-white  sm:text-xs  text-sm bg-night p-5 text-white rounded-r-full left-0"
    >
      <p className=" sm:hidden ">
        Located <br></br>in the<br></br>{" "}
        <span className=" ">Sathyamangalam</span>
      </p>
      <div
        ref={container}
        className=" rounded-full  bg-black flex items-center justify-center p-3"
      >
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          className="  world text-4xl  text-white"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32.001.887C49.185.887 63.114 14.816 63.113 32 63.114 49.185 49.184 63.115 32 63.113 14.815 63.114.887 49.185.888 32.001.885 14.816 14.815.887 32.001.887zM32 1v62M63 32H1"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M30 1S16 12 16 32s14 31 14 31M34 1s14 11 14 31-14 31-14 31"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M8 12s5 10 24 10 24-10 24-10M8 52s5-10 24-10 24 10 24 10"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Localty;
