
import React from "react";
import "./App.css";

// =========================================================
// USER LOGIN
// =========================================================
import Login from "./components/Login";

// =========================================================
// USER REGISTRATION
// =========================================================

import CreateAccount from "./components/Createaccount";
import SellerRegistration from "./components/SellerRagistration";
import SellorLogin from "./components/Sellorlogin";
// =========================================================
// WEBSITE LAYOUT
// =========================================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// =========================================================
// MAIN PAGES
// =========================================================
import Home from "./pages/Home";
import About from "./pages/About";
import Review from "./pages/Review";
import Dropsyservice from "./pages/Dropsyservice";
import Blogpage from "./pages/Blogpage";
import Blogdetails from "./components/Blog/Blogdetails";

// =========================================================
// ADMIN
// =========================================================
import LoginAdmin from "./Admin/Loginadmin/Loginadmin";
import AdminDashboard from "./Admin/Admindashboard/Admindashboard";
import AdminServices from "./Admin/Services/Services";
import AllBanners from "./Admin/Services/Allbanner";
import DisplayallBlog from "./Admin/Blog/DisplayallBlog";
import BlogForm from "./Admin/Blog/BlogForm";

// =========================================================
// E-COMMERCE PAGES
// =========================================================
import Nationaleweb from "./components/dropsyservice/Nationaleweb";
import Nationalecommerce from "./components/dropsyservice/Nationalecommerce";
import Internationalecommerce from "./components/dropsyservice/Internationalecommerce";

// =========================================================
// CONTACT
// =========================================================
import Contactus from "./components/Contactus/Contactus";


function App() {

  // =========================================================
  // CURRENT PATH
  // =========================================================
  const path =
    window.location.pathname.replace(/\/+$/, "") || "/";


  // =========================================================
  // ADMIN LOGIN CHECK
  // =========================================================
  const isAdminLoggedIn = () => {
    const token = localStorage.getItem("ADMIN_TOKEN");

    return !!token;
  };


  // =========================================================
  // ADMIN LOGIN
  // =========================================================
  if (path === "/adminlogin") {
    return <LoginAdmin />;
  }


  // =========================================================
  // ADMIN DASHBOARD - PROTECTED
  // =========================================================
  if (path === "/admindashboard") {

    if (!isAdminLoggedIn()) {
      window.location.href = "/adminlogin";
      return null;
    }

    return <AdminDashboard />;
  }


  // =========================================================
  // ADMIN SERVICES - PROTECTED
  // =========================================================
  if (path === "/admin/services") {

    if (!isAdminLoggedIn()) {
      window.location.href = "/adminlogin";
      return null;
    }

    return <AdminServices />;
  }


  // =========================================================
  // ADMIN BANNERS - PROTECTED
  // =========================================================
  if (path === "/admin/Allbanner") {

    if (!isAdminLoggedIn()) {
      window.location.href = "/adminlogin";
      return null;
    }

    return <AllBanners />;
  }


  // =========================================================
  // ADMIN ALL BLOGS - PROTECTED
  // =========================================================
  if (path === "/admin/DisplayAllBlog") {

    if (!isAdminLoggedIn()) {
      window.location.href = "/adminlogin";
      return null;
    }

    return <DisplayallBlog />;
  }


  // =========================================================
  // ADMIN BLOG FORM - PROTECTED
  // =========================================================
  if (path === "/admin/blog-form") {

    if (!isAdminLoggedIn()) {
      window.location.href = "/adminlogin";
      return null;
    }

    return <BlogForm />;
  }


  // =========================================================
  // USER LOGIN
  // =========================================================
  if (path === "/login") {
    return <Login />;
  }


  // =========================================================
  // USER REGISTRATION
  // =========================================================
  if (
    path === "/register" ||
    path === "/get-started"
  ) {
    return <CreateAccount />;
  }

if (path === "/seller-registration") {
  return <SellerRegistration />;
}

if (path === "/seller-login") {
  return <SellorLogin />;
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
