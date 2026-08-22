import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/About/Hero";
import Commitmission from "../components/About/Commitmission";
import Product from "../components/About/Product";
import FAQ from "../components/About/Faq";
import National from "../components/About/National";
import Footer from "../components/About/Footer";
import DropshyInfo from "../components/About/Dropshyinfo";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Commitmission />
      <Product />
      <FAQ />
      <National />
      {/* <DropshyInfo /> */}
      <Footer />
    </>
  );
};

export default About;