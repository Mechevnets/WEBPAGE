import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import ButtonAnim from "./ButtonAnim";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import ButtonColour from "./ButtonColour";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const [state, setstate] = useState(true);
  const container = useRef();
  const navigate = useNavigate()
  useGSAP(
    () => {
      gsap.set(".icon", { opacity: 0 });
      gsap.to(".icon", {
        scrollTrigger: {
          trigger: ".icon",
          start: "200px 20%",
          end: "300px 30%",
          toggleActions: "restart play reverse reverse",
        },
        opacity: 1,
      });
    },
    { scope: container },
  );
  const { contextSafe } = useGSAP({ scope: container });
  const navcontainer = contextSafe(() => {
    setstate(!state);
    const tl = gsap.timeline();
    const cl = gsap.timeline();
    state
      ? tl
          .to(".box", { borderRadius: "0%" })
          .to(".box", { x: "-100%" }, ">-0.5")
      : cl
          .to(".box", { x: "0%" })
          .to(".box", { borderRadius: "50%" }, ">-0.40");
  });

  return (
    <div ref={container} className="">
      <div className=" fixed top-0 right-0 z-[50] p-10">
        <ButtonColour>
          <div
            onClick={navcontainer}
            className={` ${
              state
                ? " bg-background text-white  duration-200 transition-all ease-in-out"
                : " border-primary text-white bg-primary duration-200 transition-all ease-in-out"
            }  rounded-full p-6 text-2xl cursor-pointer  icon`}
          >
            {" "}
            {state ? (
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                className=" relative z-20"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
              </svg>
            ) : (
              <svg
                fill="none"
                viewBox="0 0 15 15"
                height="1em"
                width="1em"
                className=" relative z-20"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  className=""
                  d="M12.854 2.854a.5.5 0 00-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 10-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 00.708.708L7.5 8.207l4.646 4.647a.5.5 0 00.708-.708L8.207 7.5l4.647-4.646z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </ButtonColour>
      </div>
      <div className=" fixed  -right-[40%]  sm:-right-[200%] top-0 z-40 box nav h-[100vh] px-20 w-[550px] bg-background flex gap-20 flex-col items-start justify-center ">
        <div className=" flex flex-col items-start justify-center gap-5">
          <p className=" text-white uppercase  font-semibold  text-sm">
            Navigation
          </p>
          <div className="  *:cursor-pointer text-white text-7xl flex flex-col gap-3 items-start justify-center ">
            <p  onClick={() => navigate('/')}>Home</p>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="Events"
            >
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
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="footer"
            >
              Web
            </Link>
          </div>
        </div>
        <div className=" flex items-start text-white justify-center flex-col gap-5">
          <p className=" text-secondary  uppercase text-sm font-semibold">
            Social
          </p>

          <div className=" font-semibold flex text-white items-center justify-center gap-5">
            <ButtonAnim>
              <a
                className=" cursor-pointer"
                href="https://www.instagram.com/mechonix_bit?igsh=dTU4eWU1M25rcjVp"
              >
                Instagram
              </a>
            </ButtonAnim>
            <ButtonAnim>
              <a
                className=" cursor-pointer"
                href="mailto:sanjaigovindraj@gmail.com"
              >
                Gmail
              </a>
            </ButtonAnim>
            <ButtonAnim>
              <a
                className=" cursor-pointer"
                href="https://chat.whatsapp.com/FidMN7vGFoi953LrdCwl6J "
              >
                Whatsapp
              </a>
            </ButtonAnim>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
