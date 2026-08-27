import React from "react";
import Navbar from "../components/Navbar";
import Dropsyhero from "../components/dropsyservice/Dropsyhero";
import Footer from "../components/About/Footer";
//import National from "../National/about/National"
import Registration from "../components/dropsyservice/Registration";

const DropsyservicePage = () => {
  return (
    <>
      <Navbar />
{/* <National /> */}
<Dropsyhero />
  <Registration />
      <Footer />
    </>
  );
};

export default DropsyservicePage;