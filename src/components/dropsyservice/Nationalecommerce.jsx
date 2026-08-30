import React, { useEffect, useState } from "react";
import "./Nationalecommerce.css";

import amazonLogo from "../../assets/images/amazon.webp";
import flipkartLogo from "../../assets/images/flipcarts.jpg";
import meeshoLogo from "../../assets/images/meesho.jpg";
import myntraLogo from "../../assets/images/ebay.jpg";

// Seller registration image
import registrationImage from "../../assets/images/seller-registration.png";



import {
  FaCheckCircle,
  FaCrown,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

import { MdTrendingUp } from "react-icons/md";

/* =========================================================
   CITIES
========================================================= */

const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

/* =========================================================
   MARKETPLACES
========================================================= */

const marketplaces = [
  {
    code: "01 · IN",
    title: "Amazon.in",
    logo: amazonLogo,
    text: "Reach customers across India through one of the country's largest online marketplaces.",
  },
  {
    code: "02 · IN",
    title: "Flipkart",
    logo: flipkartLogo,
    text: "List products and target buyers across India's extensive e-commerce market.",
  },
  {
    code: "03 · IN",
    title: "Meesho",
    logo: meeshoLogo,
    text: "Sell to value-conscious shoppers and resellers across the country.",
  },
  {
    code: "04 · IN",
    title: "Myntra",
    logo: myntraLogo,
    text: "Suited to fashion and lifestyle sellers, subject to Myntra's seller requirements.",
  },
];

/* =========================================================
   REGISTRATION TIMELINE
========================================================= */

const timeline = [
  {
    number: "01",
    tag: "Registration",
    title: "Complete your registration",
    text: "Choose your plan and pay the registration fee — ₹500 or ₹1,000 depending on the plan.",
    preview: true,
  },
  {
    number: "02",
    tag: "Advance payment",
    title: "Pay 50% in advance",
    text: "A 50% advance creates your seller accounts on the national platforms — this step takes about 5–10 days.",
  },
  {
    number: "03",
    tag: "Setup & training",
    title: "Account setup and training",
    text: "Once your seller accounts are live, you get complete training on running them.",
  },
  {
    number: "04",
    tag: "Go live",
    title: "Start selling and earning",
    text: "Begin receiving orders once accounts and training are ready. Pay the remaining 50% after you start earning.",
  },
];

/* =========================================================
   WHY DROPSHY
========================================================= */

const whyItems = [
  {
    icon: "✓",
    title: "No warehouse needed",
    text: "Skip the cost and hassle of holding your own inventory.",
  },
  {
    icon: "✓",
    title: "Broad product selection",
    text: "Access a wide range of products without buying in bulk.",
  },
  {
    icon: "✓",
    title: "Multiple marketplaces",
    text: "Sell through Amazon, Flipkart, Meesho and Myntra from one setup.",
  },
  {
    icon: "✓",
    title: "Pan-India reach",
    text: "Reach customers across the country, subject to delivery availability.",
  },
  {
    icon: "✓",
    title: "Simplified fulfillment",
    text: "Order packing and dispatch is handled through the fulfillment process.",
  },
  {
    icon: "✓",
    title: "For new and experienced sellers",
    text: "Whether you're starting out or scaling up, the model adapts to you.",
  },
];

/* =========================================================
   PRICING PLATFORMS
========================================================= */

const platforms = [
  "Flipkart",
  "Amazon.in",
  "Meesho",
  "Myntra",
];

/* =========================================================
   PRICING PLANS
========================================================= */

const plans = [
  {
    tier: "basic",
    name: "BASIC",
    icon: <FaShieldAlt />,
    subtitle: "Flipkart, Amazon.in, Meesho & Myntra",

    priceLines: [
      "₹4,999 +18% GST",
      "= ₹5,900 / per year",
    ],

    features: [
      "Personal Manager - B form",
      "250 listing",
      "Photoshoot",
      "Pricing & Margin Setup",
      "Title & subtitles or Full Description",
      "Keywords & Tags",
      "Dispatch Manager",
      "Services Agreement",
    ],

    note: "Note - Top 10 Member Products",
  },

  {
    tier: "advance",
    name: "ADVANCE",
    icon: <FaShieldAlt />,
    subtitle: "Flipkart, Amazon.in, Meesho and Myntra",

    priceLines: [
      "₹5,900 x 4 platform",
      "= ₹23,600 /-",
    ],

    features: [
      "Personal Manager - B form (KYC)",
      "500/- per listing - (100 mix)",
      "Photoshoot",
      "Pricing & Margin Setup",
      "Title & subtitles or Full Description",
      "Keywords & Tags",
      "Dispatch Manager",
      "Services Agreement",
    ],

    note: "Note - Top 5 Member products",
    featured: true,
  },

  {
    tier: "royal",
    name: "ROYAL",
    icon: <FaCrown />,
    subtitle: "Flipkart, Amazon.in, Meesho and Myntra",

    priceLines: [
      "₹23,600 + ₹49,999",
      "= ₹73,599",
    ],

    features: [
      "Personal Manager - B form (KYC)",
      "Govt. Documents - GST, MSME etc.",
      "500-1000 listing - (100 unique)",
      "Photoshoot",
      "Pricing & Margin Setup",
      "Title & subtitles or Full Description",
      "Keywords & Tags",
      "Dispatch Manager",
      "Legality Services Agreement",
    ],

    note: "Note - Top 1 Member Products",
  },
];

/* =========================================================
   GROWTH / EARNING DATA
========================================================= */

const growthStats = [
  {
    tier: "ADVANCE",
    total: "₹23,600",

    lines: [
      "Flipkart, Amazon.in, Meesho and Myntra",
      "20 order Months - 20 x ₹700 = ₹14,000/-",
      "₹14,000 x 12 Months = ₹1,68,000 / year",
    ],

    earning: "1 - 2 Lakh / year",
  },

  {
    tier: "ROYAL",
    total: "₹73,599",

    lines: [
      "Flipkart, Amazon.in, Meesho and Myntra",
      "30 order Months - 30 x ₹700 = ₹21,000/-",
      "₹21,000 x 12 Months = ₹2,52,000 / year",
    ],

    earning: "2 - 3 Lakh / year",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  [
    "Do I need to maintain my own warehouse?",
    "No. The dropshipping model is designed so sellers don't need to maintain their own inventory and warehouse.",
  ],

  [
    "Can I sell on Amazon.in, Flipkart, Meesho and Myntra?",
    "Yes, Dropshy supports national marketplace selling, subject to the eligibility, category restrictions and policies of each platform.",
  ],

  [
    "Do I need to purchase products in bulk?",
    "No. The dropshipping model lets you avoid purchasing large quantities of inventory upfront.",
  ],

  [
    "Who handles packing and shipping?",
    "The Dropshy fulfillment process handles packing and dispatch according to your service arrangement and order requirements.",
  ],

  [
    "Can I sell products anywhere in India?",
    "National dropshipping is designed to help you reach customers across India, subject to product and delivery availability.",
  ],

  [
    "Do I have to handle customer service?",
    "As the marketplace seller, you remain responsible for customer and marketplace obligations. Dropshy supports the fulfillment and operational side within its service scope.",
  ],

  [
    "How much profit can I make?",
    "There's no fixed or guaranteed profit. Results depend on product costs, selling price, marketplace fees, advertising, returns, taxes and competition.",
  ],

  [
    "Is national dropshipping risk-free?",
    "No. It reduces certain inventory-related risks, but it's still a business with operational, financial, marketplace and customer-service responsibilities.",
  ],
];

/* =========================================================
   COMPONENT
========================================================= */

const NationalEcommerce = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".national-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("national-in");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     TIMELINE ACTIVE STEP
  ======================================================= */

  useEffect(() => {
    const timelineElements =
      document.querySelectorAll(".national-tl-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Number(
              entry.target.dataset.step
            );

            setActiveStep(step);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    timelineElements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     BARCODE
  ======================================================= */

  const barcodeBars = Array.from(
    { length: 48 },
    (_, i) => ({
      id: i,
      height: `${10 + ((i * 17) % 32)}px`,
      delay: `${0.9 + i * 0.012}s`,
    })
  );

  return (
    <div className="national-page">

      {/* ===================================================
          BACKGROUND GRID
      =================================================== */}

      <div className="national-bg-grid"></div>


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="national-hero">

        <div className="national-wrap national-hero-grid">

          {/* HERO CONTENT */}

          <div className="national-hero-content">

            <span className="national-eyebrow">
              Pan-India · Multi-Marketplace Fulfillment
            </span>

            <h1 className="national-headline">
              Sell across India
              <br />
              without running a <em>warehouse.</em>
            </h1>

            <p className="national-hero-sub">
              Dropshy sets up your seller account on
              Amazon.in, Flipkart, Meesho and Myntra,
              and routes fulfillment through your
              dropshipping partner — so you can stay
              focused on listings, pricing and sales.
            </p>

            <div className="national-hero-cta">

              <a
                className="national-btn-primary"
                href="#register"
              >
                Start registration →
              </a>

              <a
                className="national-btn-ghost"
                href="tel:+918873768436"
              >
                Call now
              </a>

            </div>

          </div>


          {/* WAYBILL */}

          <div className="national-waybill">

            <div className="national-wb-top">

              <div>

                <div className="national-wb-label">
                  Seller Routing Manifest
                </div>

                <div className="national-wb-title">
                  Dropshy National Dropshipping
                </div>

              </div>

              <div className="national-stamp">
                PAN-INDIA
              </div>

            </div>


            {/* BARCODE */}

            <div className="national-barcode">

              {barcodeBars.map((bar) => (
                <span
                  key={bar.id}
                  style={{
                    height: bar.height,
                    animationDelay: bar.delay,
                  }}
                />
              ))}

            </div>


            {/* ROUTE */}

            <div className="national-wb-route">

              <div
                className="national-wb-label"
                style={{
                  marginBottom: "8px",
                }}
              >
                Routed to marketplaces
              </div>

              <svg
                className="national-route-svg"
                viewBox="0 0 400 150"
              >

                <path
                  className="national-route-line"
                  d="M200 75 L60 30"
                />

                <path
                  className="national-route-line"
                  d="M200 75 L340 30"
                />

                <path
                  className="national-route-line"
                  d="M200 75 L60 120"
                />

                <path
                  className="national-route-line"
                  d="M200 75 L340 120"
                />

                <circle
                  className="national-hub-pulse"
                  cx="200"
                  cy="75"
                  r="8"
                />

                <circle
                  className="national-hub-node"
                  cx="200"
                  cy="75"
                  r="7"
                />

                <text
                  className="national-node-label"
                  x="200"
                  y="97"
                  textAnchor="middle"
                >
                  DROPSHY
                </text>

                <text
                  className="national-node-label"
                  x="200"
                  y="128"
                  textAnchor="middle"
                >
                  MARKETPLACES
                </text>

                <circle
                  className="national-leaf-node"
                  cx="60"
                  cy="30"
                  r="6"
                />

                <circle
                  className="national-leaf-node"
                  cx="340"
                  cy="30"
                  r="6"
                />

                <circle
                  className="national-leaf-node"
                  cx="60"
                  cy="120"
                  r="6"
                />

                <circle
                  className="national-leaf-node"
                  cx="340"
                  cy="120"
                  r="6"
                />

              </svg>

            </div>

          </div>

        </div>


        {/* CITY TICKER */}

        <div className="national-ticker-wrap">

          <div className="national-wrap national-ticker-container">

            <div className="national-ticker">

              {[...cities, ...cities].map(
                (city, index) => (
                  <span
                    key={`${city}-${index}`}
                  >
                    {city}
                  </span>
                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          MARKETPLACES
      =================================================== */}

      <section
        className="national-section-pad"
        id="marketplaces"
      >

        <div className="national-wrap">

          <div className="national-sec-head national-reveal">

            <span className="national-sec-eyebrow">
              Where your listings travel
            </span>

            <h2 className="national-sec-title">
              Four marketplaces, one seller account setup.
            </h2>

            <p className="national-sec-sub">
              Each platform has its own eligibility and
              category rules — Dropshy sets up and trains
              you for the ones that fit your products.
            </p>

          </div>


          <div className="national-mp-grid">

            {marketplaces.map((marketplace) => (

              <div
                className="national-mp-card national-reveal"
                key={marketplace.code}
              >

                <div className="national-card-corner"></div>

                <div className="national-mp-logo-wrap">

                  <img
                    className="national-mp-logo"
                    src={marketplace.logo}
                    alt={`${marketplace.title} logo`}
                  />

                </div>

                <span className="national-mp-code">
                  {marketplace.code}
                </span>

                <h3>
                  {marketplace.title}
                </h3>

                <p>
                  {marketplace.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ===================================================
          SELLER REGISTRATION PROCESS
      =================================================== */}

      <section
        className="national-section-pad national-register-section"
        id="register"
      >

        <div className="national-wrap">

          {/* HEADING */}

          <div className="national-sec-head national-reveal">

            <span className="national-sec-eyebrow">
              Seller registration process
            </span>

            <h2 className="national-sec-title">
              From sign-up to your first sale,
              <br />
              in four checkpoints.
            </h2>

          </div>


          {/* =================================================
              50 / 50 REGISTRATION LAYOUT
          ================================================= */}

          <div className="national-registration-layout national-reveal">


            {/* ===============================================
                LEFT — REGISTRATION TIMELINE
            =============================================== */}

            <div className="national-registration-timeline">

              <div className="national-tl-track">

                <div
                  className="national-tl-track-fill"
                  style={{
                    height: `${
                      (activeStep / timeline.length) * 100
                    }%`,
                  }}
                />

              </div>


              {timeline.map((item, index) => {

                const step = index + 1;

                return (

                  <div
                    className={`national-tl-item ${
                      activeStep >= step
                        ? "national-step-active"
                        : ""
                    }`}
                    data-step={step}
                    key={item.number}
                  >

                    {/* NUMBER */}

                    <div className="national-tl-num">
                      {item.number}
                    </div>


                    {/* CONTENT */}

                    <div className="national-tl-body">

                      <span className="national-tl-tag">
                        {item.tag}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>


                      {/* ENROLLMENT PREVIEW */}

                      {item.preview && (

                        <div className="national-enroll-preview">

                          <div className="national-ep-icon">
                            ✓
                          </div>

                          <span className="national-ep-label">
                            On successful submission,
                            you'll receive your enrollment
                            number in this format
                          </span>

                          <span className="national-ep-number">
                            DSH-YYMMDD-XXX
                          </span>

                        </div>

                      )}

                    </div>

                  </div>

                );

              })}

            </div>


            {/* ===============================================
                RIGHT — IMAGE
            =============================================== */}

            <div className="national-registration-visual">

              <div className="national-registration-image-card">

                <img
                  src={registrationImage}
                  alt="Dropshy seller registration process"
                />

                <div className="national-image-glow"></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          WHY DROPSHY
      =================================================== */}

      <section className="national-section-pad">

        <div className="national-wrap">

          <div className="national-sec-head national-reveal">

            <span className="national-sec-eyebrow">
              Why Dropshy
            </span>

            <h2 className="national-sec-title">
              Built for sellers who'd rather sell than stock.
            </h2>

          </div>


          <div className="national-why-grid national-reveal">

            {whyItems.map((item) => (

              <div
                className="national-why-item"
                key={item.title}
              >

                <div className="national-why-icon">
                  {item.icon}
                </div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ===================================================
          PRICING PACKAGES
      =================================================== */}

      <section
        className="national-section-pad national-pricing-section"
        id="pricing"
      >

        <div className="national-wrap">


          {/* HEADING */}

          <div className="pricing-heading national-reveal">

            <span className="pricing-eyebrow">
              Choose your plan
            </span>

            <h2>
              Packages built for every stage of growth
            </h2>

            <p>
              Choose the plan that matches your selling
              goals and start building your online business
              across India's leading marketplaces.
            </p>

          </div>


          {/* PLAN CARDS */}

          <div className="pricing-grid">

            {plans.map((plan) => (

              <div
                className={`pricing-card pricing-${plan.tier} ${
                  plan.featured
                    ? "pricing-featured"
                    : ""
                } national-reveal`}
                key={plan.tier}
              >

                {plan.featured && (

                  <span className="pricing-featured-tag">
                    Most Popular
                  </span>

                )}


                <div className="pricing-badge">
                  {plan.icon}
                </div>

                <h3 className="pricing-name">
                  {plan.name}
                </h3>

                <p className="pricing-subtitle">
                  {plan.subtitle}
                </p>


                <div className="pricing-price">

                  <span>
                    {plan.priceLines[0]}
                  </span>

                  <strong>
                    {plan.priceLines[1]}
                  </strong>

                </div>


                <ul className="pricing-features">

                  {plan.features.map((feature) => (

                    <li key={feature}>

                      <FaCheckCircle
                        className="pricing-check"
                      />

                      <span>
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>


                <div className="pricing-note">
                  {plan.note}
                </div>


                <a
                  href="#register"
                  className="pricing-card-btn"
                >
                  Choose {plan.name} →
                </a>

              </div>

            ))}

          </div>


          {/* GROWTH / EARNING PANEL */}

          <div className="pricing-growth-panel national-reveal">

            {growthStats.map((stat, index) => (

              <React.Fragment key={stat.tier}>

                <div
                  className={`pricing-growth-card growth-${stat.tier.toLowerCase()}`}
                >

                  <div className="growth-card-head">

                    <span>
                      {stat.tier} :-
                    </span>

                    <strong>
                      ( {stat.total} )
                    </strong>

                  </div>


                  <ul className="growth-card-lines">

                    {stat.lines.map((line, i) => (

                      <li key={i}>

                        <span className="growth-arrow">
                          ›
                        </span>

                        {line}

                      </li>

                    ))}

                  </ul>


                  <div className="growth-earning">

                    <FaMoneyBillWave />

                    <span>
                      Earning up to{" "}
                      <strong>
                        {stat.earning}
                      </strong>
                    </span>

                  </div>

                </div>


                {index === 0 && (

                  <div className="pricing-growth-center">

                    <div className="growth-center-badge">

                      <MdTrendingUp />

                      <span>
                        Grow Your Business
                      </span>

                      <small>
                        Earn More
                      </small>

                    </div>

                  </div>

                )}

              </React.Fragment>

            ))}

          </div>

        </div>

      </section>


      {/* ===================================================
          FAQ
      =================================================== */}

      <section
        className="national-section-pad national-faq-section"
      >

        <div className="national-wrap">


          <div className="national-sec-head national-reveal">

            <span className="national-sec-eyebrow">
              Before you register
            </span>

            <h2 className="national-sec-title">
              Frequently asked questions
            </h2>

          </div>


          {/* FAQ — 4 + 4 */}

          <div className="national-faq-grid national-reveal">


            {/* LEFT — FAQ 01 to 04 */}

            <div className="national-faq-column">

              {faqs.slice(0, 4).map(
                ([question, answer], index) => {

                  const actualIndex = index;

                  const isOpen =
                    openFaq === actualIndex;

                  return (

                    <div
                      className={`national-faq-item ${
                        isOpen
                          ? "national-faq-open"
                          : ""
                      }`}
                      key={question}
                    >

                      <button
                        className="national-faq-question"
                        onClick={() =>
                          setOpenFaq(
                            isOpen
                              ? null
                              : actualIndex
                          )
                        }
                      >

                        <span>

                          <span className="national-faq-index">
                            {String(
                              actualIndex + 1
                            ).padStart(2, "0")}
                          </span>

                          {question}

                        </span>

                        <span className="national-faq-plus"></span>

                      </button>


                      <div
                        className="national-faq-answer"
                        style={{
                          maxHeight: isOpen
                            ? "300px"
                            : "0px",
                        }}
                      >

                        <p>
                          {answer}
                        </p>

                      </div>

                    </div>

                  );

                }
              )}

            </div>


            {/* RIGHT — FAQ 05 to 08 */}

            <div className="national-faq-column">

              {faqs.slice(4, 8).map(
                ([question, answer], index) => {

                  const actualIndex = index + 4;

                  const isOpen =
                    openFaq === actualIndex;

                  return (

                    <div
                      className={`national-faq-item ${
                        isOpen
                          ? "national-faq-open"
                          : ""
                      }`}
                      key={question}
                    >

                      <button
                        className="national-faq-question"
                        onClick={() =>
                          setOpenFaq(
                            isOpen
                              ? null
                              : actualIndex
                          )
                        }
                      >

                        <span>

                          <span className="national-faq-index">
                            {String(
                              actualIndex + 1
                            ).padStart(2, "0")}
                          </span>

                          {question}

                        </span>

                        <span className="national-faq-plus"></span>

                      </button>


                      <div
                        className="national-faq-answer"
                        style={{
                          maxHeight: isOpen
                            ? "300px"
                            : "0px",
                        }}
                      >

                        <p>
                          {answer}
                        </p>

                      </div>

                    </div>

                  );

                }
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="national-footer">

        <div className="national-wrap national-foot-row">

          <div className="national-foot-logo">
            DROPSHY
          </div>

          <p className="national-foot-note">
            National dropshipping is subject to each
            marketplace's eligibility, category and
            delivery policies. Results depend on product
            costs, fees, competition and other business
            factors — dropshipping reduces certain
            inventory risks but is not risk-free.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default NationalEcommerce;