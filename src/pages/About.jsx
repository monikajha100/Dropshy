import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/About/Hero";
import Commitmission from "../components/About/Commitmission";
import Product from "../components/About/Product";
import FAQ from "../components/About/Faq";
import National from "../components/About/National";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Commitmission />
      <Product />
      <FAQ />
      <National />
    </>
  );
};

export default About;