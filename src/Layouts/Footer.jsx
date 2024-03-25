import React from "react";
import ButtonAnim from "../Components/ButtonAnim";
import ButtonColour from "../Components/ButtonColour";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      id="footer"
      className="  overflow-hidden w-full sm:min-h-[50vh]  min-h-[50vh] max-w-screen text-white p-10 sm:px-4 flex-col flex px-20   items-center justify-center bg-background"
    >
      <div className=" flex items-center justify-center w-full">
        <div className=" flex flex-col  sm:w-full items-center justify-center">
          <div className=" flex items-center  sm:gap-5 mb-14 sm:mb-4 justify-center gap-10 ">
            <div className=" bg-white p-5 flex items-center justify-center rounded-full gap-10"></div>
            <p className=" text-6xl sm:text-2xl font-bold w-full">Let's Work Together !</p>
          </div>
          <div className=" flex sm:flex-col sm:w-full items-center *:cursor-pointer  sm:gap-5 pt-14 sm:border-t-0 sm:pt-4 border-t w-full border-white/10 justify-start gap-10">
            <ButtonColour>
              <a
                href="mailto:sanjaigovindraj@gmail.com"
                className=" px-10 p-5 text-xl sm:text-sm  border sm:flex-col  flex items-center justify-center gap-5 border-white/20 rounded-full"
              >
                <ButtonAnim>
                  <span className=" relative z-30">
                    Sanjai.me21@bitsathy.ac.in
                  </span>
                </ButtonAnim>
              </a>
            </ButtonColour>
            <ButtonColour>
              <button className=" px-10  sm:text-sm  p-5 text-xl border sm:w-full  poppins  flex items-center justify-center gap-5 border-white/20 rounded-full">
                <ButtonAnim>
                  <span className=" sm:px-10  relative z-30">8637629493</span>
                </ButtonAnim>
              </button>
            </ButtonColour>
          </div>
        </div>

        <ButtonColour >
          <div className=" sm:absolute sm:bottom-0 sm:left-0 sm:z-30 text-black cursor-pointer text-2xl flex items-center justify-center font-bold uppercase bg-white rounded-full w-52 h-52">
            <ButtonAnim>
              <p className=" relative text-black z-30">Contact</p>
            </ButtonAnim>
          </div>
        </ButtonColour>
      </div>
    </div>
  );
};

export default Footer;
