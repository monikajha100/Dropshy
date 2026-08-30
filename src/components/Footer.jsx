import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/images/dropsy.jpeg";
import google from "../assets/images/google play.png";
import app from "../assets/images/app store.png";

import { FaXTwitter } from "react-icons/fa6";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

const linkSections = [
  {
    code: "SEC.01",
    title: "Products",
    links: ["Dropsy Shipping", "Dropsy Cargo", "Quick", "Fulfillment", "Capital", "Packaging", "Amplify", "Promise"],
  },
  {
    code: "SEC.02",
    title: "Features",
    links: ["Order Management", "Inventory", "Courier Recommendation", "Tracking", "Returns", "NDR Management", "Analytics", "API"],
  },
  {
    code: "SEC.03",
    title: "Integrations",
    links: ["Shopify", "WooCommerce", "Amazon", "Flipkart", "Myntra", "Meesho", "Magento", "Custom API"],
  },
  {
    code: "SEC.04",
    title: "Company",
    links: ["About Us", "Careers", "Contact Us", "Press", "Blog", "Investor Relations", "Success Stories", "Awards", "Partner Program"],
  },
  {
    code: "SEC.05",
    title: "Resources",
    links: ["Help Center", "API Documentation", "Developers", "Knowledge Base", "Shipping Guide", "Pricing", "FAQs", "Case Studies"],
  },
];

// Simple generative-looking barcode strip
const BarcodeStrip = () => {
  const widths = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 1, 4, 2, 1, 3, 1, 2, 1, 1, 2, 4, 1, 3, 1, 2];
  return (
    <div className="footerBarcode" aria-hidden="true">
      {widths.map((w, i) => (
        <span key={i} style={{ width: `${w}px` }}></span>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">

      {/* PERFORATED TEAR EDGE */}
      <div className="footerPerforation" aria-hidden="true"></div>

      <div className="footerContainer">

        {/* LEFT / BRAND MANIFEST BLOCK */}
        <div className="footerLeft">

          <span className="footerEyebrow">GLOBAL LOGISTICS NETWORK</span>

          <div className="footerBrandRow">
            <img
              src="/logo.png"
              alt="Dropsy"
              className="footerLogo"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <span className="footerBrandText">DROPSY</span>
          </div>

          <p className="footerTagline">
            Ship smarter. Sell everywhere.
          </p>

          <div className="socialIcons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="X"><FaXTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>

          <div className="footerDivider"></div>

          <span className="footerManifestLabel">REACH US AT</span>

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
              <strong>Registered Office</strong>
              <br />
              Plot No. B, MG Road,
              <br />
              Delhi 110030
            </span>
          </div>

          <div className="footerAddress">
            <MdLocationOn />
            <span>
              <strong>Corporate Office</strong>
              <br />
              Sector 20,
              <br />
              Gurugram, Haryana 122008
            </span>
          </div>

          <div className="downloadSection">
            <span className="footerManifestLabel">DOWNLOAD APP</span>
            <div className="storeButtons">
              <img src="/google-play.png" alt="Google Play" />
              <img src="/app-store.png" alt="App Store" />
            </div>
          </div>

        </div>

        {/* LINK SECTIONS */}
        {linkSections.map((section) => (
          <div className="footer-column" key={section.code}>
            <span className="footer-column-code">{section.code}</span>
            <h3>{section.title}</h3>
            {section.links.map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </div>
        ))}

      </div>

      {/* BOTTOM - LABEL FOOTER */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <BarcodeStrip />
          <p>© 2026 Dropsy Technologies Pvt. Ltd. — All Rights Reserved.</p>
          <span className="footer-tracking-code">DSH-GLOBAL-FTR</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;