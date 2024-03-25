import React, { useEffect, useRef, useState } from "react";
const Timer = () => {
  const [day, setday] = useState("00");
  const [hour, sethour] = useState("00");
  const [min, setmin] = useState("00");
  const [sec, setsec] = useState("00");
  const interval = useRef();
  const starttimer = () => {
    const eventdate = new Date("Apr 15, 2024 08:00:00").getTime();
    const interval = setInterval(() => {
      const currentdate = new Date().getTime();
      const gap = eventdate - currentdate;
      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;
      const textday = Math.floor(gap / days);
      const texthour = Math.floor((gap % days) / hours);
      const textmin = Math.floor((gap % hours) / minutes);
      const textsec = Math.floor((gap % minutes) / seconds);
      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setday(textday);
        sethour(texthour);
        setmin(textmin);
        setsec(textsec);
      }
    }, [1000]);
  };

  useEffect(() => {
    starttimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div
      id="Timer"
      className="  max-w-[100vw] h-[100vh] sm:h-auto sm:py-10 flex items-center justify-center "
    >
      <div className="  relative flex flex-col items-center gap-10 justify-center">
        <p className=" text-secondary text-5xl sm:text-xl  sm:pb-10   text-center">
          Join now and be a part of <br></br> innovations and excitements
        </p>
        <div className=" z-30 relative flex  poppins -mt-10 flex-col items-center gap-10 sm:gap-5 justify-center">
          <div className=" flex items-center sm:text-xs justify-center gap-14 sm:gap-4 ">
            <div className=" flex flex-col items-center justify-center">
              <p className=" text-[150px] sm:text-4xl   text-background">
                {day} :
              </p>
              <span className=" text-background uppercase font-bold">Days</span>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <p className=" text-[150px] sm:text-4xl    text-background">
                {hour} : 
              </p>
              <span className=" text-background uppercase font-bold">
                Hours
              </span>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <p className=" text-[150px] sm:text-4xl text-background">
                {min} : 
              </p>
              <span className=" text-background uppercase font-bold">Mins</span>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <p className=" text-[150px] sm:text-4xl    text-background">
                {sec} 
              </p>
              <span className=" text-background uppercase font-bold">Secs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
