import React, { useEffect, useState } from "react";
import "./Internationalecommerce.css";
import sellerRegistration from "../../assets/images/seller-registration.png";

import {
  FaShieldAlt,
  FaCrown,
  FaCheckCircle,
  FaGlobeAmericas,
  FaShoppingCart,
  FaChartLine,
  FaUserTie,
  FaLock,
  FaHandshake,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa";

import { MdTrendingUp } from "react-icons/md";

/* =========================================================
   COUNTRIES
========================================================= */

const countries = [
  "USA",
  "UAE",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "135+ Countries",
];

/* =========================================================
   MARKETPLACES
========================================================= */

const marketplaces = [
  {
    code: "ETSY · GL",
    title: "Etsy",
    text: "Sell unique, creative, handmade and trending products to customers across international markets.",
  },
  {
    code: "EBAY · GL",
    title: "eBay",
    text: "Reach customers across multiple global markets with a wide range of products and categories.",
  },
  {
    code: "AMZ · COM",
    title: "Amazon.com",
    text: "Explore the large US e-commerce market and expand your product sales internationally.",
  },
  {
    code: "ALI · GL",
    title: "Alibaba",
    text: "Explore global sourcing, wholesale and B2B opportunities for your online business.",
  },
  {
    code: "WMT · GL",
    title: "Walmart",
    text: "Reach customers through one of the world's leading retail marketplaces.",
  },
  {
    code: "AMZ · UAE",
    title: "Amazon UAE",
    text: "Target customers in the UAE and explore opportunities across the Middle East.",
  },
  {
    code: "AMZ · B2B",
    title: "Amazon B2B",
    text: "Explore business-to-business selling opportunities and connect with professional buyers worldwide.",
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
    text: "Choose your plan and complete the seller registration process to begin your international e-commerce journey.",
    preview: true,
  },
  {
    number: "02",
    tag: "Advance payment",
    title: "Pay 50% in advance",
    text: "A 50% advance allows the account setup and onboarding process to begin for your selected international marketplaces.",
  },
  {
    number: "03",
    tag: "Setup & training",
    title: "Account setup and training",
    text: "Once your seller accounts are ready, receive guidance and training on managing your international e-commerce business.",
  },
  {
    number: "04",
    tag: "Go global",
    title: "Start selling internationally",
    text: "Go live on your selected marketplaces, receive orders and start exploring customers across global markets.",
  },
];

/* =========================================================
   GLOBAL E-COMMERCE PLATFORMS
========================================================= */

const platforms = [
  "Etsy",
  "Ebay",
  "Amazon.com",
  "Walmart",
  "Alibaba",
];

/* =========================================================
   GLOBAL E-COMMERCE PLANS
========================================================= */

const plans = [
  {
    tier: "basic",
    name: "BASIC",
    icon: <FaShieldAlt />,
    subtitle:
      "Etsy, Ebay, Amazon.com, Walmart and Alibaba",
    priceLines: [
      "₹7,999 +18% GST",
      "= ₹9,438 / per year",
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
    note: "Note - Top 10 Member",
  },

  {
    tier: "advance",
    name: "ADVANCE",
    icon: <FaShieldAlt />,
    subtitle:
      "Etsy, Ebay, Amazon.com, Walmart and Alibaba",
    priceLines: [
      "₹9,438 x 5 platform",
      "= ₹47,160 /-",
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
    note: "Note - Top 5 Member",
    featured: true,
  },

  {
    tier: "royal",
    name: "ROYAL",
    icon: <FaCrown />,
    subtitle:
      "Etsy, Ebay, Amazon.com, Walmart, Alibaba, amazon.dubai",
    priceLines: [
      "₹47,160 + ₹49,999",
      "= ₹97,190 /-",
    ],
    features: [
      "Personal Manager - B form (KYC)",
      "Govt. Documents - GST, MSME etc.",
      "500-1000 listing - (100 unique)",
      "Photoshoot",
      "Title & subtitles or Full Description",
      "Keywords & Tags",
      "Dispatch Manager",
      "Legality Services Agreement",
    ],
    note: "Note - Top 1 Member",
  },
];

/* =========================================================
   GROWTH / EARNING
========================================================= */

const growthStats = [
  {
    tier: "ADVANCE",
    total: "₹47,160",
    lines: [
      "Etsy, Ebay, Amazon.com, Walmart, Alibaba",
      "10 order Months - 10 x ₹3,000 = ₹30,000/-",
      "₹30,000 x 12 Months = ₹3,60,000 / year",
    ],
    earning: "3 - 4 Lakh / year",
  },

  {
    tier: "ROYAL",
    total: "₹97,190",
    lines: [
      "Etsy, Ebay, Amazon.com, Walmart and Alibaba, amazon.dubai",
      "15 order Months - 15 x ₹3,000 = ₹45,000/-",
      "₹45,000 x 12 Months = ₹5,40,000 / year",
    ],
    earning: "5 - 6 Lakh / year",
  },
];

/* =========================================================
   TRUST BADGES
========================================================= */

const trustBadges = [
  {
    icon: <FaUserTie />,
    label: "Personal Manager Support",
  },
  {
    icon: <FaLock />,
    label: "Secure Business",
  },
  {
    icon: <FaChartLine />,
    label: "Sales & Profit",
  },
  {
    icon: <FaHandshake />,
    label: "Professional Services",
  },
  {
    icon: <FaHeadset />,
    label: "Dedicated Support",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  [
    "What is Dropshy?",
    "Dropshy is a dropshipping platform designed to help sellers manage and grow their online business across major marketplaces in national and international markets.",
  ],

  [
    "What is international dropshipping?",
    "International dropshipping is an e-commerce model where sellers market products to customers in 135+ countries while the Dropshy fulfillment partner handles product fulfillment and shipping.",
  ],

  [
    "Which marketplaces can I sell on with Dropshy?",
    "Dropshy focuses on international marketplace opportunities including Etsy, eBay, Amazon.com, Alibaba, Walmart, Amazon UAE and Amazon B2B.",
  ],

  [
    "Can I start international dropshipping from India?",
    "Yes. Sellers in India can explore international dropshipping by targeting suitable overseas marketplaces and customers, subject to each marketplace's seller requirements, payment rules and shipping policies.",
  ],

  [
    "Can beginners use Dropshy for dropshipping?",
    "Yes. Dropshy can be suitable for beginners who want to explore marketplace-based dropshipping and learn how international e-commerce operations work.",
  ],

  [
    "What products can I sell through international dropshipping?",
    "The products you can sell depend on marketplace requirements, supplier availability, product category, destination-country regulations and marketplace policies. Sellers should verify product restrictions before listing.",
  ],

  [
    "Can I sell products on Amazon USA from India?",
    "Indian sellers may be able to sell on Amazon.com if they meet Amazon's seller eligibility, account, product, tax, payment and fulfillment requirements.",
  ],

  [
    "Can I sell on Amazon UAE through Dropshy?",
    "Dropshy can help sellers explore Amazon UAE as an international marketplace opportunity. Sellers must meet Amazon UAE's applicable seller and product requirements.",
  ],

  [
    "Do I need to maintain inventory for dropshipping?",
    "No. One of the main advantages of the dropshipping model is that sellers generally do not need to hold traditional inventory themselves. Products are fulfilled through Dropshy or the applicable fulfillment partner according to the business arrangement.",
  ],

  [
    "Why should I choose Dropshy for international dropshipping?",
    "Dropshy helps simplify international marketplace selling by bringing dropshipping operations and multiple marketplace opportunities into a more organized workflow, allowing sellers to focus on finding products, managing their business and growing their international customer base.",
  ],
];

/* =========================================================
   COMPONENT
========================================================= */

const InternationalEcommerce = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".international-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "international-in"
            );
          }
        });
      },
      {
        threshold: 0.12,
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
      document.querySelectorAll(
        ".international-tl-item"
      );

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
        threshold: 0.45,
      }
    );

    timelineElements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="international-page">

      <div className="international-bg-grid"></div>

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="international-hero">

        <div className="international-wrap international-hero-grid">

          <div className="international-hero-content">

            <span className="international-eyebrow">
              International E-Commerce · Global Marketplace
            </span>

            <h1 className="international-headline">
              Sell across the world
              <br />
              from <em>India.</em>
            </h1>

            <p className="international-hero-sub">
              Dropshy helps sellers explore international
              dropshipping opportunities across leading global
              marketplaces such as Etsy, eBay, Amazon.com,
              Alibaba, Walmart, Amazon UAE and Amazon B2B.
            </p>

            <p className="international-hero-sub secondary">
              From product selection and marketplace setup to
              order fulfillment, Dropshy brings the essential
              parts of international marketplace selling into
              a simpler workflow.
            </p>

            <div className="international-hero-cta">

              <a
                className="international-btn-primary"
                href="#register"
              >
                Start registration →
              </a>

              <a
                className="international-btn-ghost"
                href="tel:+918873768436"
              >
                Call now
              </a>

            </div>

            <div className="international-stats">

              <div>
                <strong>135+</strong>
                <span>Countries</span>
              </div>

              <div>
                <strong>7</strong>
                <span>Marketplaces</span>
              </div>

              <div>
                <strong>Global</strong>
                <span>Customer Reach</span>
              </div>

            </div>

          </div>

          {/* GLOBAL ROUTING CARD */}

          <div className="international-waybill">

            <div className="international-wb-top">

              <div>

                <div className="international-wb-label">
                  Global Seller Manifest
                </div>

                <div className="international-wb-title">
                  Dropshy International Dropshipping
                </div>

              </div>

              <div className="international-stamp">
                GLOBAL
              </div>

            </div>

            <div className="international-globe">

              <div className="international-globe-ring ring-one"></div>

              <div className="international-globe-ring ring-two"></div>

              <div className="international-globe-center">

                <span>DS</span>

                <small>DROPSHY</small>

              </div>

              <span className="global-node node-1">
                USA
              </span>

              <span className="global-node node-2">
                UAE
              </span>

              <span className="global-node node-3">
                UK
              </span>

              <span className="global-node node-4">
                EU
              </span>

              <span className="global-node node-5">
                AUS
              </span>

              <span className="global-node node-6">
                GLOBAL
              </span>

            </div>

            <div className="international-route-info">

              <div>
                <span>REACH</span>
                <strong>135+ Countries</strong>
              </div>

              <div>
                <span>MODEL</span>
                <strong>Dropshipping</strong>
              </div>

              <div>
                <span>MARKET</span>
                <strong>Worldwide</strong>
              </div>

            </div>

          </div>

        </div>

        {/* COUNTRY TICKER */}

        <div className="international-ticker-wrap">

          <div className="international-ticker">

            {[...countries, ...countries].map(
              (country, index) => (
                <span
                  key={`${country}-${index}`}
                >
                  {country}
                </span>
              )
            )}

          </div>

        </div>

      </section>

      {/* ===================================================
          MARKETPLACES
      =================================================== */}

      <section
        className="international-section-pad"
        id="marketplaces"
      >

        <div className="international-wrap">

          <div className="international-sec-head international-reveal">

            <span className="international-sec-eyebrow">
              Global marketplace opportunities
            </span>

            <h2 className="international-sec-title">
              One business. Multiple international
              marketplaces.
            </h2>

            <p className="international-sec-sub">
              Explore leading global platforms and expand
              your online selling opportunities beyond India.
            </p>

          </div>

          <div className="international-mp-grid">

            {marketplaces.map((marketplace) => (

              <div
                className="international-mp-card international-reveal"
                key={marketplace.code}
              >

                <div className="international-card-corner"></div>

                <span className="international-mp-code">
                  {marketplace.code}
                </span>

                <h3>{marketplace.title}</h3>

                <p>{marketplace.text}</p>

                <span className="international-card-arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          REGISTRATION
      =================================================== */}

      <section
        className="international-section-pad international-register-section"
        id="register"
      >

        <div className="international-wrap">

          <div className="international-sec-head international-reveal">

            <span className="international-sec-eyebrow">
              Seller registration process
            </span>

            <h2 className="international-sec-title">
              From registration to global selling.
            </h2>

            <p className="international-sec-sub">
              Follow a simple four-step onboarding journey
              to begin exploring international marketplace
              opportunities.
            </p>

          </div>

          <div className="international-registration-layout">

            {/* LEFT TIMELINE */}

            <div className="international-timeline international-reveal">

              <div className="international-tl-track">

                <div
                  className="international-tl-track-fill"
                  style={{
                    height: `${Math.min(
                      ((activeStep - 1) /
                        (timeline.length - 1)) *
                        100,
                      100
                    )}%`,
                  }}
                ></div>

              </div>

              {timeline.map((item, index) => {

                const step = index + 1;

                return (

                  <div
                    className={`international-tl-item ${
                      activeStep >= step
                        ? "international-step-active"
                        : ""
                    }`}
                    data-step={step}
                    key={item.number}
                  >

                    <div className="international-tl-num">
                      {item.number}
                    </div>

                    <div className="international-tl-body">

                      <span className="international-tl-tag">
                        {item.tag}
                      </span>

                      <h3>{item.title}</h3>

                      <p>{item.text}</p>

                      {item.preview && (

                        <div className="international-enroll-preview">

                          <span className="international-ep-label">
                            After successful submission,
                            you'll receive your seller
                            enrollment number
                          </span>

                          <span className="international-ep-number">
                            DSH-YYMMDD-XXX
                          </span>

                        </div>

                      )}

                    </div>

                  </div>

                );

              })}

            </div>

            {/* RIGHT IMAGE */}

            <div className="international-registration-visual international-reveal">

              <div className="international-image-orbit orbit-a"></div>

              <div className="international-image-orbit orbit-b"></div>

              <div className="registration-image-glow"></div>

              <div className="registration-image-card">

                <div className="registration-image-label">

                  <span className="live-dot"></span>

                  SELLER ONBOARDING

                </div>

                <img
                  src={sellerRegistration}
                  alt="Dropshy international seller registration"
                  className="registration-image"
                />

                <div className="registration-image-bottom">

                  <div>
                    <span>STATUS</span>
                    <strong>Ready to Start</strong>
                  </div>

                  <div>
                    <span>MARKET</span>
                    <strong>GLOBAL</strong>
                  </div>

                </div>

              </div>

              <div className="registration-floating-card registration-float-top">

                <span className="floating-icon">
                  ✓
                </span>

                <div>
                  <strong>
                    Quick Registration
                  </strong>

                  <small>
                    Simple seller onboarding
                  </small>
                </div>

              </div>

              <div className="registration-floating-card registration-float-bottom">

                <span className="floating-icon">
                  🌎
                </span>

                <div>
                  <strong>
                    Go International
                  </strong>

                  <small>
                    Explore global marketplaces
                  </small>
                </div>

              </div>

              <div className="registration-floating-card registration-float-side">

                <span className="floating-icon">
                  🚀
                </span>

                <div>
                  <strong>
                    Start Selling
                  </strong>

                  <small>
                    Build your global business
                  </small>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          GLOBAL E-COMMERCE BUSINESS / PLANS
          YAHI TUMHARA GLOBAL ECOMMERCE HERO CODE ADD HAI
      =================================================== */}

      <section className="gec-page">

        {/* GLOBAL HERO */}

        <div className="gec-hero">

          <div className="gec-hero-inner">

            <div className="gec-hero-side gec-hero-left">

              <FaGlobeAmericas className="gec-globe-icon" />

              <FaShoppingCart className="gec-cart-icon" />

            </div>

            <div className="gec-hero-center">

              <span className="gec-hero-eyebrow">
                GLOBAL
              </span>

              <h2 className="gec-hero-title">
                E-COMMERCE
              </h2>

              <span className="gec-hero-eyebrow">
                BUSINESS
              </span>

            </div>

            <div className="gec-hero-side gec-hero-right">

              <div className="gec-sell-badge">

                <MdTrendingUp />

                <span>
                  SELL GLOBAL
                </span>

                <small>
                  GROW BIG
                </small>

              </div>

            </div>

          </div>

          {/* PLATFORM STRIP */}

          <div className="gec-platform-strip">

            {platforms.map((p) => (

              <span
                className="gec-platform-chip"
                key={p}
              >
                {p}
              </span>

            ))}

          </div>

          <div className="gec-grow-badge">

            <MdTrendingUp />

            <span>
              GROW GLOBAL
            </span>

            <small>
              EARN MORE
            </small>

          </div>

        </div>

        {/* PLAN CARDS */}

        <div className="gec-grid">

          {plans.map((plan) => (

            <div
              className={`gec-card gec-${plan.tier} ${
                plan.featured
                  ? "gec-featured"
                  : ""
              }`}
              key={plan.tier}
            >

              {plan.featured && (

                <span className="gec-featured-tag">
                  Most Popular
                </span>

              )}

              <div className="gec-badge">
                {plan.icon}
              </div>

              <h3 className="gec-name">
                {plan.name}
              </h3>

              <p className="gec-subtitle">
                {plan.subtitle}
              </p>

              <div className="gec-price">

                <span>
                  {plan.priceLines[0]}
                </span>

                <strong>
                  {plan.priceLines[1]}
                </strong>

              </div>

              <ul className="gec-features">

                {plan.features.map((feature) => (

                  <li key={feature}>

                    <FaCheckCircle className="gec-check" />

                    <span>
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              <div className="gec-note">
                {plan.note}
              </div>

            </div>

          ))}

        </div>

        {/* GROWTH / EARNING PANEL */}

        <div className="gec-growth-panel">

          {growthStats.map((stat, index) => (

            <React.Fragment key={stat.tier}>

              <div
                className={`gec-growth-card growth-${stat.tier.toLowerCase()}`}
              >

                <div className="gec-growth-head">

                  <span>
                    {stat.tier} :-
                  </span>

                  <strong>
                    ( {stat.total} )
                  </strong>

                </div>

                <ul className="gec-growth-lines">

                  {stat.lines.map(
                    (line, lineIndex) => (

                      <li key={lineIndex}>

                        <span className="gec-growth-arrow">
                          ›
                        </span>

                        {line}

                      </li>

                    )
                  )}

                </ul>

                <div className="gec-growth-earning">

                  <FaMoneyBillWave />

                  Earning up to{" "}

                  <strong>
                    {stat.earning}
                  </strong>{" "}

                  1 year

                </div>

              </div>

              {index === 0 && (

                <div className="gec-growth-center">

                  <FaGlobeAmericas className="gec-growth-globe" />

                </div>

              )}

            </React.Fragment>

          ))}

        </div>

        {/* TRUST BADGES */}

        <div className="gec-trust-row">

          {trustBadges.map((badge) => (

            <div
              className="gec-trust-item"
              key={badge.label}
            >

              <div className="gec-trust-icon">
                {badge.icon}
              </div>

              <span>
                {badge.label}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* ===================================================
          SIMPLIFY
      =================================================== */}

      <section className="international-simplify-section">

        <div className="international-wrap">

          <div className="international-simplify-grid">

            <div className="international-simplify-content international-reveal">

              <span className="international-sec-eyebrow">
                DROPSHY ADVANTAGE
              </span>

              <h2 className="international-simplify-title">

                Simplify Your

                <span>
                  {" "}Dropshipping Business
                </span>

              </h2>

              <p className="international-simplify-text">

                Dropshy brings marketplace selling and
                dropshipping operations together, helping
                sellers focus on{" "}

                <strong>
                  product selection, store growth and
                  customer acquisition
                </strong>{" "}

                while reducing the complexity of daily
                operations.

              </p>

              <a
                href="#register"
                className="international-simplify-btn"
              >
                Start Selling Globally

                <span>
                  →
                </span>

              </a>

            </div>

            <div className="international-simplify-visual international-reveal">

              <div className="international-simplify-orbit"></div>

              <div className="international-simplify-cards">

                <div className="international-simplify-card simplify-card-1">

                  <div className="international-simplify-icon">
                    🛍️
                  </div>

                  <div>

                    <h3>
                      Product Selection
                    </h3>

                    <p>
                      Explore products suitable
                      for international marketplaces.
                    </p>

                  </div>

                </div>

                <div className="international-simplify-card simplify-card-2">

                  <div className="international-simplify-icon">
                    📈
                  </div>

                  <div>

                    <h3>
                      Store Growth
                    </h3>

                    <p>
                      Expand your catalog and
                      marketplace presence as your
                      business grows.
                    </p>

                  </div>

                </div>

                <div className="international-simplify-card simplify-card-3">

                  <div className="international-simplify-icon">
                    🌎
                  </div>

                  <div>

                    <h3>
                      Global Customers
                    </h3>

                    <p>
                      Explore customers across
                      international markets.
                    </p>

                  </div>

                </div>

                <div className="international-simplify-card simplify-card-4">

                  <div className="international-simplify-icon">
                    ⚡
                  </div>

                  <div>

                    <h3>
                      Simplified Operations
                    </h3>

                    <p>
                      Reduce the complexity of
                      managing your dropshipping
                      workflow.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          FAQ
      =================================================== */}

      <section className="international-section-pad international-faq-section">

        <div className="international-wrap">

          <div className="international-sec-head international-reveal">

            <span className="international-sec-eyebrow">
              Before you register
            </span>

            <h2 className="international-sec-title">
              Frequently asked questions
            </h2>

          </div>

          <div className="international-faq-list international-reveal">

            {faqs.map(
              ([question, answer], index) => {

                const isOpen =
                  openFaq === index;

                return (

                  <div
                    className={`international-faq-item ${
                      isOpen
                        ? "international-faq-open"
                        : ""
                    }`}
                    key={question}
                  >

                    <button
                      className="international-faq-question"
                      onClick={() =>
                        setOpenFaq(
                          isOpen
                            ? null
                            : index
                        )
                      }
                    >

                      <span>

                        <span className="international-faq-index">
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        {question}

                      </span>

                      <span className="international-faq-plus"></span>

                    </button>

                    <div
                      className="international-faq-answer"
                      style={{
                        maxHeight: isOpen
                          ? "350px"
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

      </section>

      {/* ===================================================
          CTA
      =================================================== */}

      <section className="international-section-pad">

        <div className="international-wrap">

          <div className="international-cta-band international-reveal">

            <div className="international-cta-inner">

              <div>

                <span className="international-cta-label">
                  READY TO GO GLOBAL?
                </span>

                <h2>
                  Take your e-commerce business
                  <br />
                  beyond India.
                </h2>

                <p className="international-cta-sub">
                  Register today and explore
                  international dropshipping
                  opportunities with Dropshy.
                </p>

              </div>

              <a
                className="international-call-btn"
                href="tel:+918873768436"
              >

                <span className="international-ring"></span>

                +91 88737 68436

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="international-footer">

        <div className="international-wrap international-foot-row">

          <div className="international-foot-logo">
            DROPSHY
          </div>

          <p className="international-foot-note">
            International dropshipping is subject to each
            marketplace's eligibility, category, payment,
            tax, product and delivery policies. Results
            depend on product costs, fees, competition and
            other business factors.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default InternationalEcommerce;