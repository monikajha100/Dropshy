import React, { useEffect, useState } from "react";
import "./Nationalecommerce.css";

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

const marketplaces = [
  {
    code: "AMZ · IN",
    title: "Amazon.in",
    text: "Reach customers across India through one of the country's largest online marketplaces.",
  },
  {
    code: "FKT · IN",
    title: "Flipkart",
    text: "List products and target buyers across India's extensive e-commerce market.",
  },
  {
    code: "MSH · IN",
    title: "Meesho",
    text: "Sell to value-conscious shoppers and resellers across the country.",
  },
  {
    code: "MYN · IN",
    title: "Myntra",
    text: "Suited to fashion and lifestyle sellers, subject to Myntra's seller requirements.",
  },
];

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

const NationalEcommerce = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const barcodeBars = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    height: `${10 + Math.random() * 32}px`,
    delay: `${0.9 + i * 0.012}s`,
  }));

  useEffect(() => {
    const revealElements = document.querySelectorAll(".national-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("national-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timelineElements = document.querySelectorAll(".national-tl-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Number(entry.target.dataset.step);
            setActiveStep(step);
          }
        });
      },
      { threshold: 0.5 }
    );

    timelineElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="national-page">
      <div className="national-bg-grid"></div>

      {/* NAVBAR */}
     

      {/* HERO */}
      <section className="national-hero">
        <div className="national-wrap national-hero-grid">
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
              Dropshy sets up your seller account on Amazon.in, Flipkart,
              Meesho and Myntra, and routes fulfillment through your
              dropshipping partner — so you can stay focused on listings,
              pricing and sales.
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

            <div className="national-barcode">
              {barcodeBars.map((bar) => (
                <span
                  key={bar.id}
                  style={{
                    height: bar.height,
                    animationDelay: bar.delay,
                  }}
                ></span>
              ))}
            </div>

            <div className="national-wb-route">
              <div
                className="national-wb-label"
                style={{ marginBottom: "8px" }}
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

                <circle
                  className="national-leaf-node"
                  cx="60"
                  cy="30"
                  r="6"
                />

                <text
                  className="national-node-label"
                  x="60"
                  y="18"
                  textAnchor="middle"
                >
                  AMAZON
                </text>

                <circle
                  className="national-leaf-node"
                  cx="340"
                  cy="30"
                  r="6"
                />

                <text
                  className="national-node-label"
                  x="340"
                  y="18"
                  textAnchor="middle"
                >
                  FLIPKART
                </text>

                <circle
                  className="national-leaf-node"
                  cx="60"
                  cy="120"
                  r="6"
                />

                <text
                  className="national-node-label"
                  x="60"
                  y="140"
                  textAnchor="middle"
                >
                  MEESHO
                </text>

                <circle
                  className="national-leaf-node"
                  cx="340"
                  cy="120"
                  r="6"
                />

                <text
                  className="national-node-label"
                  x="340"
                  y="140"
                  textAnchor="middle"
                >
                  MYNTRA
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* CITY TICKER */}
        <div className="national-ticker-wrap">
          <div className="national-wrap national-ticker-container">
            <div className="national-ticker">
              {[...cities, ...cities].map((city, index) => (
                <span key={`${city}-${index}`}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKETPLACES */}
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
              Each platform has its own eligibility and category rules —
              Dropshy sets up and trains you for the ones that fit your
              products.
            </p>
          </div>

          <div className="national-mp-grid">
            {marketplaces.map((marketplace) => (
              <div
                className="national-mp-card national-reveal"
                key={marketplace.code}
              >
                <div className="national-card-corner"></div>

                <span className="national-mp-code">
                  {marketplace.code}
                </span>

                <h3>{marketplace.title}</h3>

                <p>{marketplace.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        className="national-section-pad national-register-section"
        id="register"
      >
        <div className="national-wrap">
          <div className="national-sec-head national-reveal">
            <span className="national-sec-eyebrow">
              Seller registration process
            </span>

            <h2 className="national-sec-title">
              From sign-up to your first sale, in four checkpoints.
            </h2>
          </div>

          <div className="national-timeline national-reveal">
            <div className="national-tl-track">
              <div
                className="national-tl-track-fill"
                style={{
                  height: `${(activeStep / timeline.length) * 100}%`,
                }}
              ></div>
            </div>

            {timeline.map((item, index) => {
              const step = index + 1;

              return (
                <div
                  className={`national-tl-item ${
                    activeStep >= step ? "national-step-active" : ""
                  }`}
                  data-step={step}
                  key={item.number}
                >
                  <div className="national-tl-num">
                    {item.number}
                  </div>

                  <div className="national-tl-body">
                    <span className="national-tl-tag">
                      {item.tag}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    {item.preview && (
                      <div className="national-enroll-preview">
                        <span className="national-ep-label">
                          On successful submission, you'll receive your
                          enrollment number in this format
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
        </div>
      </section>

      {/* WHY DROPSHY */}
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

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="national-section-pad national-faq-section">
        <div className="national-wrap">
          <div className="national-sec-head national-reveal">
            <span className="national-sec-eyebrow">
              Before you register
            </span>

            <h2 className="national-sec-title">
              Frequently asked questions
            </h2>
          </div>

          <div className="national-faq-list national-reveal">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`national-faq-item ${
                    isOpen ? "national-faq-open" : ""
                  }`}
                  key={question}
                >
                  <button
                    className="national-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                  >
                    <span>
                      <span className="national-faq-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {question}
                    </span>

                    <span className="national-faq-plus"></span>
                  </button>

                  <div
                    className="national-faq-answer"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                    }}
                  >
                    <p>{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="national-section-pad">
        <div className="national-wrap">
          <div className="national-cta-band national-reveal">
            <div className="national-cta-inner">
              <div>
                <h2>
                  Ready to ship your business across India?
                </h2>

                <p className="national-cta-sub">
                  Turn your e-commerce idea into a scalable online
                  business — register today and Dropshy handles the setup.
                </p>
              </div>

              <a
                className="national-call-btn"
                href="tel:+918873768436"
              >
                <span className="national-ring"></span>
                +91 88737 68436
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="national-footer">
        <div className="national-wrap national-foot-row">
          <div className="national-foot-logo">
            DROPSHY
          </div>

          <p className="national-foot-note">
            National dropshipping is subject to each marketplace's
            eligibility, category and delivery policies. Results depend
            on product costs, fees, competition and other business
            factors — dropshipping reduces certain inventory risks but
            is not risk-free.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NationalEcommerce;