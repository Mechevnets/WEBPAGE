import React, { useEffect, useRef, useState } from "react";
import ButtonColour from "../Components/ButtonColour";
import ButtonAnim from "../Components/ButtonAnim";
import gsap from "gsap";
import img1 from "../images/3d-cartoon-scene-depicting-variety-people-multitasking (1).jpg";
import img2 from "../images/3d-cartoon-scene-depicting-variety-people-multitasking (2).jpg";
import img3 from "../images/3d-cartoon-scene-depicting-variety-people-multitasking.jpg";
import img4 from "../images/person-using-ar-technology-their-daily-occupation.jpg";
import img5 from "../images/view-3d-geek-with-tablet.jpg";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";
import Navbar from "../Components/Navbar";
const Explore = () => {
  const events = [
    {
      name: "Presentra",
      type: "PAPER PRESENTATION",
      day: "15-04-24",
      link: "https://docs.google.com/document/d/1XTbT_VPfi_t3buTskXbrK0g8VIBUm-jxmyV0Dlg5eBw/edit?usp=sharing",
      img: img1,
    },
    {
      name: "Mech Expo",
      type: "PROJECT PRESENTATION",
      day: "15-04-24",
      link: "https://docs.google.com/document/d/1RpIndLP4l9HRM3KEonoGMAp955Nr6vm4GalPTd8Kjrg/edit?usp=drivesdk",
      img: img2,
    },
    {
      name: "DesignerX",
      type: " CAD MODELLING",
      day: "15-04-24",
      link: "https://docs.google.com/document/d/1gkF2uXnXDNw5JyPOMiGGcAqLDGU8puXZ-6aS8M8BTD8/edit?usp=sharing",
      img: img3,
    },

    {
      name: "Connections ",
      type: "Non-Technical",
      day: "15-04-24",
      link: "https://docs.google.com/document/d/1C6guLwXYaxZp4TyBJSKdhwtkpnD6e6_77Jnsg29HA9U/edit?usp=sharing",
      img: img4,
    },
    {
      name: "Rapid Quiz ",
      type: "Non-Technical",
      day: "16-04-24",
      link: "https://docs.google.com/document/d/1C6guLwXYaxZp4TyBJSKdhwtkpnD6e6_77Jnsg29HA9U/edit?usp=sharing",
      img: img4,
    },
    {
      name: "Mr.Mechanic ",
      type: "Assembling and Dismantling",
      day: "16-04-24",
      link: "https://docs.google.com/document/d/1C6guLwXYaxZp4TyBJSKdhwtkpnD6e6_77Jnsg29HA9U/edit?usp=sharing",
      img: img4,
    },
    {
      name: "ModelX ",
      type: "Prototype Modelling",
      day: "16-04-24",
      link: "https://docs.google.com/document/d/1C6guLwXYaxZp4TyBJSKdhwtkpnD6e6_77Jnsg29HA9U/edit?usp=sharing",
      img: img4,
    },
  ];
  const [model, setmodel] = useState({ index: null, active: false });
  useEffect(() => {});
  const container = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" max-w-[100vw] min-h-[100vh] overflow-hidden  bg-white text-black text-xl  sm:text-xs ">
      <div className="  w-full flex items-center justify-between sm:p-5 p-10 ">
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
        <div className=" *:cursor-pointer sm:hidden flex items-center justify-center gap-10  ">
          <ButtonAnim>
            <p>About</p>
          </ButtonAnim>
          <ButtonAnim>
            <p>Events</p>
          </ButtonAnim>
          <ButtonAnim>
            <p>Contact</p>
          </ButtonAnim>
        </div>
      </div>
      <div className=" sm:p-5 p-20">
        <div className=" sm:p-4 sm:-mt-0 -mt-28 p-20">
          <p className=" sm:text-2xl w-2/3 sm:w-full text-8xl">
            Bringing next level Innovation
          </p>
        </div>
        <div>
          <div className=" w-full grid grid-cols-3 sm:gap-4 sm:grid-cols-1 gap-10">
            {events &&
              events?.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="   bg-black  text-white transition-all rounded-xl duration-300 ease-in-out flex-col w-full items-start p-5 sm:p-5  flex justify-between"
                    onMouseEnter={() => {
                      setmodel({
                        index: index,
                        active: true,
                      });
                    }}
                    onMouseLeave={() => {
                      setmodel({
                        index: null,
                        active: false,
                      });
                    }}
                  >
                    <div className=" h-[50vh] w-full sm:h-[30vh] rounded-xl   overflow-hidden flex items-center justify-center  bg-background/50">
                      <img
                        src={item.img}
                        alt={item.name}
                        className=" h-full w-full object-cover "
                      />
                    </div>
                    <h1 className=" capitalize text-4xl sm:text-xl py-5 mt-5 border-b-2 border-white w-full ">
                      {item.name}
                    </h1>
                    <div className=" flex w-full justify-between sm:text-sm  text-sm mt-5 items-center">
                      <p className=" capitalize gap-2 flex items-center justify-center">
                        {item.type}
                      </p>
                      <p className=" gap-2 flex poppins items-center justify-center">
                        {item.day}
                      </p>
                    </div>
                  </a>
                );
              })}
          </div>
          <model />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
