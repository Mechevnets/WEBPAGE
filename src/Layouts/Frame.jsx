import React, { useRef } from "react";
import vid from "../images/vid.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
const Frame = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scale } = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div
      ref={container}
      className="relative   max-w-[100vw] min-h-[100vh] "
    >
      <motion.p className="" style={{scale}}>hi</motion.p>
    </div>
  );
};

export default Frame;
