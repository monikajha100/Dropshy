import React, { useEffect, useState } from "react";
import "./Nationaleweb.css"; // same shared stylesheet — contains both .international-* and .gec-* classes used below

import {
  FaRocket,
  FaGem,
  FaCrown,
  FaCheckCircle,
  FaStore,
  FaBoxOpen,
  FaBullhorn,
  FaShoppingCart,
  FaCogs,
  FaTruck,
  FaMoneyBillWave,
  FaWarehouse,
  FaCamera,
  FaPalette,
  FaGlobe,
  FaBoxes,
} from "react-icons/fa";
import WEB from "./WEB";
/* =========================================================
   MARKETING CHANNELS (ticker)
========================================================= */

const channels = [
  "Instagram",
  "Facebook",
  "Google",
  "WhatsApp",
  "SEO",
  "Social Media",
  "200+ Products",
  "National Reach",
];

/* =========================================================
   HOW WEBSITE DROPSHIPPING WORKS — 7 STEPS
========================================================= */

const processSteps = [
  {
    code: "STEP · 01",
    title: "Choose Products",
    text: "Select products from available product categories and SKUs to sell on your store.",
  },
  {
    code: "STEP · 02",
    title: "Add to Your Website",
    text: "Products are listed on your e-commerce website with product details, images and pricing.",
  },
  {
    code: "STEP · 03",
    title: "Promote Your Store",
    text: "Promote your website through Instagram, Facebook, Google, WhatsApp and other marketing channels.",
  },
  {
    code: "STEP · 04",
    title: "Customer Places an Order",
    text: "When a customer purchases a product from your website, you receive the order.",
  },
  {
    code: "STEP · 05",
    title: "Dropshy Processes the Order",
    text: "The order is processed through the Dropshy supply and fulfillment system.",
  },
  {
    code: "STEP · 06",
    title: "Packed & Dispatched",
    text: "Product handling, labeling, packaging and dispatching are supported through the Dropshy ecosystem.",
  },
  {
    code: "STEP · 07",
    title: "You Earn Your Margin",
    text: "Your profit depends on your selling price minus product/fulfillment cost and applicable business expenses.",
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
    text: "Registration fee is ₹500 or ₹1000, depending on the plan you choose. After registration, it takes approximately 5–10 days to pay 50% in advance.",
  },
  {
    number: "02",
    tag: "Advance payment",
    title: "Pay 50% in advance",
    text: "A 50% advance payment is required to create your seller account on national platforms and begin store setup.",
  },
  {
    number: "03",
    tag: "Setup & training",
    title: "Account setup & training",
    text: "Once your seller account is successfully created, you'll receive complete training. After training, you can pay the remaining 50%, or pay after you start earning.",
  },
  {
    number: "04",
    tag: "Start selling",
    title: "Start selling & earning",
    text: "After your account is ready and training is complete, you can start receiving orders and begin earning your margin.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  { icon: <FaBoxes />, label: "No Upfront Inventory" },
  { icon: <FaWarehouse />, label: "No Dead Stock" },
  { icon: <FaCamera />, label: "No Photography Expenses" },
  { icon: <FaStore />, label: "No Warehouse Cost" },
  { icon: <FaTruck />, label: "No Packaging & Dispatch Hassle" },
  { icon: <FaPalette />, label: "Build Your Own Brand" },
  { icon: <FaGlobe />, label: "Sell From Anywhere" },
  { icon: <FaBullhorn />, label: "Focus on Sales & Marketing" },
];

/* =========================================================
   PACKAGES — BASIC / ADVANCE / ROYAL
========================================================= */

const plans = [
  {
    tier: "basic",
    name: "BASIC",
    icon: <FaRocket />,
    subtitle: "Perfect for New Entrepreneurs starting their first online store.",
    priceLabel: "₹5,000 + 18% GST",
    price: "₹5,900 /-",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Website",
      "Website Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 200 Product Listings",
      "Up to 200 Product Photography / Model Shoot",
      "Product Titles, Keywords & Tags",
      "Product Description / Content",
      "3 Website Banners",
      "Product Categories Setup",
      "Contact Us / About Us / FAQ Pages",
      "WhatsApp Integration",
      "Payment Gateway Integration",
      "Admin or Order Panel Training",
    ],
    note: "Perfect for New Entrepreneurs",
  },
  {
    tier: "advance",
    name: "ADVANCE",
    icon: <FaGem />,
    subtitle: "Ideal for Growing Businesses that need more reach and content.",
    priceLabel: "₹10,000 + 18% GST",
    price: "₹11,800 /-",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Website",
      "Custom Website Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 500 Product Listings",
      "Up to 500 Product Photography / Model Shoot",
      "Product Titles, Keywords & Tags",
      "SEO-Friendly Product Content",
      "6 Premium Banners",
      "Professional Logo Design",
      "WhatsApp Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "Social Media Management – 2 Months",
      "Admin, Order or Shipping Panel Training",
    ],
    note: "Ideal for Growing Businesses",
    featured: true,
  },
  {
    tier: "royal",
    name: "ROYAL",
    icon: <FaCrown />,
    subtitle: "Best for Scaling Your Business with a premium brand presence.",
    priceLabel: "₹20,000 + 18% GST",
    price: "₹23,600 /-",
    features: [
      "Domain & Hosting/Server – 1 Year",
      "Professional E-commerce Email",
      "Premium E-commerce Website",
      "Custom UI/UX Design & Development",
      "Responsive Mobile-Friendly Design",
      "Up to 1000 Product Listings",
      "Up to 1000 Product Photography / Model Shoot",
      "Product Titles, Tags, Keywords & Content",
      "10 Premium Banners",
      "Professional Logo & Brand Identity",
      "WhatsApp Integration",
      "Payment Gateway Integration – National + International",
      "SEO-Friendly Website Structure",
      "Social Media Integration",
      "Social Media Management – 6 Months",
      "All Admin Panel Training",
      "Order Management Training",
    ],
    note: "Best for Scaling Your Business",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  [
    "What is Website Dropshipping with Dropshy?",
    "Website Dropshipping with Dropshy allows you to launch your own e-commerce website and sell products without maintaining your own inventory or warehouse. You can focus on marketing, customers and sales while product processing and fulfillment support are managed through the Dropshy system.",
  ],
  [
    "Do I need to purchase inventory before starting?",
    "No. In the Dropshy model, products are generally processed after you receive an order, so you don't need to purchase large quantities of inventory in advance.",
  ],
  [
    "Can I create my own brand with Dropshy?",
    "Yes. You can operate your own professional e-commerce website under your chosen business or brand name and build your digital presence.",
  ],
  [
    "How many products can I add to my website?",
    "The number of products depends on your selected Dropshy package. Product listings can include product images, descriptions, pricing, keywords, tags and other relevant details.",
  ],
  [
    "Who will handle product packaging and dispatch?",
    "Orders are processed through the Dropshy supply and fulfillment system. Product handling, labeling, packaging and dispatch support are managed through the Dropshy ecosystem, subject to the applicable service terms.",
  ],
  [
    "Do I need my own warehouse for website dropshipping?",
    "No. You generally do not need to maintain your own warehouse for products handled through the Dropshy fulfillment system.",
  ],
  [
    "How do I get product photos and content for my website?",
    "For supported products, Dropshy can provide product photography/assets and product-related content. The exact number of products and creative services depends on your selected package.",
  ],
  [
    "How do I earn profit through website dropshipping?",
    "You set the selling price for your products, subject to applicable pricing and business rules. Your potential margin is generally the difference between your selling price and the applicable product/fulfillment cost, after considering payment gateway, marketing, taxes and other business expenses.",
  ],
  [
    "Can I promote my Dropshy website on social media and Google?",
    "Yes. You can promote your online store through platforms such as Instagram, Facebook, Google, WhatsApp and other digital marketing channels. SEO and digital marketing can help increase your website's visibility and reach.",
  ],
  [
    "Is Website Dropshipping suitable for beginners?",
    "Yes. Website dropshipping can be suitable for beginners because it can reduce the need for upfront inventory, warehouse management, packaging and dispatch operations. However, success depends on factors such as product selection, pricing, marketing, customer service and sales performance.",
  ],
];

/* =========================================================
   COMPONENT
========================================================= */

const NationalEcommerceweb = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".international-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("international-in");
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timelineElements = document.querySelectorAll(".international-tl-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveStep(Number(entry.target.dataset.step));
        });
      },
      { threshold: 0.45 }
    );
    timelineElements.forEach((el) => observer.observe(el));
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
              National E-Commerce · Website Dropshipping
            </span>

            <h1 className="international-headline">
              Your Online Store.
              <br />
              Your <em>Brand.</em> Your Business.
            </h1>

            <p className="international-hero-sub">
              Dropshy Website Dropshipping helps you launch your own professional
              e-commerce website — no inventory, no warehouse, no product
              photography, packaging or dispatch operations to manage yourself.
            </p>

            <p className="international-hero-sub secondary">
              Focus on marketing, customers and sales, while product processing
              and fulfillment support are managed through the Dropshy system.
            </p>

            <div className="international-hero-cta">
              <a className="international-btn-primary" href="#pricing">
                View packages →
              </a>
              <a className="international-btn-ghost" href="tel:+918873768436">
                Call now
              </a>
            </div>

            <div className="international-stats">
              <div>
                <strong>1000+</strong>
                <span>Product Listings</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Ready Plans</span>
              </div>
              <div>
                <strong>National</strong>
                <span>Market Reach</span>
              </div>
            </div>
          </div>

          {/* STORE MANIFEST CARD */}
          <div className="international-waybill">
            <div className="international-wb-top">
              <div>
                <div className="international-wb-label">Website Seller Manifest</div>
                <div className="international-wb-title">Dropshy Website Dropshipping</div>
              </div>
              <div className="international-stamp">NATIONAL</div>
            </div>

            <div className="international-globe">
              <div className="international-globe-ring ring-one"></div>
              <div className="international-globe-ring ring-two"></div>

              <div className="international-globe-center">
                <span>DS</span>
                <small>DROPSHY</small>
              </div>

              <span className="global-node node-1">SEO</span>
              <span className="global-node node-2">WHATSAPP</span>
              <span className="global-node node-3">PAYMENT</span>
              <span className="global-node node-4">SOCIAL</span>
              <span className="global-node node-5">HOSTING</span>
              <span className="global-node node-6">SUPPORT</span>
            </div>

            <div className="international-route-info">
              <div>
                <span>REACH</span>
                <strong>National India</strong>
              </div>
              <div>
                <span>MODEL</span>
                <strong>Dropshipping</strong>
              </div>
              <div>
                <span>MARKET</span>
                <strong>E-Commerce</strong>
              </div>
            </div>
          </div>
        </div>

        {/* CHANNEL TICKER */}
        <div className="international-ticker-wrap">
          <div className="international-ticker">
            {[...channels, ...channels].map((c, i) => (
              <span key={`${c}-${i}`}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          HOW IT WORKS — 7 STEP PROCESS
      =================================================== */}
      <section className="international-section-pad" id="how-it-works">
        <div className="international-wrap">
          <div className="international-sec-head international-reveal">
            <span className="international-sec-eyebrow">How website dropshipping works</span>
            <h2 className="international-sec-title">
              From choosing products to earning your margin.
            </h2>
            <p className="international-sec-sub">
              A simple seven-step workflow — you handle sales and marketing,
              Dropshy supports the rest.
            </p>
          </div>

          <div className="international-mp-grid">
            {processSteps.map((step) => (
              <div className="international-mp-card international-reveal" key={step.code}>
                <div className="international-card-corner"></div>
                <span className="international-mp-code">{step.code}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="international-card-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
<WEB />
      {/* ===================================================
          REGISTRATION
      =================================================== */}
      <section
        className="international-section-pad international-register-section"
        id="register"
      >
        <div className="international-wrap">
          <div className="international-sec-head international-reveal">
            <span className="international-sec-eyebrow">Dropshy website registration</span>
            <h2 className="international-sec-title">
              Start your journey towards online success.
            </h2>
            <p className="international-sec-sub">
              Follow this simple four-step process to launch your own branded store.
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
                      ((activeStep - 1) / (timeline.length - 1)) * 100,
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
                      activeStep >= step ? "international-step-active" : ""
                    }`}
                    data-step={step}
                    key={item.number}
                  >
                    <div className="international-tl-num">{item.number}</div>
                    <div className="international-tl-body">
                      <span className="international-tl-tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT VISUAL */}
            <div className="international-registration-visual international-reveal">
              <div className="international-image-orbit orbit-a"></div>
              <div className="international-image-orbit orbit-b"></div>
              <div className="registration-image-glow"></div>

              <div className="registration-image-card">
                <div className="registration-image-label">
                  <span className="live-dot"></span>
                  STORE ONBOARDING
                </div>

                {/* mock store preview (no image asset needed) */}
                <div
                  className="registration-image"
                  style={{
                    minHeight: 260,
                    background:
                      "linear-gradient(150deg,#eef6fb,#e5f4fa 60%,#fdead0)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    textAlign: "center",
                    padding: 20,
                  }}
                >
                  <FaStore size={40} color="#0284c7" />
                  <strong style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Your Branded Online Store
                  </strong>
                  <small style={{ color: "#69728d", fontSize: 11 }}>
                    Domain · Hosting · Payments · WhatsApp — all set up for you
                  </small>
                </div>

                <div className="registration-image-bottom">
                  <div>
                    <span>STATUS</span>
                    <strong>Ready to Start</strong>
                  </div>
                  <div>
                    <span>MARKET</span>
                    <strong>NATIONAL</strong>
                  </div>
                </div>
              </div>

              <div className="registration-floating-card registration-float-top">
                <span className="floating-icon">✓</span>
                <div>
                  <strong>Quick Registration</strong>
                  <small>Simple seller onboarding</small>
                </div>
              </div>

              <div className="registration-floating-card registration-float-bottom">
                <span className="floating-icon">🎨</span>
                <div>
                  <strong>Own Brand</strong>
                  <small>Your name, your store</small>
                </div>
              </div>

              <div className="registration-floating-card registration-float-side">
                <span className="floating-icon">💰</span>
                <div>
                  <strong>Start Earning</strong>
                  <small>Sell and earn your margin</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SIMPLIFY / CORE VALUE PROPS
      =================================================== */}
      


      

      {/* ===================================================
          FAQ
      =================================================== */}
      <section className="international-section-pad international-faq-section">
        <div className="international-wrap">
          <div className="international-sec-head international-reveal">
            <span className="international-sec-eyebrow">Before you register</span>
            <h2 className="international-sec-title">Frequently asked questions</h2>
          </div>

          <div className="international-faq-list international-reveal">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  className={`international-faq-item ${
                    isOpen ? "international-faq-open" : ""
                  }`}
                  key={question}
                >
                  <button
                    className="international-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>
                      <span className="international-faq-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {question}
                    </span>
                    <span className="international-faq-plus"></span>
                  </button>

                  <div
                    className="international-faq-answer"
                    style={{ maxHeight: isOpen ? "350px" : "0px" }}
                  >
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          CTA
      =================================================== */}
     
      
    </div>
  );
};

export default NationalEcommerceweb;