
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
  MdPhone,
} from "react-icons/md";

const linkSections = [
  {
    code: "SEC.01",
    title: "Products",
    links: [
      "Dropshy Shipping",
      "Dropshy Cargo",
      "Fulfillment",
      "Capital",
      "Packaging",
    ],
  },

  {
    code: "SEC.02",
    title: "Features",
    links: [
      "Order Management",
      "Inventory",
      "Tracking",
      "Returns",
      "Analytics",
    ],
  },

  {
    code: "SEC.03",
    title: "Integrations",
    links: [
      "Shopify",
      "WooCommerce",
      "Amazon",
      "Flipkart",
      "Custom API",
    ],
  },

  {
    code: "SEC.04",
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Contact Us",
      "Blog",
      "Partner Program",
    ],
  },

  {
    code: "SEC.05",
    title: "Resources",
    links: [
      "Help Center",
      "API Documentation",
      "Shipping Guide",
      "Pricing",
      "FAQs",
    ],
  },
];

// Simple generative-looking barcode strip
const BarcodeStrip = () => {
  const widths = [
    2, 1, 3, 1, 1, 2, 4,
    1, 2, 1, 3, 2, 1, 1,
    4, 2, 1, 3, 1, 2, 1,
    1, 2, 4, 1, 3, 1, 2,
  ];

  return (
    <div
      className="footerBarcode"
      aria-hidden="true"
    >
      {widths.map((w, i) => (
        <span
          key={i}
          style={{
            width: `${w}px`,
          }}
        ></span>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">

      {/* =========================================
          PERFORATED TEAR EDGE
      ========================================== */}

      <div
        className="footerPerforation"
        aria-hidden="true"
      ></div>


      <div className="footerContainer">

        {/* =========================================
            LEFT / BRAND MANIFEST BLOCK
        ========================================== */}

        <div className="footerLeft">

          {/* Eyebrow */}

          <span className="footerEyebrow">
            GLOBAL LOGISTICS NETWORK
          </span>


          {/* Brand */}

          <div className="footerBrandRow">

            <img
              src="/logo.png"
              alt="Dropshy"
              className="footerLogo"

              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            <span className="footerBrandText">
              DROPSHY
            </span>

          </div>


          {/* Tagline */}

          <p className="footerTagline">
            Ship smarter. Sell everywhere.
          </p>


          {/* =========================================
              SOCIAL ICONS
          ========================================== */}

          <div className="socialIcons">

            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>


          {/* Divider */}

          <div className="footerDivider"></div>


          {/* =========================================
              CONTACT INFORMATION
          ========================================== */}

          <span className="footerManifestLabel">
            REACH US AT
          </span>


          {/* Email */}

          <p className="footerInfo">

            <MdEmail />

            <a
              href="mailto:info@dropshy.in"
              className="footerContactLink"
            >
              info@dropshy.in
            </a>

          </p>


          {/* Phone */}

          <p className="footerInfo">

            <MdPhone />

            <a
              href="tel:+918873768436"
              className="footerContactLink"
            >
              +91-8873768436
            </a>

          </p>


          {/* Address */}

          <div className="footerAddress">

            <MdLocationOn />

            <span>

              <strong>
                Offices
              </strong>

              <br />

              Delhi (Registered) ·

            </span>

          </div>


        </div>


        {/* =========================================
            LINK SECTIONS
        ========================================== */}

        {linkSections.map((section) => (

          <div
            className="footer-column"
            key={section.code}
          >

            <span className="footer-column-code">
              {section.code}
            </span>


            <h3>
              {section.title}
            </h3>


            {section.links.map((link) => (

              <a
                href="#"
                key={link}
              >
                {link}
              </a>

            ))}


          </div>

        ))}


      </div>


      {/* =========================================
          BOTTOM - LABEL FOOTER
      ========================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">


          {/* Barcode */}

          <BarcodeStrip />


          {/* Copyright */}

          <p>
            © 2026 Dropshy Technologies Pvt. Ltd.
            — All Rights Reserved.
          </p>


          {/* Tracking Code */}

          <span className="footer-tracking-code">
            DSH-GLOBAL-FTR
          </span>


        </div>

      </div>


    </footer>
  );
};

export default Footer;

