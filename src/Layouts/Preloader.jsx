import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [index, setindex] = useState(0);
  const [dimension, setdimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setdimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  const words = [
    "Hello !",
    "Everyone",
    "Department of",
    "Mechancal",
    "Engineering",
    "Proudly",
    "Presents",
  ];

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setindex(index + 1);
      },
      index == 0 ? 1000 : 150,
    );
    window.scrollTo(0, 0);
  }, [index]);
  const initailpath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height}  Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-140vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
      className=" fixed z-40 top-0   text-white flex items-center justify-center h-[100vh]  w-[100vw] "
    >
      {dimension.height > 0 && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            className={`  relative z-50 text-white sm:text-4xl  text-8xl font-bold uppercase`}
          >
            {words[index]}
          </motion.p>
          <svg className=" absolute top-0 left-0 w-[100%] h-[120%] ">
            <path style={{ fill: "#141517" }}  d={initailpath} />
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;

