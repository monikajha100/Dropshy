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
    code: "SEC.04",
    title: "Company",
    links: [
      "About Us",
      "Contact Us",
      "Blog",
      "Testimonial",
    ],
  },

  {
    code: "SEC.03",
    title: "Services",
    links: [
      "National",
      "International",
      "Website",
    ],
  },

  {
    code: "SEC.02",
    title: "Account",
    links: [
      "Registration Now",
      "Create an Account",
    ],
  },

  {
    code: "SEC.05",
    title: "Policy",
    links: [
      "Term and Conditions",
      "Refund & Return Policy",
      "Shipping Policy",
      "Tracking Policy",
      "Privacy Policy",
    ],
  },
];


// =========================================================
// ALL FOOTER LINKS
// =========================================================

const footerLinks = {
  // Company
  "About Us": "/about",
  "Contact Us": "/contact-us",
  "Blog": "/blog",
  "Testimonial": "/review",

  // Services
  "National": "/services/national-ecommerce",
  "International": "/services/international-ecommerce",
  "Website": "/services/website-ecommerce",

  // Account
 "Registration Now": "/seller-registration",
  "Create an Account": "/get-started",
  // Policy
  "Term and Conditions": "/term-condition",
  "Refund & Return Policy": "/refund-return",
  "Shipping Policy": "/shipping-policy",
  "Tracking Policy": "/tracking",
  "Privacy Policy": "/privacy-policy",
};

// =========================================================
// BARCODE
// =========================================================

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


// =========================================================
// FOOTER
// =========================================================

const Footer = () => {
  return (
    <footer className="footer">

      <div
        className="footerPerforation"
        aria-hidden="true"
      ></div>


      <div className="footerContainer">

        {/* LEFT / BRAND */}

        <div className="footerLeft">

          <span className="footerEyebrow">
            GLOBAL LOGISTICS NETWORK
          </span>


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


          <p className="footerTagline">
            Ship smarter. Sell everywhere.
          </p>


          {/* SOCIAL */}

          <div className="socialIcons">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

          </div>


          <div className="footerDivider"></div>


          {/* CONTACT */}

          <span className="footerManifestLabel">
            REACH US AT
          </span>


          <p className="footerInfo">

            <MdEmail />

            <a
              href="mailto:info@dropshy.in"
              className="footerContactLink"
            >
              info@dropshy.in
            </a>

          </p>


          <p className="footerInfo">

            <MdPhone />

            <a
              href="tel:+918873768436"
              className="footerContactLink"
            >
              +91-8873768436
            </a>

          </p>


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


        {/* FOOTER LINK SECTIONS */}

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
                href={footerLinks[link]}
                key={link}
              >
                {link}
              </a>

            ))}

          </div>

        ))}


      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <BarcodeStrip />

          <p>
            © 2026 Dropshy Technologies Pvt. Ltd.
            — All Rights Reserved.
          </p>

          <span className="footer-tracking-code">
            DSH-GLOBAL-FTR
          </span>

        </div>

      </div>


    </footer>
  );
};

export default Footer;