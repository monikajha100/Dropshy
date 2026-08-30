
import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Dropsyservice from "./pages/Dropsyservice";
import Blogpage from "./pages/Blogpage";

// Website E-Commerce
import Nationaleweb from "./components/dropsyservice/Nationaleweb";

// E-Commerce Pages
import Nationalecommerce from "./components/dropsyservice/Nationalecommerce";
import Internationalecommerce from "./components/dropsyservice/Internationalecommerce";

// Contact Us
import Contactus from "./components/Contactus/Contactus";

function App() {
  // Remove trailing slash so both
  // /services/website-ecommerce
  // and /services/website-ecommerce/
  // work correctly.
  const path =
    window.location.pathname.replace(/\/+$/, "") || "/";

  let Page;

  // =========================
  // HOME
  // =========================
  if (path === "/") {
    Page = Home;
  }

  // =========================
  // ABOUT
  // =========================
  else if (path === "/about") {
    Page = About;
  }

  // =========================
  // SERVICES
  // =========================
  else if (
    path === "/service" ||
    path === "/services"
  ) {
    Page = Dropsyservice;
  }

  // =========================
  // NATIONAL E-COMMERCE
  // =========================
  else if (
    path === "/services/national-ecommerce"
  ) {
    Page = Nationalecommerce;
  }

  // =========================
  // INTERNATIONAL E-COMMERCE
  // =========================
  else if (
    path === "/services/international-ecommerce"
  ) {
    Page = Internationalecommerce;
  }

  // =========================
  // WEBSITE E-COMMERCE
  // =========================
  else if (
    path === "/services/website-ecommerce" ||
    path === "/services/Nationaleweb" ||
    path === "/services/nationaleweb"
  ) {
    Page = Nationaleweb;
  }

  // =========================
  // BLOG
  // =========================
  else if (
    path === "/blog" ||
    path === "/blogs"
  ) {
    Page = Blogpage;
  }

  // =========================
  // CONTACT US
  // =========================
  else if (
    path === "/contactus" ||
    path === "/contact" ||
    path === "/contact-us"
  ) {
    Page = Contactus;
  }

  // =========================
  // DEFAULT
  // =========================
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

