import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Preloader from "./Layouts/Preloader";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Explore from "./Pages/Explore";

const App = () => {
  const [state, setstate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setstate(false);
    }, 2000);
  }, []);
  useEffect(() => {
    const lenis = new Lenis();


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },[])
  return (
    <main className=" raleway max-w-screen min-h-screen bg-white text-black">
      <AnimatePresence mode="wait">{state && <Preloader />}</AnimatePresence>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </main>
  );
};

export default App;
