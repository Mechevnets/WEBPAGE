import React, { useEffect, useRef, useState } from "react";
import img2 from "../images/bhuvanesh.jpg";
import img1 from "../images/kumaresan.jpg";
import img3 from "../images/sathishkumar.jpg";
import ButtonAnim from "../Components/ButtonAnim";
import ButtonColourcopy from "../Components/ButtonColourcopy";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Faculty = () => {
  const container = useRef(null);
  const label = useRef(null);
  const [model, setmodel] = useState({ active: false, index: 0 });
  const fac = [
    {
      img: img1,
      name: "Dr . Kumaresan G",
      job: "Head of the Department",
      mail: "kumaresan@bitsathy.ac.in",
    },
    {
      img: img2,
      name: "Prof . Bhuvanesh N",
      job: "Faculty Co-ordinator",
      mail: "bhuvanesh@bitsathy.ac.in",
    },
    {
      img: img3,
      name: "Prof . SathishKumar C",
      job: "Faculty Co-ordinator",
      mail: "sathishkumarc@bitsathy.ac.in",
    },
  ];
  const containertwo = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containertwo.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });
      tl.from(".faculty1", {
        opacity: 0,
        x: "-50%",
      });
      tl.from(
        ".faculty2",
        {
          opacity: 0,
          x: "50%",
        },
        "<",
      );
    },
    { scope: containertwo.current },
  );

  return (
    <div
      ref={containertwo}
      id="Contact"
      className=" relative  flex flex-col min-h-[100vh]  overflow-hidden pb-20  text-black items-center justify-center  max-w-[100vw]"
    >
      <div className="  mb-20 px-20 pb-10  sm:px-4  sm:py-5 w-full flex sm:flex-col items-center gap-5  h-full justify-between">
        <div className=" flex flex-col rounded-md bg-background flex-1 sm:py-10 sm:p-5 sm:w-full sm:gap-10  p-10 items-start sm:items-center justify-center gap-4 text-white">
          <p className=" text-2xl uppercase sm:text-center sm:underline sm:underline-offset-4  ">
            Student Co-ordintors
          </p>
          <div className=" flex items-center sm:text-sm  text-sm sm:flex-col sm:gap-2 justify-center gap-20">
            <div className="  flex items-start sm:items-center justify-center poppins gap-2 ">
              <p>Sabarishprasanna J</p>
              <p>8428073083</p>
            </div>
            <div className=" flex items-start  justify-center poppins gap-5 ">
              <p>Shiyam Sundar V</p>
              <p>7695968845</p>
            </div>
          </div>
        </div>
        <div className=" flex  bg-background rounded-md flex-1 sm:flex-col  w-full h-full items-center justify-between sm:gap-10  gap-4 text-white p-10">
          <div className=" flex-col items-start sm:items-center flex justify-center gap-4 ">
            <p className=" text-2xl sm:underline sm:underline-offset-4 uppercase">
              More Details
            </p>
            <div className=" flex items-center text-sm sm:flex-col justify-center gap-5">
              <Link
                to={
                  'https://www.instagram.com/mechonix_bit?igsh=dTU4eWU1M25rcjVp"'
                }
              >
                Instagram
              </Link>
              <Link to={"https://chat.whatsapp.com/FidMN7vGFoi953LrdCwl6J "}>
                Whatsapp
              </Link>
              <a href={"mailto:mechevents@bitsathy.ac.in"}>Email</a>
            </div>
          </div>
          <div className=" flex-col items-start sm:items-center  flex justify-center gap-4">
            <p className=" text-2xl sm:underline sm:underline-offset-4 uppercase">
              Location
            </p>
            <div className=" text-sm flex items-center justify-center gap-20">
              <Link to={"https://maps.app.goo.gl/b15rUoLkjFtqNRTL8"}>
                Google map
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col items-center justify-center ">
        <div className=" flex flex-col items-center  justify-center  sm:px-4  sm:w-full grid-flow-dense w-[60vw] px-32">
          {fac &&
            fac.map((sub, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setmodel({ active: true, img: sub.img });
                }}
                onMouseLeave={() => {
                  setmodel({ active: false, img: null });
                }}
                className=" relative z-20 border-t border-black/20 hover:bg-primary transition-all duration-300 ease-in-out last:border-b cursor-pointer  w-full flex  sm:flex-col sm:px-5 sm:py-5 px-20 items-center py-10 justify-between "
              >
                <div className="  flex items-center gap-10 justify-center">
                  <p className="faculty1 font-medium relative z-20 sm:text-xl text-2xl ">
                    {sub.name}
                  </p>
                </div>
                <p className=" faculty2 relative z-20  uppercase">{sub.job}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
