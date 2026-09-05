import React from "react";
import "./App.css";

import Registration from "./components/dropsyservice/Registration";
import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Review from "./pages/Review";
import Dropsyservice from "./pages/Dropsyservice";
import Blogpage from "./pages/Blogpage";

// Blog Detail Page
import Blogdetails from "./components/Blog/Blogdetails";

// Website E-Commerce
import Nationaleweb from "./components/dropsyservice/Nationaleweb";

// E-Commerce Pages
import Nationalecommerce from "./components/dropsyservice/Nationalecommerce";
import Internationalecommerce from "./components/dropsyservice/Internationalecommerce";

// Contact Us
import Contactus from "./components/Contactus/Contactus";


function App() {

  // Remove trailing slash
  // Example:
  // /blog/       → /blog
  // /blog/test/  → /blog/test

  const path =
    window.location.pathname.replace(/\/+$/, "") || "/";


  // =========================================================
  // LOGIN PAGE
  // =========================================================
  // Login page ko completely separate rakha hai
  // taki Navbar + Footer login page par na aaye.
  // =========================================================

  if (path === "/login") {
    return <Login />;
  }


  // =========================================================
  // PAGE VARIABLE
  // =========================================================

  let Page;


  // =========================================================
  // HOME
  // =========================================================

  if (path === "/") {
    Page = Home;
  }


  // =========================================================
  // ABOUT
  // =========================================================

  else if (path === "/about") {
    Page = About;
  }


  // =========================================================
  // SERVICES
  // =========================================================

  else if (
    path === "/service" ||
    path === "/services"
  ) {
    Page = Dropsyservice;
  }


  // =========================================================
  // NATIONAL E-COMMERCE
  // =========================================================

  else if (
    path === "/services/national-ecommerce"
  ) {
    Page = Nationalecommerce;
  }


  // =========================================================
  // INTERNATIONAL E-COMMERCE
  // =========================================================

  else if (
    path === "/services/international-ecommerce"
  ) {
    Page = Internationalecommerce;
  }


  // =========================================================
  // WEBSITE E-COMMERCE
  // =========================================================

  else if (
    path === "/services/website-ecommerce" ||
    path === "/services/Nationaleweb" ||
    path === "/services/nationaleweb"
  ) {
    Page = Nationaleweb;
  }


  // =========================================================
  // REVIEW
  // =========================================================

  else if (path === "/review") {
    Page = Review;
  }


  // =========================================================
  // BLOG LISTING
  // =========================================================

  else if (
    path === "/blog" ||
    path === "/blogs"
  ) {
    Page = Blogpage;
  }


  // =========================================================
  // BLOG DETAIL
  // =========================================================

  else if (path.startsWith("/blog/")) {
    Page = Blogdetails;
  }


  // =========================================================
  // CONTACT US
  // =========================================================

  else if (
    path === "/contactus" ||
    path === "/contact" ||
    path === "/contact-us"
  ) {
    Page = Contactus;
  }


  // =========================================================
  // GET STARTED / REGISTER
  // =========================================================

  else if (
    path === "/get-started" ||
    path === "/register"
  ) {
    Page = Registration;
  }


  // =========================================================
  // DEFAULT
  // =========================================================

  else {
    Page = Home;
  }


  // =========================================================
  // NORMAL WEBSITE LAYOUT
  // =========================================================

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