import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerContainer">

        {/* LEFT */}

        <div className="footerLeft">

          <img
            src="/logo.png"
            alt="Dropsy"
            className="footerLogo"
          />

          <div className="socialIcons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaXTwitter /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaYoutube /></a>

            <a href="#"><FaLinkedinIn /></a>

          </div>

          <h3>Reach Us At</h3>

          <p className="footerInfo">
            <MdEmail />
            support@dropsy.com
          </p>

          <p className="footerInfo">
            <MdEmail />
            sales@dropsy.com
          </p>

          <div className="footerAddress">

            <MdLocationOn />

            <span>
              Registered Office Address:
              <br />
              Plot No. B, MG Road,
              <br />
              Delhi 110030
            </span>

          </div>

          <div className="footerAddress">

            <MdLocationOn />

            <span>
              Corporate Office Address:
              <br />
              Sector 20,
              <br />
              Gurugram, Haryana 122008
            </span>

          </div>

          <div className="downloadSection">

            <h3>Download App</h3>

            <div className="storeButtons">

              <img
                src="/google-play.png"
                alt="Google Play"
              />

              <img
                src="/app-store.png"
                alt="App Store"
              />

            </div>

          </div>

        </div>

             {/* PRODUCTS */}

<div className="footer-column">

  <h3>Products</h3>

  <a href="#">Dropsy Shipping</a>
  <a href="#">Dropsy Cargo</a>
  <a href="#">Quick</a>
  <a href="#">Fulfillment</a>
  <a href="#">Capital</a>
  <a href="#">Packaging</a>
  <a href="#">Amplify</a>
  <a href="#">Promise</a>

</div>

{/* FEATURES */}

<div className="footer-column">

  <h3>Features</h3>

  <a href="#">Order Management</a>
  <a href="#">Inventory</a>
  <a href="#">Courier Recommendation</a>
  <a href="#">Tracking</a>
  <a href="#">Returns</a>
  <a href="#">NDR Management</a>
  <a href="#">Analytics</a>
  <a href="#">API</a>

</div>

{/* INTEGRATIONS */}

<div className="footer-column">

  <h3>Integrations</h3>

  <a href="#">Shopify</a>
  <a href="#">WooCommerce</a>
  <a href="#">Amazon</a>
  <a href="#">Flipkart</a>
  <a href="#">Myntra</a>
  <a href="#">Meesho</a>
  <a href="#">Magento</a>
  <a href="#">Custom API</a>

</div>

{/* COMPANY */}


{/* RESOURCES */}


  {/* COMPANY */}

        <div className="footer-column">

          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
          <a href="#">Investor Relations</a>
          <a href="#">Success Stories</a>
          <a href="#">Awards</a>
          <a href="#">Partner Program</a>

        </div>

        {/* RESOURCES */}

        <div className="footer-column">

          <h3>Resources</h3>

          <a href="#">Help Center</a>
          <a href="#">API Documentation</a>
          <a href="#">Developers</a>
          <a href="#">Knowledge Base</a>
          <a href="#">Shipping Guide</a>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>
          <a href="#">Case Studies</a>

        </div>

        {/* FOOTER RIGHT */}

        

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 Dropsy Technologies Pvt. Ltd. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;

     