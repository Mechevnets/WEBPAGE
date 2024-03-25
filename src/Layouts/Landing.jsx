import React from "react";
import ScrollMenu from "../Components/ScrollMenu";
import Localty from "../Components/Localty";
import ButtonAnim from "../Components/ButtonAnim";
import event from "../images/final.mp4";
import logo from "../images/logogo.png";
import eve from "../images/evelogo.png";
import { Link } from "react-scroll";
const Landing = () => {
  return (
    <div
      id="Home"
      className=" relative font-semibold overflow-hidden text-white bg-landing sm:min-h-[55vh]  sm:bg-black min-h-screen max-w-screen"
    >
      <img
        src={logo}
        className=" sm:w-20 absolute  w-40 z-30 sm:left-60  sm:hidden  rounded-md  p-4 left-28 top-32"
      />
      <img
        src={eve}
        className=" sm:w-28 absolute  w-56 z-30 sm:right-6 sm:hidden   rounded-md p-4 right-24 top-14"
      />
      <div className="  sm:h-auto absolute  sm:top-20   w-full h-full ">
        <video
          src={event}
          loop
          muted
          autoPlay
          className=" sm:scale-150 w-full h-full object-cover "
        />
      </div>
      <div className=" relative  w-full flex items-center justify-between p-10 sm:px-5 px-20 ">
        <ButtonAnim>
          <div className="  flex items-center cursor-pointer justify-center sm:text-xs gap-2 ">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className=" text-2xl"
            >
              <path
                fill="currentColor"
                d="M13.392 10.436l1.419-1.418a4 4 0 10.176 5.798l-1.313-1.313h-.21a2 2 0 11-.073-3.067z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a7 7 0 110 14 7 7 0 010-14z"
                clipRule="evenodd"
              />
            </svg>
            <p className=" font-semibold">
              Code by <span className="">Atman Sanjai</span>
            </p>
          </div>
        </ButtonAnim>
        <div className=" sm:hidden flex items-center justify-center *:cursor-pointer gap-10  ">
          <Link spy={true} smooth={true} offset={50} duration={500} to="About">
            About
          </Link>
          <Link spy={true} smooth={true} offset={50} duration={500} to="Events">
            Events
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="Contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <Localty />
    </div>
  );
};

export default Landing;
