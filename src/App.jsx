import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Dropsyservice from "./pages/Dropsyservice";

// National E-Commerce Page
import Nationalecommerce from "./components/dropsyservice/Nationalecommerce";
import Internationalecommerce from "./components/dropsyservice/Internationalecommerce";

function App() {
  const path = window.location.pathname;

  let Page;

  if (path === "/") {
    Page = Home;
  }

  else if (path === "/about") {
    Page = About;
  }

  else if (path === "/service" || path === "/services") {
    Page = Dropsyservice;
  }

  // National E-Commerce
  else if (path === "/services/national-ecommerce") {
    Page = Nationalecommerce;
  }
  else if (path === "/services/international-ecommerce") {
    Page = Internationalecommerce;
  }

  else {
    Page = Home;
  }

  return (
    <>
      <Navbar />

      <main>
        <Page />
      </main>

      <Footer />
    </>
  );
}

export default App;