import React, { useRef } from "react";
import ButtonColour from "../Components/ButtonColour";
import img2 from "../images/silver.jpg";
import img1 from "../images/[https___freepicdownloader.com_]-gold-texture-background-with-shiny-smooth-texture-mesh-color-metallic-graphic-design-element-large";
import ButtonAnim from "../Components/ButtonAnim";
import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Category = () => {
  const navigate = useNavigate();
  const schema = [
    {
      name: "Silver Pass",
      tech: "2",
      nontech: "1",
    },
    {
      name: "Gold Pass",
      tech: "3",
      nontech: "2",
    },
    {
      name: "Silver Pass",
      tech: "2",
      nontech: "1",
    },
    {
      name: "Gold Pass",
      tech: "3",
      nontech: "2",
    },
  ];
  const containerone = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerone.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });
      tl.from(".frame1", {
        y: "50%",
        x: "-50%",
        opacity: 0,
      });
      tl.from(
        ".frame2",
        {
          y: "50%",
          x: "50%",
          opacity: 0,
        },
        "<",
      );
    },
    { scope: containerone.current },
    useGSAP(()=> {
      gsap.from('.button',{
        scrollTrigger : {
          trigger :  containerone.current,
          start : 'top 40%',
          end : 'top 20%',
          scrub : true,
        },
        scale : 0,
      })
    },{scope : containerone.current})
  );
  return (
    <div
      id="Events"
      ref={containerone}
      className=" relative overflow-hidden   max-w-screen"
    >
      <div className=" w-full grid grid-cols-2 sm:grid-cols-1 gap-10 px-20 sm:px-4 items-center *:cursor-pointer justify-center">
        <a href="https://forms.gle/WTn3XjPeSk4WBCMR9" target="_blank">
          <ButtonAnim>
            <div className=" frame1 hover:drop-shadow-2xl  relative  rounded-md  flex-col bronze   text-black w-full h-full items-start p-14 sm:p-4  flex justify-between">
              <h1 className=" relative z-20  sm:text-4xl text-6xl py-5 uppercase  font-bold border-b-4 border-black w-full ">
                Bronze Pass
              </h1>
              <div className=" relative z-20 flex w-full justify-between   mt-5 items-center">
                <p className="  uppercase  font-semibold text-xl sm:text-xs gap-2 flex items-center justify-center">
                  <span>Technical - </span>1
                </p>
                <p className="  uppercase  font-semibold text-xl gap-2 sm:text-xs flex items-center  justify-center">
                  <span>Non technical - </span>1
                </p>
              </div>
              <div className=" absolute bottom-5  sm:hidden sm:text-xs left-0 w-full  flex items-center justify-center">
                Click here for Bronze pass{" "}
              </div>
            </div>
          </ButtonAnim>
        </a>
        <a href="https://forms.gle/n36XDcLHkMMWVuiS9" target="_blank">
          <ButtonAnim>
            <div className=" frame1 hover:drop-shadow-2xl  relative  rounded-md  flex-col silver   text-black w-full h-full items-start p-14 sm:p-4  flex justify-between">
              <h1 className=" relative z-20  sm:text-4xl text-6xl py-5 uppercase  font-bold border-b-4 border-black w-full ">
                Silver Pass
              </h1>
              <div className=" relative z-20 flex w-full justify-between   mt-5 items-center">
                <p className="  uppercase  font-semibold text-xl sm:text-xs gap-2 flex items-center justify-center">
                  <span>Technical - </span>2
                </p>
                <p className="  uppercase  font-semibold text-xl gap-2 sm:text-xs flex items-center  justify-center">
                  <span>Non technical - </span>1
                </p>
              </div>
              <div className=" absolute bottom-5  sm:hidden sm:text-xs left-0 w-full  flex items-center justify-center">
                Click here for Silver pass{" "}
              </div>
            </div>
          </ButtonAnim>
        </a>
        <a href="https://forms.gle/RaSDEtSAiuU6YCnW7" target="_blank">
          <ButtonAnim>
            <div className=" frame2 hover:drop-shadow-2xl  relative  rounded-md  flex-col gold  sm:p-4   text-black w-full h-full items-start p-14  flex justify-between">
              <h1 className=" relative z-20 text-6xl sm:text-4xl py-5 uppercase  font-bold border-b-4 border-black w-full ">
                Gold Pass
              </h1>
              <div className=" relative z-20 flex w-full justify-between   mt-5 items-center">
                <p className="  uppercase  font-semibold text-xl sm:text-xs gap-2 flex items-center justify-center">
                  <span>Technical - </span>3
                </p>
                <p className="  uppercase  font-semibold text-xl sm:text-xs gap-2 flex items-center  justify-center">
                  <span>Non technical - </span>2
                </p>
              </div>
              <div className=" absolute bottom-5  left-0 w-full sm:hidden  flex items-center justify-center">
                Click here for Gold pass{" "}
              </div>
            </div>
          </ButtonAnim>
        </a>

        <a href="https://forms.gle/RaSDEtSAiuU6YCnW7" target="_blank">
          <ButtonAnim>
            <div className=" frame2 hover:drop-shadow-2xl  relative  rounded-md  flex-col dai  sm:p-4   text-black w-full h-full items-start p-14  flex justify-between">
              <h1 className=" relative z-20 text-6xl sm:text-4xl py-5 uppercase  font-bold border-b-4 border-black w-full ">
                Workshop
              </h1>
              <div className=" relative z-20 flex w-full justify-between   mt-5 items-center">
                <p className="  uppercase  font-semibold text-xl sm:text-xs gap-2 flex items-center justify-center">
                  <span>Technical - </span>1
                </p>
                <p className="  uppercase  font-semibold text-xl sm:text-xs gap-2 flex items-center  justify-center">
                  <span>Non technical - </span>2
                </p>
              </div>
              <div className=" absolute bottom-5  left-0 w-full sm:hidden  flex items-center justify-center">
                Click here for Gold pass{" "}
              </div>
            </div>
          </ButtonAnim>
        </a>
      </div>
      <div className=" w-full flex items-center justify-center text-2xl sm:mt-10 mt-20">
        <ButtonColour>
          <Link
            to="explore"
            className=" button group px-10 p-5 text-2xl border  relative z-30   flex items-center justify-center gap-5 border-background text-background rounded-full"
          >
            <ButtonAnim>
              <span className=" relative z-30 ">Explore Events</span>
            </ButtonAnim>
          </Link>
        </ButtonColour>
      </div>
    </div>
  );
};

export default Category;
