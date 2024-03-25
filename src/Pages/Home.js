import React from "react";
import Landing from "../Layouts/Landing";
import Category from "../Layouts/Category";
import About from "../Layouts/About";
import Faculty from "../Layouts/Faculty";
import Timer from "../Layouts/Timer";
import Footer from "../Layouts/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className=" relative max-w-screen min-h-screen">
      <Landing />
      <About />
      <Category />
      <Timer />
      <Faculty />
      <Footer />
    </div>
  );
};

export default Home;
