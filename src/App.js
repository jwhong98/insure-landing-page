import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </>
  );
};

export default App;
